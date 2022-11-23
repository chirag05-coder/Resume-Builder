import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, message, Spin } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../resources/authentication.css'

function Register() {
     const [loading, setLoading]=useState(false);
     const navigate= useNavigate();
     const onFinish=async(values)=>{
          setLoading(true);
          try {
              await axios.post('/api/user/register', values)
              setLoading(false);
              message.success('Registration successful')
            
          } catch (error) {
               setLoading(false);
               message.error('Registration failed')
          }
         
     }

     useEffect(()=>{
          if(localStorage.getItem('resume1-user'))
            {
                navigate('/home')
            }
         })
      

  return (
    <div className="auth-parent">
        {loading && (<Spin size="large"/>)}
        <h1 className='brand'>Resume Builder</h1>
        <Form layout='vertical' onFinish={onFinish}>
             <h1>
              Register
             </h1>
             <hr/>
             <Form.Item name='username' label='Username'>
                     <Input />
               
             </Form.Item>
              
             <Form.Item name='password' label='Password'>
                     <Input type='password'/>
               
             </Form.Item>

             <Form.Item name='cpassword' label='Confirm Password'>
                     <Input type='password'/>
               
             </Form.Item>

             <div className="d-flex align-items-center justify-content-between">
          <Link to='/login'>Click Here to Login</Link>
          <Button type='primary' htmlType='submit'>REGISTER</Button>
          </div>
        </Form>
    </div>
  )
}

export default Register