import { Container, Row, Col, Form, Alert, InputGroup, Button } from 'react-bootstrap';
import WallAuth from "../../components/layout/WallAuth";
import { React, useState, useEffect } from 'react';
import { FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from 'next/router';
import axios from '../../helper/axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { login } from '../../stores/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required()
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
      <div className="d-grid gap-2 pt-5">
        <Button className='btn btn-lg btn-secondary btn-login' type='submit'>
          Confirm
        </Button>
      </div>

    </Form >
  );
};

const ResetPassword = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '' });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const newPassword = () => {
    router.push('/auth/new-password')
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
                    To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                  </p>
                </div>

                <div className="mt-5">

                  <Formik validationSchema={emailSchema} onSubmit={newPassword} initialValues={{ email: '' }}>
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

export default ResetPassword;