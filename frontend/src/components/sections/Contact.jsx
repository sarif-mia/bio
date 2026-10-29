import React, { useState } from 'react';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { api, ApiError } from '../../services/api';
import { profile, socials } from '../../data/portfolio';
import './Contact.css';

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please add a subject.';
  if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
};

const contactDetails = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'linkedin', label: 'LinkedIn', value: 'in/sarif-mia', href: 'https://www.linkedin.com/in/sarif-mia/' },
  { icon: 'mapPin', label: 'Location', value: profile.location },
];

const Field = ({ id, label, error, children }) => (
  <div className={`form-field ${error ? 'has-error' : ''}`}>
    <label htmlFor={id}>{label}</label>
    {children}
    {error && <span className="field-error" id={`${id}-error`} role="alert">{error}</span>}
  </div>
);

const Contact = () => {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientErrors = validate(values);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length) return;

    setStatus({ state: 'submitting', message: '' });
    try {
      const res = await api.submitContactForm(values);
      setStatus({ state: 'success', message: res.message || "Thanks! I'll get back to you soon." });
      setValues(EMPTY_FORM);
    } catch (err) {
      if (err instanceof ApiError && err.data?.errors) setErrors(err.data.errors);
      setStatus({
        state: 'error',
        message: `Something went wrong sending your message. Please try again or email me at ${profile.email}.`,
      });
    }
  };

  const inputProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const submitting = status.state === 'submitting';

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          accent="together"
          subtitle="Have a project, a role or a question? Send a message and I'll get back to you."
        />

        <div className="contact-grid">
          <Reveal className="contact-info">
            <h3>Get in touch</h3>
            <p>
              Whether it's business software, an e-commerce store or an IT problem that needs solving, I'm happy to
              talk it through. You can also reach me directly by email or on LinkedIn.
            </p>

            <ul className="contact-details">
              {contactDetails.map((d) => (
                <li key={d.label}>
                  <span className="contact-icon"><Icon name={d.icon} /></span>
                  <div>
                    <span className="contact-label">{d.label}</span>
                    {d.href
                      ? <a href={d.href} {...(d.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>{d.value}</a>
                      : <span>{d.value}</span>}
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact-socials">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="icon-btn">
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="contact-form card" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <Field id="name" label="Name" error={errors.name}>
                  <input type="text" autoComplete="name" placeholder="Jane Doe" {...inputProps('name')} />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input type="email" autoComplete="email" placeholder="jane@company.com" {...inputProps('email')} />
                </Field>
              </div>
              <Field id="subject" label="Subject" error={errors.subject}>
                <input type="text" placeholder="Project inquiry" {...inputProps('subject')} />
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <textarea rows={6} placeholder="Tell me about your project, timeline and budget…" {...inputProps('message')} />
              </Field>

              <button type="submit" className="btn btn-primary submit-btn" disabled={submitting}>
                {submitting ? <><span className="spinner" aria-hidden="true" /> Sending…</> : <>Send message <Icon name="send" size={18} /></>}
              </button>

              <div aria-live="polite">
                {(status.state === 'success' || status.state === 'error') && (
                  <p className={`form-status ${status.state}`}>
                    <Icon name={status.state === 'success' ? 'checkCircle' : 'alert'} />
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
