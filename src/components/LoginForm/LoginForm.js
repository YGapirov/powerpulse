import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Form, Input, Button } from './LoginForm.styled';
import { useState } from 'react';

import {
  SignInText,
  SignInLink,
} from '../../components/RegisterForm/RegisterForm.styled';

import sprite from '../../images/sprite.svg';
import {
  ButtonIcon,
  Svg,
} from '../../components/RegisterForm/RegisterForm.styled';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input type="email" name="email" placeholder="Email" />

      <Input
        type={passwordVisible ? 'text' : 'password'}
        name="password"
        placeholder="Password"
      />

      {passwordVisible ? (
        <ButtonIcon type="button" onClick={handleTogglePasswordVisibility}>
          <Svg>
            <use href={`${sprite}#icon-eye`} />
          </Svg>
        </ButtonIcon>
      ) : (
        <ButtonIcon type="button" onClick={handleTogglePasswordVisibility}>
          <Svg>
            <use href={`${sprite}#icon-eye-off`} />
          </Svg>
        </ButtonIcon>
      )}

      <Button type="submit">Sign In</Button>
      <SignInText>
        Don’t have an account?
        <SignInLink to="/signup"> Sign Up</SignInLink>
      </SignInText>
    </Form>
  );
};
