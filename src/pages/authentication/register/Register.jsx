import React from 'react'
import './Register.css'
import { useForm } from 'react-hook-form'

function Register() {

  const {handleSubmit } = useForm();
  

  return (
    <form onSubmit={handleSubmit}>
    <div className='column1'>
      <div className='heading'>
      <svg className='king' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 6.417c0-1.013.822-1.833 1.834-1.833 1.215 0 2.104 1.167 1.763 2.329-.559 1.915 5.827 3.731 6.771-1.471.239-1.323-.021-1.67-.668-2.321-.329-.329-.534-.783-.534-1.287 0-1.013.822-1.834 1.834-1.834 1.014 0 1.833.821 1.833 1.833 0 .504-.204.958-.533 1.287-.646.65-.905.998-.666 2.321.941 5.2 7.33 3.387 6.77 1.471-.339-1.162.548-2.329 1.764-2.329 1.012 0 1.832.821 1.832 1.834 0 1.118-.992 1.97-2.084 1.816-1.32-.187-3.03 4.554-3.417 6.716-1.765-.615-3.618-.942-5.493-.949-1.875.006-3.74.334-5.504.949-.388-2.162-2.098-6.903-3.418-6.717-1.092.155-2.084-.697-2.084-1.815zm-1 14.583h2.359l.566 3c.613-1.012 1.388-1.912 2.277-2.68l-2.342-3.335c-1.089.879-2.053 1.848-2.86 3.015zm24 0h-2.359l-.566 3c-.613-1.012-1.388-1.912-2.277-2.68l2.343-3.335c1.088.879 2.052 1.848 2.859 3.015zm-12-4.998c-2.845.009-5.491.825-7.757 2.211l2.334 3.322c1.603-.924 3.448-1.464 5.423-1.473 1.975.009 3.82.549 5.423 1.473l2.334-3.322c-2.266-1.386-4.912-2.202-7.757-2.211zm-3.022 3.498l-.65-.348-.651.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.13.725zm3.672-.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.321-.662.322.663.729.101-.53.511.129.725zm3.718.5l-.65-.348-.65.348.131-.726-.531-.511.729-.101.322-.663.322.663.729.101-.53.511.128.726z"/></svg>
        <h1 className='head'>PeerLink</h1>
      </div>

      <div className='inputForm'>
        <h3>First Name</h3>
        <input className='field' type='text' placeholder='Enter First Name Here' />
      </div>

      <div className='inputForm'>
        <h3>Last Name</h3>
        <input className='field' type='text' placeholder='Enter Last Name Here' />
      </div>      

      <div className='inputForm'>
        <h3>Email</h3>
        <input className='field' type='text' placeholder='Enter Email Here' />
      </div>
      
      <div className='inputForm'>
        <h3>Password</h3>
        <div className='pass'>
        <input className='field' type='text' placeholder='Enter Password Here' />
        <svg className='eye' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
        </div>
       
      </div>
      <div className='gender'>
        <input className='m' type='radio' value="M" checked /><label>Male</label>
        <input className='f' type='radio' value="F"/><label>Female</label>
      </div>

      <button className='button'>Register</button>

      <div className='accountText'>
        <p>Do you already have account?</p><button className='b1'>Login</button>
      </div>
      
      <button className='forget'>Forgot Password?</button>
      </div>
      </form>
  )
}

export default Register