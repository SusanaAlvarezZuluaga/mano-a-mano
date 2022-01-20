import React, { useContext } from 'react';
import { FaCcPaypal } from 'react-icons/fa';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import UserInfoContext from '../../contexts';
import TextField from '../TextField';

import './styles.css';
import { useNavigate } from 'react-router-dom';
function PaymentForm() {
  const context = useContext(UserInfoContext);
  const navigate = useNavigate();

  const initialValues = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  };

  const initialSchema = Yup.object().shape({
    cardNumber: Yup.string().required('Required'),
    expirationDate: Yup.string().required('Required'),
    cvv: Yup.string().required('Required'),
  });

  const onSubmit = (data, { resetForm }) => {
    navigate('/finalized-purchase');
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={initialSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-row">
            <TextField
              name="cardNumber"
              type="cardNumber"
              placeholder="Card Number"
            />
          </div>

          <div className="form-row">
            <TextField
              name="expirationDate"
              type="expirationDate"
              placeholder="Expiration Date"
            />
            <TextField name="cvv" type="cvv" placeholder="cvv" />
          </div>

          <div className="btn-con">
            <button className="form-btn smaller-btn" type="submit">
              Pay
            </button>
            <p className="or">or</p>
            <button className="form-btn smaller-btn paypal-btn" type="button">
              <FaCcPaypal className="paypal-icon" />
              <div> Pay With Paypal</div>
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default PaymentForm;
