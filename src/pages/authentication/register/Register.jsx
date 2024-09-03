import React, { useState } from 'react'
import CssRegister from './Register.module.css'
import { useForm } from 'react-hook-form'
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../../redux/auth/auth.action';
import { LOGIN_REQUEST } from '../../../redux/auth/auth.actionType';

const schema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().required().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email is not valid"),
  password: string().required().min(6),
  ConfirmPassword: string().oneOf([ref("password")], "Password must match"),
  gender:string().required("Select any one gender")
})

function Register() {

  const dispatch = useDispatch();

  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isVisibleCPass, setIsVisibleCPass] = useState(false);

  const { error } = useSelector((state) => state.auth);

  const { handleSubmit, register ,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  });

  // console.log(errors)
  const formSubmit =(data) =>{
  
    console.log(data)
    dispatch(registerUserAction(data,nav))
  
 
  }
  const nav = useNavigate();
  return (
   
    <form className={CssRegister.form} onSubmit={handleSubmit(formSubmit)}>
    <div className={CssRegister.column1}>
      <div className={CssRegister.heading}>
      <svg className={CssRegister.king} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 6.417c0-1.013.822-1.833 1.834-1.833 1.215 0 2.104 1.167 1.763 2.329-.559 1.915 5.827 3.731 6.771-1.471.239-1.323-.021-1.67-.668-2.321-.329-.329-.534-.783-.534-1.287 0-1.013.822-1.834 1.834-1.834 1.014 0 1.833.821 1.833 1.833 0 .504-.204.958-.533 1.287-.646.65-.905.998-.666 2.321.941 5.2 7.33 3.387 6.77 1.471-.339-1.162.548-2.329 1.764-2.329 1.012 0 1.832.821 1.832 1.834 0 1.118-.992 1.97-2.084 1.816-1.32-.187-3.03 4.554-3.417 6.716-1.765-.615-3.618-.942-5.493-.949-1.875.006-3.74.334-5.504.949-.388-2.162-2.098-6.903-3.418-6.717-1.092.155-2.084-.697-2.084-1.815zm-1 14.583h2.359l.566 3c.613-1.012 1.388-1.912 2.277-2.68l-2.342-3.335c-1.089.879-2.053 1.848-2.86 3.015zm24 0h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-12-4.998c-2.845.009-5.491.825-7.757 2.211l2.334 3.322c1.603-.924 3.448-1.464 5.423-1.473 1.975.009 3.82.549 5.423 1.473l2.334-3.322c-2.266-1.386-4.912-2.202-7.757-2.211zm-3.022 3.498l-.65-.348-.651.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.13.725zm3.672-.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.129.725zm3.718.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.322-.663.322.663.729.101-.53.511.128.726z"/></svg>
        <h1 className={CssRegister.head}>PeerLink</h1>
      </div>

      <div className={CssRegister.inputForm}>
        <h3>First Name</h3>
          <input className={CssRegister.field} type='text' placeholder='Enter First Name Here'{...register("firstName")} />
          
        </div>
        
        <span className={CssRegister.error }>{errors.firstName?.message}</span>
        
      <div className={CssRegister.inputForm}>
        <h3 >Last Name</h3>
        <input className={CssRegister.field} type='text' placeholder='Enter Last Name Here' {...register("lastName")} />
      </div>      

        <span className={CssRegister.error }>{errors.lastName?.message}</span>
        
      <div className={CssRegister.inputForm}>
        <h3>Email</h3>
        <input className={CssRegister.field} type='text' placeholder='Enter Email Here' {...register("email")}/>
      </div>
        <span className={CssRegister.error}>{errors.email?.message}</span>
        
      <div className={CssRegister.inputForm}>
        <h3>Password</h3>
        <div className={CssRegister.pass}>
            <input className={CssRegister.field} type={isVisiblePass?'text':'password'}  placeholder='Enter Password Here' {...register("password")}/>
            <svg onClick={() => setIsVisiblePass(!isVisiblePass)} className={CssRegister.eye} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">{isVisiblePass ?<path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
              :  <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />}
            </svg>
        </div>
       
        </div>
        <span className={CssRegister.error}>{errors.password?.message}</span>
        
        <div className={CssRegister.inputForm}>
        <h3>Confirm Password</h3>
        <div className={CssRegister.pass}>
        <input className={CssRegister.field} type={isVisibleCPass?'text':'password'} placeholder='Confirm Password Here' {...register("ConfirmPassword")}/>
        <svg onClick={() => setIsVisibleCPass(!isVisibleCPass)} className={CssRegister.eye} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">{isVisibleCPass ?<path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z" />
              :  <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />}
            </svg>
        </div>
        
        </div>
        <span className={CssRegister.error}>{errors.ConfirmPassword?.message}</span>
      <div className={CssRegister.gender}>
          <input className={CssRegister.m} type='radio' value="M" {...register("gender")} /><label style={{marginLeft:"5px"}}>Male</label>
        <input className={CssRegister.f} type='radio' value="F" {...register("gender")}/><label style={{marginLeft:"5px"}}>Female</label>
      </div>
      <span className={CssRegister.error}>{errors.gender?.message}</span>
      <button className={CssRegister.button} type='submit'>Register</button>
      <span className={CssRegister.error}>{error===null?"":error.response.data.message}</span>
      <div className={CssRegister.accountText}>
          <p>Do you already have account?</p><button onClick={() => { nav('/login'); dispatch({type:LOGIN_REQUEST})}} className={CssRegister.b1} type='button'>Login</button>
      </div>
      
      <button className={CssRegister.forget} type='button'>Forgot Password?</button>
      </div>
      </form>
  )
}

export default Register