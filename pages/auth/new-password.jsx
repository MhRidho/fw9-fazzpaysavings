import { Container, Row, Col, Form, Alert, InputGroup, Button } from 'react-bootstrap';
import WallAuth from "../../components/layout/WallAuth";
import { React, useState, useEffect } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from 'next/router';
import axios from '../../helper/axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { login } from '../../stores/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string()
    .required()
    .min(6, 'Should more than 6 characters')
    .matches(/[a-z]/g, 'Should content at least 1 lowercase')
    .matches(/[A-Z]/g, 'Should contain at least 1 uppercase')
    .matches(/[0-9]/g, 'Should contain at least 1 number')
    .matches(/^\S*$/, 'Should not contain spaces')
});

const EmailForm = (props, errors) => {
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);
  return (
    <Form noValidate onSubmit={props.handleSubmit}>
      {successMsg && <Alert variant='success'>{successMsg}</Alert>}
      {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
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
          Reset Password
        </Button>
      </div>

    </Form >
  );
};

const NewPassword = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '' });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onNewPassword = async () => {
    try {
      router.push('/auth/pin');
    } catch (error) {
      router.push('/auth');
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <WallAuth />
          <Col>
            <Row className="mx-4">
              <Col md={11}>
                <div>
                  <h1 className="martop-120px fs-24px fw-700 line-height-32px color-3A3D42">Did You Forgot Your Password?
                    Don`t Worry, You Can Reset Your
                    Password In a Minutes.</h1>
                </div>
                <div>
                  <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                    Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.
                  </p>
                </div>

                <div className="mt-5">

                  <Formik validationSchema={loginSchema} onSubmit={onNewPassword} initialValues={{ email: '', password: '' }}>
                    {(props) => <EmailForm {...props} />}
                  </Formik>

                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NewPassword;