
import { Form,Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
//const {TextArea}=Input
function PersonalInfo() {
  return (
    <div>
         <div className='row'>
               <div className='col-md-4'>
               <Form.Item name="firstName" label='FirstName' rules={[{required:true}]}>
                <Input />

               </Form.Item>

               </div>

               <div className='col-md-4'>
               <Form.Item name="lastName" label='Last Name' rules={[{required:true}]}>
                <Input />

               </Form.Item>

               </div>

               <div className='col-md-4'>
               <Form.Item name="email" label='Email' rules={[{required:true}]}>
                <Input />

               </Form.Item>

               </div>
               <div className='col-md-4'>
               <Form.Item name="mobileNumber" label='Mobile Number' rules={[{required:true}]}>
                <Input />

               </Form.Item>

               </div>

               <div className='col-md-4'>
               <Form.Item name="linkedin" label='Linkedin URL' rules={[{required:true}]}>
                <Input />

               </Form.Item>

               </div>

               <div className='col-md-12'>
               <Form.Item name="objective" label='Objective' rules={[{required:true}]}>
                <TextArea />

               </Form.Item>

               </div>
               <div className='col-md-12'>
               <Form.Item name="address" label='Address' rules={[{required:true}]}>
                <TextArea />

               </Form.Item>

               </div>

         </div>
    </div>
  )
}

export default PersonalInfo
