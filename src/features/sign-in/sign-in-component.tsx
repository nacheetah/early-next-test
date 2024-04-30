import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

import { redirectIfUserIsLoggedIn } from '@/hocs/redirect';
import { connect } from 'react-redux';
import { setUserCredential } from '../app-loader/app-loader.reducer';

// const mapDispatchToProps = { login: setUserCredential };

export function SignInComponent({
  login,
  userCredential
}: Record<string, any>) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const inputElement = useRef<HTMLInputElement | null>(null);

  const handleInput = function () {
    setEmail(inputElement.current?.value || '');
  };

  const handleSubmit = function () {
    login(email || undefined);
    console.log(userCredential);
    if (userCredential) {
    }
  };
  //
  return (
    <>
      <div>Sign in component</div>
      <div className='text-black'>
        <input
          className='text-black outline-transparent'
          ref={inputElement}
          onChange={handleInput}
          type='email'
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Log in</button>
      </div>
    </>
  );
}

// const connectedComponent = connect(null, mapDispatchToProps)(SignInComponent);

// export default redirectIfUserIsLoggedIn('/user-profile')(connectedComponent);
