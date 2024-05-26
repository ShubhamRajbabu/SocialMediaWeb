import React from "react";
import "./register.scss";

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
            <button>Register</button>
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
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
