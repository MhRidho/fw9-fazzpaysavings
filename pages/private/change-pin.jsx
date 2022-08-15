import { React } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { FiLogOut, FiEdit2, FiArrowRight, FiLock } from 'react-icons/fi';
import Main from '../../components/layout/PrivateMain'
import Image from 'next/image';
import Mic80 from '../../assets/img/mic80.png';
import { useRouter } from 'next/router';

const PersonalInfo = () => {
  const router = useRouter();
  const changePin = () => {
    router.push('/private/home');
  }
  return (
    <>
      <Main title='Change Pin'>
        <Container className='shadow rounded-4'>
          <Row>
            <Col className="ms-md-3">
              <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-253px">
                <Col className="pb-2 f-color-g">
                  <div className="d-flex justify-content-between mb-2">
                    <h1 className="fs-18px fw-bold">Change PIN</h1>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between my-4 pb-4">
                      <span>Enter your current 6 digits Zwallet PIN below to<br /> continue to the next
                        steps.</span>
                    </div>
                    <Col md={7} className="mx-auto mt-5 pb-4">
                      <div className="d-flex flex-column">
                        <Row>
                          <Col>
                            <input type="text"
                              className="form-control form-control-lg pin-centered text-center fw-bold" />
                          </Col>
                          <Col>
                            <input type="text"
                              className="form-control form-control-lg pin-centered text-center fw-bold" />
                          </Col>
                          <Col>
                            <input type="text"
                              className="form-control form-control-lg pin-centered text-center fw-bold" />
                          </Col>
                          <Col>
                            <input type="text"
                              className="form-control form-control-lg pin-centered text-center fw-bold" />
                          </Col>
                          <Col>
                            <input type="text"
                              className="form-control form-control-lg pin-centered text-center fw-bold" />
                          </Col>
                          <Col>
                            <input type="text"
                              className="form-control form-control-lg pin-centered text-center fw-bold" />
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={7} className="m-auto pb-5">
                      <div className="d-grid gap-2">
                        <Button onClick={changePin} className='btn btn-lg bg-web mt-5'><a className="a-login color-btn-bef">Continue</a></Button>
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