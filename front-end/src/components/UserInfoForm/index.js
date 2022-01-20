import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import UserInfoContext from '../../contexts';
import TextField from '../TextField';

import './styles.css';
function UserInfoForm() {
  const context = useContext(UserInfoContext);
  let navigate = useNavigate();
  const initialValues = {
    postalCode: '',
    address: '',
    country: '',
    city: '',
    name: '',
    mobileNumber: '',
  };
  const initialSchema = Yup.object().shape({
    postalCode: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    mobileNumber: Yup.string().required('Required'),
  });

  const onSubmit = (data) => {
    context.setPostalCode(data.postalCode);
    context.setAddress(data.address);
    context.setCountry(data.country);
    context.setCity(data.city);
    context.setName(data.name);
    context.setMobileNumber(data.mobileNumber);
    navigate('/checkout');
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
            <TextField name="name" type="name" placeholder="Name" />
            <TextField
              name="mobileNumber"
              type="mobileNumber"
              placeholder="Mobile Number"
            />
          </div>
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

export default UserInfoForm;
