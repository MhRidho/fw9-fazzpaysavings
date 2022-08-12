import { Container, Row, Col, Form, Alert, InputGroup, Stack, Button } from 'react-bootstrap';
import WallAuth from "../../components/layout/WallAuth";
import { React, useEffect } from 'react'
import { FiMail, FiLock, FiArrowDown, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from 'next/router';
import Image from 'next/image';
import Success from '../../assets/img/success.png';

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
                  <h1 className="martop-120px fs-24px fw-700 line-height-32px color-3A3D42">Did You Forgot Your Password?
                    Dont Worry, You Can Reset Your
                    Password In a Minutes.</h1>
                </div>
                <div>
                  <p className="martop-30px fs-16px color-3A3D4299 line-height-30px">
                    To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                  </p>
                </div>

                <div className="mt-5">
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
                  <div className="d-grid gap-2 py-5">
                    <a className='btn btn-secondary btn-lg color-88888F ent-email' to={"/new-password"}>
                      Confirm
                    </a>
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