import React from 'react';
import { withFormik,Form,Field } from 'formik';
import * as Yup from 'yup';
import DashboardPage from './pages/DashboardPage';
import users from '../data/login.json';
import '../App.css';
class LoginForm extends React.Component{
    state = {
        isLoggedIn: false,
        userValue: '',
        passwordValue: '',
        errorMessage: ''
      };
      handleUserChange = e => {
        this.setState({
          userValue: e.target.value,
        });
      };
      handlePasswordChange = e => {
        this.setState({
          passwordValue: e.target.value,
        });
      };
      loginMe = e => {
        e.preventDefault();
    
        const authorised = users.some(
          ({ user, password }) =>
            user === this.state.userValue && password === this.state.passwordValue
        );
    
        this.setState({
          isLoggedIn: authorised,
          errorMessage: authorised ? null : 'Invalid username or password',
        });
        console.log(authorised)
      };
    
//
//   values,
//   errors,
//   touched,
//   dirty,
//   isSubmitting,
//   handleBlur,
//   handleReset,
//   handleUserChange,
//   handlePasswordChange,
//   loginMe

render(){
  
    
    return(

   
     this.state.isLoggedIn ? ( 
     <DashboardPage />
     ) : (
         
    <div className="formWrapper">     
    <p>{this.state.errorMessage}</p>
  <Form>
    <div>
      {this.props.touched.userName && this.props.errors.userName &&  <div className="input-feedback">{this.props.errors.userName}</div>}
      <Field type ='text' name='userName' placeholder="User Name" value={this.props.values.userName} onBlur={this.props.handleBlur} onChange={(e)=>{this.props.handleChange(e); this.handleUserChange(e)}}
      className={this.props.errors.userName && this.props.touched.userName ? 'text-input error' : 'text-input'
                    }/>
    </div>
    <div>
      {this.props.touched.password && this.props.errors.password &&  <div className="input-feedback">{this.props.errors.password}</div>}
      <Field type ='password' name='password' placeholder="password" onBlur={this.props.handleBlur} onChange={(e)=>{this.props.handleChange(e); this.handlePasswordChange(e)}}
      className={this.props.errors.password && this.props.touched.password ? 'text-input error' : 'text-input'
                    }/>
    </div>
      <button
        type="button"
        className="outline"
        onClick={this.props.handleReset}
        disabled={!this.props.dirty || this.props.isSubmitting}>
        Reset
      </button>
      <button type='submit' disabled={this.props.isSubmitting}>submit</button>
    </Form>
    </div>
  )
 
  )

  }
 
}            
const FormikEnhancer = withFormik({
  mapPropsToValues:(props)=>{

    return{
      userName:props.userName || '',
      password:props.password || '',
      loginMe:props.loginMe
    
   
      
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
  handleSubmit(values,{setSubmitting, resetForm}){
     setTimeout(()=>{
  values.loginMe()
        resetForm()
        setSubmitting(false);
     },2000)
 }
})(LoginForm)

  
  



export default FormikEnhancer;


  