import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FiLogOut, FiEdit2, FiArrowRight } from 'react-icons/fi';
import Main from '../../components/layout/PrivateMain'
import Image from 'next/image';
import Mic80 from '../../assets/img/mic80.png';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const personalInformation = () => {
    router.push('/private/personal-info');
  }
  const changePassword = () => {
    router.push('/private/change-password');
  }
  const changePin = () => {
    router.push('/private/change-pin');
  }
  const logout = () => {
    router.push('/');
  }
  return (
    <>
      <Main title='Profile'>
        <Container className='shadow rounded-4'>
          <Row>
            <Col className="ms-md-3">
              <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
                <Col className="pb-2 f-color-g">
                  <div>
                    <div className="text-center mt-2">
                      <Col md={1} className='mx-auto'>
                        <Image src={Mic80} alt="mic80.png" /><br />
                      </Col>
                      <Row>
                        <span className="mt-3"><FiEdit2 className="me-2" />Edit</span>
                      </Row>
                      <h1 className="fs-18px fw-bold mt-4">Robert Chandler</h1>
                      <div className="row mt-3">
                        <span>+62 813-9387-7946</span>
                      </div>
                    </div>
                    <Col md={6} onClick={personalInformation}
                      className="cursor nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                      <a className="fs-16px fw-bold color-web-dark-2">Personal Information</a>
                      <FiArrowRight />
                    </Col>
                    <Col md={6} onClick={changePassword}
                      className="cursor nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                      <a className="fs-16px fw-bold color-web-dark-2">Change Password</a>
                      <FiArrowRight />
                    </Col>
                    <Col md={6} onClick={changePin}
                      className="cursor nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                      <a className="fs-16px fw-bold color-web-dark-2">Change PIN</a>
                      <FiArrowRight />
                    </Col>
                    <Col md={6} onClick={logout}
                      className="cursor nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-4 bg-body rounded m-auto bg-profile">
                      <a className="fs-16px fw-bold color-web-dark-2">Logout</a>
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

export default Profile;