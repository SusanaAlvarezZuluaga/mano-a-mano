import React from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { ErrorMessage, useField } from 'formik';
import './style.css';

function TextField({ label, showPass, setShowPass, eye, formik, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="input-label-con">
      <div className="input-eye-con">
        <input
          className={`form-input ${meta.touched && meta.error && 'is-invalid'}`}
          {...field}
          {...props}
        />

        {eye && (
          <div className="eye-icon" onClick={() => setShowPass(!showPass)}>
            {showPass ? <BsEyeSlashFill /> : <BsEyeFill />}
          </div>
        )}
      </div>

      <ErrorMessage className="input-err" name={field.name} component="div" />
    </div>
  );
}

export default TextField;
