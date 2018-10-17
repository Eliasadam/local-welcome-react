import React from 'react';
import { withFormik,Form,Field } from 'formik';
import * as Yup from 'yup';
//import DashboardPage from './components/pages/DashboardPage';
//import users from './data/login.json';
//import 'App.css';

const loginForm = ({
  values,
  errors,
  touched,
  dirty,
  isSubmitting,
  handleBlur,
  handleReset,
  loginMe
})=>(
  <Form>
    <div>
      {touched.userName && errors.userName &&<p>{errors.userName}</p>}
      <Field type ='text' name='userName' placeholder="User Name" onBlur={handleBlur} onChange= {values.handleUserChange} className={
                      errors.userName && touched.userName ? 'text-input error' : 'text-input'
                    }/>
    </div>
    <div>
      {touched.password && errors.password &&<p>{errors.password}</p>}
      <Field type ='password' name='password' placeholder="password" onBlur={handleBlur} onChange={values.handlePasswordChange} className={
                      errors.userName && touched.userName ? 'text-input error' : 'text-input'
                    }/>
    </div>
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}>
        Reset
      </button>
      <button disabled={isSubmitting}>submit</button>
    </Form>
)

const FormikEnhancer = withFormik({
  mapPropsToValues({userName,password}){
    return{
      userName:userName || '',
      password:password || ''
    }
  },
  validationSchema: Yup.object().shape({
    userName: Yup.string()
      .min(2, "your user name should be longer")
      .required('required.'),
    password: Yup.string()
      .min(3, "your password should be longer")
      .required('required.'),
  }),
  handleSubmit(values,{setErrors, setSubmitting,resetForm}){
     setTimeout(()=>{
      loginMe
     },2000)
  }
})(loginForm)

  
  

//   <div>
//     <h2>Welcome to Login page!</h2>
//     <button type="submit">Log in</button>
//   </div>
// );
export default FormikEnhancer;


  