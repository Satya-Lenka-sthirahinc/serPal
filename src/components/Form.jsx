import React from 'react';
import Input from './inputpage/Input';
import Button from './butoon/Button';
import ErrorMessage from './errormessage/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Form = ({ isLogin, onSubmit, email, setEmail, password, setPassword, username, setUsername, error }) => {
  return (
    <form onSubmit={onSubmit} className="p-4 border rounded shadow-sm bg-light">
    
      {!isLogin && (
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="form-control"
          />
        </div>
      )}
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="form-control"
        />
      </div>

      <Button type="submit" className="btn btn-primary w-100">
        {isLogin ? 'Login' : 'Register'}
      </Button>

      <ErrorMessage message={error} />
    </form>
  );
};

export default Form;
