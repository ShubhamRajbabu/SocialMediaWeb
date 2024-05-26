import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>
        <div className="right">
          <h1>Shubbu Social.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ut
            labore possimus sed expedita harum natus perspiciatis, quae incidunt
            dignissimos!
          </p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
