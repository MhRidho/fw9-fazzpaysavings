import { Container, Row, Col, Form, Alert, InputGroup, Stack, Button } from 'react-bootstrap';
import WallAuth from "../../components/layout/WallAuth";
import { React, useEffect } from 'react'
import { FiMail, FiLock, FiArrowDown, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Router } from 'next/router';
import { useRouter } from 'next/router'

const Pin = () => {
  const router = useRouter();

  const toLogin = () => {
    router.push('/auth')
  };
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
                    That You Created Yourself.</h1>
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
                  <div className="d-grid gap-2 pt-5">
                    <Button onClick={toLogin} className='btn btn-lg btn-secondary btn-login' type='submit'>
                      Confirm
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

export default Pin;