import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email) {
      setMessage('Please provide us your email');
      setIsError(true);
    } else if (!email.match(emailRegex)) {
      setMessage('Please provide us your valid email');
      setIsError(true);
    } else {
      setMessage('Thank you for subscribing to our newsletter.');
      setIsError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        {isError && <img src="./images/icon-error.svg" className="icon-error" alt="icon-error" />}
        <button type="submit">
          <img src="./images/icon-arrow.svg" alt="icon-arrow" />
        </button>
      </div>
      <p className={isError ? 'text-error' : 'text-success'}>{message}</p>
    </form>
  );
};

export default SubscriptionForm;
