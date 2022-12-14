import { Container, Row, Col, Form, Alert, InputGroup, Stack, Button } from 'react-bootstrap';
import WallAuth from "../../components/layout/WallAuth";
import { React, useState, useEffect } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from 'next/router';
import axios from '../../helper/axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { login } from '../../stores/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { register } from '../../stores/actions/auth';

const loginSchema = Yup.object().shape({
  username: Yup.string().required()
    .matches(/[A-Z]/g, 'Should username at least 1 uppercase')
    .min(4, 'Should more than 4 characters'),
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string()
    .required()
    .min(6, 'Should more than 6 characters')
    .matches(/[a-z]/g, 'Should content at least 1 lowercase')
    .matches(/[A-Z]/g, 'Should contain at least 1 uppercase')
    .matches(/[0-9]/g, 'Should contain at least 1 number')
    .matches(/^\S*$/, 'Should not contain spaces')
});

const RegisterForm = (props, errors) => {
  const router = useRouter();
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  useEffect(() => {
    if (successMsg) {
      router.push('/auth/login', { state: { successMsg } });
    }
  }, [router, successMsg]);

  return (
    <Form noValidate onSubmit={props.handleSubmit}>
      {successMsg && <Alert variant='success'>{successMsg}</Alert>}
      {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
      <InputGroup className="mb-5">
        <InputGroup.Text id="basic-addon1" className='inp-logo'><FiUser className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          type="text"
          name="username"
          value={props.values.username}
          onChange={props.handleChange}
          onBlur={props.handleChange}
          id="form"
          placeholder="Enter your username"
          isInvalid={!!props.errors.username}
        />
        <Form.Control.Feedback type='invalid'>{props.errors.username}</Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-5" controlId='formBasicEmail'>
        <InputGroup.Text id="basic-addon1" className='inp-logo'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          type="email"
          name="email"
          value={props.values.email}
          onChange={props.handleChange}
          onBlur={props.handleChange}
          id="form"
          placeholder="Enter your e-mail"
          isInvalid={!!props.errors.email}
        />
        <Form.Control.Feedback type='invalid'>{props.errors.email}</Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className='inp-logo'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
        <Form.Control
          type="password"
          name="password"
          value={props.values.password}
          onChange={props.handleChange}
          id="form"
          placeholder="Enter your password"
          isInvalid={!!props.errors.password}
        />
        <Form.Control.Feedback type='invalid'>{props.errors.password}</Form.Control.Feedback>
      </InputGroup>
      <div className="d-grid gap-2 pt-5">
        <Button className='btn btn-lg btn-secondary btn-login' type='submit'>
          Sign Up
        </Button>
      </div>

    </Form >
  );
};

const Register = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  const onRegister = (value) => {
    dispatch(register(value));
  };

  useEffect(() => {
    if (token) {
      router.push('/auth/home')
    }
  }, [router, token]);
  return (
    <>
      <Container fluid>
        <Row>
          <WallAuth />
          <Col>
            <Row className="mx-4">
              <Col md={11}>
                <div>
                  <h1 className="martop-120px fs-24px fw-700 line-height-32px color-3A3D42">Start Accessing Banking Needs<br />
                    With All Devices and All Platforms
                    With 30.000+ Users</h1>
                </div>
                <div>
                  <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                    Transfering money is eassier than ever, you can access<br />
                    Zwallet wherever you are. Desktop,
                    laptop, mobile phone?
                    we cover all of that for you!
                  </p>
                </div>

                <div className="mt-5">

                  <Formik validationSchema={loginSchema} onSubmit={onRegister} initialValues={{ email: '', password: '' }}>
                    {(props) => <RegisterForm {...props} />}
                  </Formik>

                  <div className="form-check form-check-reverse position-relative text-center my-5">
                    <label className="form-check-label">
                      Already have an account? Let`s <Link href={'/auth'} className='have-signup'><a>Login</a></Link>
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register;