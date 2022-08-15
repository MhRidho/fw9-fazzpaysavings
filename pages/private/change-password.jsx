import { React } from 'react'
import { Container, Row, Col, Button, InputGroup, Form } from 'react-bootstrap';
import Link from 'next/link';
import { FiLogOut, FiEdit2, FiArrowRight, FiLock } from 'react-icons/fi';
import Main from '../../components/layout/PrivateMain'
import Image from 'next/image';
import Mic80 from '../../assets/img/mic80.png';
import { useRouter } from 'next/router';

const PersonalInfo = () => {
  const router = useRouter();
  const changePassword = () => {
    router.push('/private/home');
  }
  return (
    <>
      <Main title='Change Password'>
        <Container className='shadow rounded-4'>
          <Row>
            <Col className="ms-md-3">
              <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-115px">
                <Col className="pb-2 f-color-g">
                  <div className="d-flex justify-content-between mb-2">
                    <h1 className="fs-18px fw-bold">Change Password</h1>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between my-4">
                      <span>You must enter your current password and then<br /> type your new password
                        twice.</span>
                    </div>
                    <Col md={7} className='m-auto mt-5'>
                      <Form>
                        <InputGroup className="mb-5" controlId='formBasicEmail'>
                          <InputGroup.Text id="basic-addon1" className='inp-logo'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                          <Form.Control
                            type="email"
                            name="email"
                            id="form"
                            placeholder="Current password"
                          />
                        </InputGroup>
                      </Form>
                    </Col>
                    <Col md={7} className='m-auto'>
                      <Form>
                        <InputGroup className="mb-5" controlId='formBasicEmail'>
                          <InputGroup.Text id="basic-addon1" className='inp-logo'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                          <Form.Control
                            type="email"
                            name="email"
                            id="form"
                            placeholder="New password"
                          />
                        </InputGroup>
                      </Form>
                    </Col>
                    <Col md={7} className='m-auto'>
                      <Form>
                        <InputGroup className="mb-5" controlId='formBasicEmail'>
                          <InputGroup.Text id="basic-addon1" className='inp-logo'><FiLock className='color-A9A9A999 fs-22px' /></InputGroup.Text>
                          <Form.Control
                            type="email"
                            name="email"
                            id="form"
                            placeholder="Repeat new password"
                          />
                        </InputGroup>
                      </Form>
                    </Col>
                    <Col md={7} className="m-auto">
                      <div className="d-grid gap-2">
                        <Button onClick={changePassword}
                          className="btn btn-lg mt-3 fw-bold bg-web">Change
                          Password</Button>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}

export default PersonalInfo;