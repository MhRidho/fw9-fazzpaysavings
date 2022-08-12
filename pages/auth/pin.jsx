import { Container, Row, Col, Form, Alert, InputGroup, Stack, Button } from 'react-bootstrap';
import WallAuth from "../../components/layout/WallAuth";
import { React, useEffect } from 'react'
import { FiMail, FiLock, FiArrowDown, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from 'next/router';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required(),
  password: Yup.string()
    .required()
    .min(6, 'Should more than 6 characters')
    .matches(/[a-z]/g, 'Should content at least 1 lowercase')
    .matches(/[A-Z]/g, 'Should contain at least 1 uppercase')
    .matches(/[0-9]/g, 'Should contain at least 1 number')
    .matches(/^\S*$/, 'Should not contain spaces')
})

const LoginForm = () => {
  return (
    <>
      <Form>
        <InputGroup className="mb-5" controlId='formBasicEmail'>
          <InputGroup.Text id="basic-addon1" className='inp-logo'><FiUser className='color-A9A9A999 fs-22px' /></InputGroup.Text>
          <Form.Control
            type="text"
            name="username"
            id="form"
            placeholder="Enter your username"
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </InputGroup>
        <InputGroup className="mb-5" controlId='formBasicEmail'>
          <InputGroup.Text id="basic-addon1" className='inp-logo'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            id="form"
            placeholder="Enter your e-mail"
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" className='inp-logo'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
          <Form.Control
            type="password"
            name="password"
            id="form"
            placeholder="Enter your password"
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </InputGroup>
        <div className="d-grid gap-2 pt-5 mt-5">
          <Button className='btn btn-secondary btn-lg ent-email' type='submit'>
            Sign Up
          </Button>
        </div>
      </Form>
    </>
  );

};

const login = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <WallAuth />
          <Col md={5} >
            <Row className="mx-4">
              <Col md={10}>
                <div>
                  <h1 className="martop-120px fs-24px fw-700 line-height-32px color-3A3D42">Secure Your Account, Your Wallet,
                    and Your Data With 6 Digits PIN
                    That<br /> You Created Yourself.</h1>
                </div>
                <div>
                  <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                    Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and dont tell anyone about your Zwallet account password and the PIN.
                  </p>
                </div>

                <div className="mt-5">
                  <InputGroup className="mb-5 d-flex gap-3">
                    <Form.Control aria-label="First name" className='form-pin' />
                    <Form.Control aria-label="Last name" className='form-pin' />
                    <Form.Control aria-label="First name" className='form-pin' />
                    <Form.Control aria-label="Last name" className='form-pin' />
                    <Form.Control aria-label="First name" className='form-pin' />
                    <Form.Control aria-label="Last name" className='form-pin' />
                  </InputGroup>
                  <div className="d-grid gap-2 py-5">
                    <Button className='d-grid' variant="secondary" size="lg">
                      <a className='btn btn-secondary btn-lg sign-hover' to={"/LoginFilled"}>
                        Confirm
                      </a>
                    </Button>
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

export default login;