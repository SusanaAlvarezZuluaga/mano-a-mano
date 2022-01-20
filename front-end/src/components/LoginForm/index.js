import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FcGoogle } from 'react-icons/fc';

import UserInfoContext from '../../contexts';
import TextField from '../TextField';

import './style.css';

function InputForm() {
  const [showPass, setShowPass] = useState(false);
  let navigate = useNavigate();
  const context = useContext(UserInfoContext);

  const initialValues = {
    email: '',
    password: '',
  };

  const initialSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email').required(),
    password: Yup.string()
      .min(8, 'Must be between 8 and 20 characters long')
      .max(20, 'Must be between 8 and 20 characters long')
      .matches(
        RegExp(/^[A-Za-z0-9.#&!-$%@]*$/),
        'Only letters, numbers and special characters @, &, !, ., -, *, #, $, %,  allowed'
      )
      .required('Required'),
  });
  const onSubmit = async (data, { resetForm }) => {
    context.setEmail(data.email);
    context.setPassword(data.password);
    navigate('/checkout-address');
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={initialSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <TextField name="email" type="email" placeholder="Email" />
          <TextField
            placeholder="Password"
            name="password"
            type={showPass ? 'text' : 'password'}
            showPass={showPass}
            setShowPass={setShowPass}
            eye={true}
          />

          <div className="btn-con">
            <button className="form-btn" type="submit">
              Login
            </button>
          </div>
          <div className="btn-con">
            <button className="form-btn google-login-btn">
              <span>
                <FcGoogle />
              </span>
              Login With Google
            </button>
          </div>
          <div className="btn-con">
            <button
              className="form-btn google-login-btn"
              onClick={() => navigate('/register')}
            >
              Create an account
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default InputForm;
