import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FiLogOut, FiPhone } from 'react-icons/fi';
import Main from '../../components/layout/PrivateMain'
import Image from 'next/image';
import Mic80 from '../../assets/img/mic80.png';

const PersonalInfo = () => {
  return (
    <>
      <Main title='Add Phone Number'>
        <Container className='shadow rounded-4'>
          <Row>
            <Col className="ms-md-3">
              <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                <Col className="pb-2 f-color-g">
                  <div className="d-flex justify-content-between mb-2">
                    <h1 className="fs-18px fw-bold">Add Phone Number</h1>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between my-4 pb-4">
                      <span>Add at least one phone number for the transfer<br /> ID so you can start transfering your money to<br /> another user.</span>
                    </div>
                    <Col md={7} className="mx-auto mt-5 pb-4">
                      <div className="d-flex flex-column">
                        <Row>
                          <div className="input-group mb-3 martop-73px">
                            <span className="input-group-text form" id="basic-addon1"><FiPhone />
                              <h5 className="ms-2 mt-2">+62</h5>
                            </span>
                            <input type="password" className="form-control form color-web-gray-3 fs-16px"

                              placeholder="Enter your phone number" aria-label="Username"
                              aria-describedby="basic-addon1" />
                          </div>
                        </Row>
                      </div>
                    </Col>
                    <Col md={7} className="m-auto pb-5">
                      <div className="d-grid gap-2">
                        <Link
                          className="a-login color-btn-bef btn btn-primary btn-lg bg-btn-bef mt-5" href={'/private/managephone'}>Add Phone Number</Link>
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