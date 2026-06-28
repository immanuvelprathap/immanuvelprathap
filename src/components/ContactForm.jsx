import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  label {
    font-family: 'Outfit', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  input,
  textarea {
    width: 100%;
    font-size: 1.5rem;
    padding: 1.4rem 1.6rem;
    color: var(--text-primary);
    background-color: var(--panel-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.25s ease, background-color 0.25s ease;

    &:focus {
      border-color: var(--text-primary);
      background-color: var(--bg-color);
    }
  }

  textarea {
    min-height: 180px;
    resize: vertical;
  }

  button[type='submit'] {
    background-color: var(--text-primary);
    color: var(--black);
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 1.4rem 3rem;
    border-radius: 8px;
    align-self: flex-start;
    transition: transform 0.2s ease, opacity 0.2s ease;
    
    &:hover {
      transform: scale(1.02);
      opacity: 0.9;
    }
    
    &:active {
      transform: scale(0.98);
    }
  }

  @media only screen and (max-width: 768px) {
    button[type='submit'] {
      width: 100%;
      align-self: stretch;
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, form sending logic would go here
    alert(`Thank you ${name}! Your message has been sent (simulation).`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
        />
      </div>
      <button type="submit">Send Message</button>
    </FormStyle>
  );
}