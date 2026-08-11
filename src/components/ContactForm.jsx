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
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.3s ease;
  }

  .form-group:focus-within label {
    color: var(--glow-cyan);
  }

  input,
  textarea {
    width: 100%;
    font-size: 1.5rem;
    padding: 1.4rem 1.6rem;
    color: var(--text-primary);
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: var(--glow-cyan);
      background-color: rgba(0, 242, 254, 0.02);
      box-shadow: 0 0 15px rgba(0, 242, 254, 0.12);
    }
  }

  textarea {
    min-height: 180px;
    resize: vertical;
  }

  button[type='submit'] {
    background: var(--grad-hybrid);
    color: #030307;
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 1.4rem 3.2rem;
    border-radius: 8px;
    align-self: flex-start;
    box-shadow: 0 5px 15px rgba(0, 242, 254, 0.15);
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 25px rgba(0, 242, 254, 0.25);
      filter: brightness(1.1);
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