import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register =()=>
{
    return(
        <>
        <div className="resgister-page ">
        <Form layout="vertical" >
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register ? Cleck Here to login</Link>
            <button className="btn btn-primary">Resgiter</button>
          </div>
        </Form>
      </div>
        </>
    )
}

export default Register;