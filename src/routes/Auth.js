import React, { useState } from 'react';
import firebaseAuth from '../utils/firebase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewMember, setIsNewMember] = useState(false);

  const auth = firebaseAuth.auth();

  const onChange = (e) => {
    console.log(e.target.name);
    const eventName = e.target.name;

    if (eventName === "email") {
      setEmail(e.target.value);
    }

    if (eventName === "password") {
      setPassword(e.target.value);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isNewMember) {
        const newMemberInfo = await auth.createUserWithEmailAndPassword(email, password);
        setIsNewMember(true);
        console.log(newMemberInfo);
      } else {
        const existingMemberInfo = await auth.signInWithEmailAndPassword(email, password);
        console.log(existingMemberInfo);
      }
    } catch (error) {
      console.warn(error);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value={isNewMember ? "create" : "log in"}
        />
      </form>
      <div>
        <button>Google Login</button>
        <button>GitHub Login</button>
      </div>

    </div>
  );


}

export default Auth;
