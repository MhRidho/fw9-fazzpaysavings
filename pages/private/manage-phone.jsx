import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FiTrash, FiPhone } from 'react-icons/fi';
import Main from '../../components/layout/PrivateMain'
import Image from 'next/image';
import Mic80 from '../../assets/img/mic80.png';

const PersonalInfo = () => {
  return (
    <>
      <Main title='Manage Phone'>
        <Container className='shadow rounded-4'>
          <Row>
            <Col className="ms-md-3">
              <Row className="d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1 pad-bot-304px">
                <Col className="pb-2 f-color-g">
                  <div>
                    <h1 className="fs-18px fw-700">Manage Phone Number</h1>
                    <p className="mt-3">You can only delete the phone number and then<br /> you must add another phone
                      number.
                    </p>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-5">
                    <div
                      className="col-lg-11 nav justify-content-between d-flex align-items-center shadow-sm p-2 mb-5 bg-body rounded">
                      <div className="col mt-3 ms-3 mar-right-40px" >
                        <p className="fs-16px">Primary</p>
                        <h1 className="fs-22px fw-700">+62 813-9387-7946</h1>
                      </div>
                      <div>
                        <Link href={'/private/home'}><a><FiTrash className='fs-22px color-BBBBBE' /></a></Link>
                      </div>
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