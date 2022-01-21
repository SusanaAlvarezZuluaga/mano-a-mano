import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FcGoogle } from 'react-icons/fc';

import UserInfoContext from '../../contexts';
import TextField from '../TextField';

function DeliveryForm(setShowPaymentSection) {
  let navigate = useNavigate();
  const context = useContext(UserInfoContext);

  const initialValues = {
    postalCode: context.postalCode,
    address: context.address,
    country: context.country,
    city: context.city,
    firstName: context.firstName,
    lastName: context.lastName,
    mobileNumber: context.mobileNumber,
  };

  const initialSchema = Yup.object().shape({
    postalCode: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    mobileNumber: Yup.string().required('Required'),
  });

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={initialSchema}>
        <Form>
          <TextField name="country" type="country" placeholder="Country" />
          <TextField name="city" type="city" placeholder="City" />
          <TextField name="address" type="address" placeholder="Address" />
          <TextField
            name="postalCode"
            type="postalCode"
            placeholder="Postal Code"
          />

          <div className="btn-con">
            <button
              className="form-btn"
              onClick={() => setShowPaymentSection(true)}
            >
              continue
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default DeliveryForm;
