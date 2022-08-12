import React from 'react'
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Robert52 from '../../assets/img/Robert52.png';
import { FiBell, FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut } from 'react-icons/fi';
import Image from 'next/image';

const PrivateMain = (props) => {
  return (
    <>
      <Navbar className="bg-white rounded-bottom shadow bg-body">
        <Container className='px-5 py-4'>
          <Navbar.Brand className='fw-bold'>Savings</Navbar.Brand>
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
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar >
      <Container className='py-5'>
        <Row>
          <Col className='py-md-4 d-flex flex-column gap-5 justify-content-between bg-white rounded-4 shadow'>
            <Row className='d-flex flex-column gap-5'>
              <li className="ank-menu">
                <FiGrid className='mx-4 fs-24px' /><Link href={'/private/home'}><a className="color-371B58">Dashboard</a></Link>
              </li>
              <li className="ank-menu">
                <FiArrowUp className='mx-4 fs-24px' /><Link href={'/private/transfer'}><a className="color-371B58">Transfer</a></Link>
              </li>
              <li className="ank-menu">
                <FiPlus className='mx-4 fs-24px' /><Link href={'/private/top-up'}><a className="color-371B58">Top Up</a></Link>
              </li>
              <li className="ank-menu">
                <FiUser className='mx-4 fs-24px' /><Link href={'/private/profile'}><a className="color-371B58">Profile</a></Link>
              </li>
            </Row>
            <Row>
              <li className="ank-menu">
                <FiLogOut className='mx-4 fs-24px' /><Link href={'/private/logout'}><a className="color-371B58">Logout</a></Link>
              </li>
            </Row>
          </Col>
          <Col md={9} className='px-4'>
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
    </>
  )
}

export default PrivateMain;