import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const SocialLogin = () => {

    

    const { signInGoogle } = useAuth();


    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
            console.log(result.user);
            navigate(location.state || "/")
            })
            .catch(error => {
            console.log(error);
            
        })
}

    return (
      <div className='text-center p-2'>
        <p className='mb-2' >Or</p>
        {/* Google Button */}
            <button
                onClick={ handleGoogleSignIn }
                className=" w-full flex items-center justify-center gap-3 bg-gray-100 border border-gray-300 py-2 rounded-md hover:bg-gray-200 transition">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Register with Google
        </button>
      </div>
    );
};

export default SocialLogin;