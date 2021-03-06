import React, { useContext } from 'react';

import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';

import UserInfoContext from '../../contexts';
import TextField from '../TextField';

import './styles.css';
function DeliveryForm({ setDeliverySectionFilled }) {
  const context = useContext(UserInfoContext);
  const initialValues = {
    postalCode: context.postalCode,
    address: context.address,
    country: context.country,
    city: context.city,
    name: context.name,
    mobileNumber: context.mobileNumber,
  };
  const initialSchema = Yup.object().shape({
    postalCode: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    mobileNumber: Yup.string().required('Required'),
  });

  const onSubmit = () => {
    setDeliverySectionFilled(true);
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
            <TextField name="country" type="country" placeholder="Country" />
            <TextField name="city" type="city" placeholder="City" />
          </div>

          <div className="form-row">
            <TextField
              name="postalCode"
              type="postalCode"
              placeholder="Postal Code"
            />
            <TextField name="address" type="address" placeholder="Address" />
          </div>

          <div className="form-row">
            <TextField name="name" type="name" placeholder="Name" />
            <TextField
              name="mobileNumber"
              type="mobileNumber"
              placeholder="Mobile Number"
            />
          </div>

          <div className="btn-con">
            <button className="form-btn smaller-btn" type="submit">
              continue
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default DeliveryForm;
