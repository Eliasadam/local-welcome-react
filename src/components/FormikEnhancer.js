import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import users from '../data/login.json';
import '../App.css';
const LoginForm = props => (
  <div className="formWrapper">
    <Form>
      <div>
        {(props.touched.userName &&
          props.errors.userName && (
            <div className="input-feedback">{props.errors.userName}</div>
          )) ||
          (props.errors.errorMessage && (
            <div className="input-feedback">{props.errors.errorMessage}</div>
          ))}
        <Field
          type="text"
          name="userName"
          placeholder="User Name"
          onBlur={props.handleBlur}
          className={
            props.errors.userName && props.touched.userName
              ? 'text-input error'
              : 'text-input'
          }
        />
      </div>
      <div>
        {props.touched.password &&
          props.errors.password && (
            <div className="input-feedback">{props.errors.password}</div>
          )}
        <Field
          type="password"
          name="password"
          placeholder="password"
          onBlur={props.handleBlur}
          className={
            props.errors.password && props.touched.password
              ? 'text-input error'
              : 'text-input'
          }
        />
      </div>
      <button
        type="button"
        className="outline"
        onClick={props.handleReset}
        disabled={!props.dirty}
      >
        Reset
      </button>
      <button type="submit" disabled={props.isSubmitting}>
        submit
      </button>
    </Form>
  </div>
);

const FormikEnhancer = withFormik({
  mapPropsToValues: props => {
    return {
      userName: props.userName || '',
      password: props.password || '',
      handleLogin: props.handleLogin,
    };
  },
  validationSchema: Yup.object().shape({
    userName: Yup.string()
      .min(2, 'your user name should be longer')
      .required('required.'),
    password: Yup.string()
      .min(3, 'your password should be longer')
      .required('required.'),
  }),
  handleSubmit(
    { handleLogin, userName, password: pw },
    { setSubmitting, resetForm, setErrors }
  ) {
    setTimeout(() => {
      if (
        users.some(({ user, password }) => user === userName && password === pw)
      ) {
        handleLogin();
        resetForm();
      } else {
        setErrors({
          errorMessage: 'please enter a valid user name or password!',
        });
      }
      setSubmitting(false);
    }, 1000);
  },
})(LoginForm);

export default FormikEnhancer;
