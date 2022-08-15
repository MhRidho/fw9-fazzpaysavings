import React from 'react'
import { Navbar, Container, Row, Col, Button, Dropdown, DropdownButton, SplitButton } from 'react-bootstrap';
import Link from 'next/link';
import Robert52 from '../../assets/img/Robert52.png';
import { FiBell, FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut } from 'react-icons/fi';
import Image from 'next/image';
import { logout } from '../../stores/reducers/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';

const PrivateMain = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const toHome = () => {
    router.push('/private/home');
  }
  const toTransfer = () => {
    router.push('/private/transfer');
  }
  const toTopup = () => {
    router.push('/private/top-up');
  }
  const toProfile = () => {
    router.push('/private/profile');
  }
  const logOut = () => {
    dispatch(logout());
    router.push('/auth');
  };

  return (

    <>
      <Head>
        <title>{props.title ? props.title : 'Fazzpay'}</title>
      </Head>
      <div className='body'>
        <Navbar className="bg-white rounded-bottom shadow bg-body">
          <Container className='px-5 py-4'>
            <Navbar.Brand className='fw-bold'><Link href={'/'}><a className='color-371B58'>Savings</a></Link></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className=" d-flex justify-content-end gap-3">
              <Row>
                <Navbar.Text>
                  <Image src={Robert52} alt="Robert52.png" />
                </Navbar.Text>
              </Row>
              <Row>
                <Col className='d-flex flex-column'>
                  <h5 className="fs-18px fw-bold mt-1">Robert Chandler</h5>
                  <p className="fs-13px">+62 8139 3877 7946</p>
                </Col>
              </Row>
              <Row>
                <Col className='d-flex flex-column'>
                  <FiBell />
                </Col>
                <Col>
                  <DropdownButton drop={'start'} variant='light' id="dropdown-item-button" title="">
                    <Container className='p-5'>
                      <Row>
                        <Col>
                          <div className="px-4 py-2 nav justify-content-between d-flex align-items-center mt-4 shadow-sm rounded-4">
                            <Row><Image src={Robert52} alt="3.png" /></Row>
                            <Col className="ms-4">
                              <h1 className="mt-3 fs-16px fw-bold">Samuel</h1>
                              <p className="fs-14px">Transfer</p>
                            </Col>
                            <span className="fs-16px fw-bold color-green-web">+Rp50.000</span>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </DropdownButton>
                </Col>
              </Row>
            </Navbar.Collapse>
          </Container>
        </Navbar >
        <Container className='py-4'>
          <Row>
            {/* Menus */}
            <Col className='mt-1 mx-sm-2 py-4 d-flex flex-sm-column gap-sm-5 justify-content-between bg-white rounded-4 shadow'>
              <Row className='d-flex flex-sm-column gap-sm-5 pt-sm-3'>
                <ul className='nav flex-sm-column gap-sm-5 ps-sm-3'>
                  <li className="ank-menu">
                    <Button className='btn-menu' onClick={toHome}><FiGrid className='mx-4 fs-24px' /><a className="color-371B58 dasbor">Dashboard</a></Button>
                  </li>
                  <li className="ank-menu">
                    <Button className='btn-menu' onClick={toTransfer}><FiArrowUp className='mx-4 fs-24px' /><a className="color-371B58">Transfer</a></Button>
                  </li>
                  <li className="ank-menu">
                    <Button className='btn-menu' onClick={toTopup}><FiPlus className='mx-4 fs-24px' /><a className="color-371B58">Top Up</a></Button>
                  </li>
                  <li className="ank-menu">
                    <Button className='btn-menu' onClick={toProfile}><FiUser className='mx-4 fs-24px' /><a className="color-371B58">Profile</a></Button>
                  </li>
                </ul>
              </Row>
              <Row className='pb-sm-3'>
                <ul className='nav flex-sm-column gap-sm-5 ps-sm-3'>
                  <li className="ank-menu">
                    <Button className='btn-menu' onClick={logOut}><FiLogOut className='mx-4 fs-24px' /><a className="color-371B58">Logout</a></Button>
                  </li>
                </ul>
              </Row>
            </Col>
            {/* End Menus */}
            <Col md={9} className='px-3 mt-1'>
              <div>{props.children}</div>
            </Col>
          </Row>
        </Container>

        <Navbar className="p-3 foot-last">
          <Container className="px-5">
            <span>2022 Savings. All right reserved.</span>
            <aside className="d-flex">
              <div className="d-flex flex-column align-content-center me-4">
                <span>+62 5637 8882 9901</span>
              </div>
              <span>contact@savings.com</span>
            </aside>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default PrivateMain;