import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const handleLogin = (e:any) => {
    e.preventDefault();
    navigate('/userdetails');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="form-box w-100" style={{ maxWidth: '400px' }}>
        <form className="p-4 rounded shadow-lg bg-white" onSubmit={handleLogin}>
          <h2 className="subtitle text-center mb-4">Login</h2>

          {/* Username Input */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update username
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password
              required
            />
          </div>

          {/* Login Button */}
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
