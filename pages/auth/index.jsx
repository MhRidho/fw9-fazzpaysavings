import { Container, Row, Col, Form, Alert, InputGroup, Stack, Button } from 'react-bootstrap';
import WallAuth from "../../components/layout/WallAuth";
import { React, useState } from 'react'
import { FiMail, FiLock, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from 'next/router';
import axios from '../../helper/axios';
import Cookies from 'js-cookie';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post('auth/login', form);
      Cookies.set('token', result.data.data.token);
    } catch (error) {
      console.log(error.response);
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

                  <Formik>
                    <Form>
                      <InputGroup className="mb-5" controlId='formBasicEmail'>
                        <InputGroup.Text id="basic-addon1" className='inp-logo'><FiMail className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                        <Form.Control
                          type="email"
                          name="email"
                          id="form"
                          placeholder="Enter your e-mail"
                          onChange={handleChangeText}
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
                          onChange={handleChangeText}
                        />
                        <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
                      </InputGroup>
                      <Stack direction="horizontal" gap={3}>
                        <div className="ms-auto mt-3 pb-5"><a className="a-menu fs-14px fw-600" to={'/reset-password'}>Forgot password?</a></div>
                      </Stack>
                      <div className="d-grid gap-2 pt-5">
                        <Button className='btn btn-secondary btn-lg ent-email' onClick={handleSubmit} >
                          Login
                        </Button>
                      </div>
                    </Form>
                  </Formik>

                  <div className="form-check form-check-reverse position-relative text-center my-5">
                    <label className="form-check-label">
                      Dont have an account? lets <a className='have-signup'>Sign Up</a>
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

export default Login;