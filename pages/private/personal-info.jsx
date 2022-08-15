import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FiLogOut, FiEdit2, FiArrowRight } from 'react-icons/fi';
import Main from '../../components/layout/PrivateMain'
import Image from 'next/image';
import Mic80 from '../../assets/img/mic80.png';

const PersonalInfo = () => {
  return (
    <>
      <Main title='Personal Information'>
        <Container className='shadow rounded-4'>
          <Row>
            <Col className="ms-md-3">
              <Row className="d-flex justify-content-between rounded-4 pt-5 pb-4 px-4 bg-white mt-1">
                <Col className="pb-2 f-color-g">
                  <div className="d-flex justify-content-between mb-2">
                    <h1 className="fs-18px fw-bold">Personal Information</h1>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between my-4">
                      <span>We got your personal information from the sign<br /> up proccess. If you want
                        to
                        make changes on<br /> your information, contact our support.</span>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-2 bg-body rounded">
                      <div className="col mar-right-40px">
                        <p className="fs-16px">First Name
                        </p>
                        <h1 className="fs-18px fw-bold color-web-dark-2">Robert</h1>
                      </div>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                      <div className="col mar-right-40px">
                        <p className="fs-16px">Last Name
                        </p>
                        <h1 className="fs-18px fw-bold color-web-dark-2">Chandler</h1>
                      </div>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                      <div className="col mar-right-40px">
                        <p className="fs-16px">Verified E-mail
                        </p>
                        <h1 className="fs-18px fw-bold color-web-dark-2">pewdiepie1@gmail.com</h1>
                      </div>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                      <div className="col mar-right-40px">
                        <p className="fs-16px">Phone Number
                        </p>
                        <h1 className="fs-18px fw-bold color-web-dark-2">+62 813-9387-7946</h1>
                      </div>
                      <Link className="u-none-back-manage me-2" href={'/private/manage-phone'}>Manage</Link>
                    </div>
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