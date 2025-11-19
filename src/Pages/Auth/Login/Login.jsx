import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser} = useAuth();

    const handleLogin = (data) => {
        console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
            console.log(result.user);
            
            })
            .catch(error => {
            console.log(error);
            
        })
    }

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          {/* Email Field */}

          <label className="label">Email</label>
                  <input {
                      ...register('email',
                          {required: true}
                      )
                  } type="email" className="input" placeholder="Email" />
                  {
                    errors.email?.type==='required' && <p className="text-red-500">Email is required</p>  
                  }
          {/* Password Field */}
          <label  className="label">Password</label>
                  <input {
                      ...register('password',
                          {required: true, minLength: 6  }
                      )
                  } type="password" className="input" placeholder="Password" />
                  {
                      errors.password?.type === 'minLength' && <p className="text-red-500">
                          Password must have 6 characters.
                      </p>
                  }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
