import React from 'react'
import Main from '../../components/layout/PrivateMain';
import { Col, Row } from 'react-bootstrap';
import { FiArrowUp, FiPlus, FiArrowDown } from 'react-icons/fi';
import Image from 'next/image';
import Graphic from '../../assets/img/graphicPurple.png';
import Satu from '../../assets/img/sam1.png';

const home = () => {
  return (
    <>
      <Main>
        <div className="row border d-flex justify-content-between rounded-4 py-4 ps-4 main-section">
          <div className="col">
            <span className="fs-18px">Balance</span>
            <h1 className="fs-40px">Rp120.000</h1>
            <p className="fs-14px">+62 813-9387-7946</p>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-evenly ps-md-4">
            <a className="btn btn-primary btn-lg btn-main-section"><FiArrowUp className="mx-2" />Transfer</a>
            <a className="btn btn-primary btn-lg btn-main-section mt-2"><FiPlus className="mx-2" />Top Up</a>
          </div>
        </div>
        <Row className="mt-md-3">
          <Col md={7} className="border bg-white rounded-4 p-4 mt-1">
            <div className="d-flex justify-content-between">
              <Col md={8} className='m-2'>
                <span className="input-group color-green-web pb-2 fs-22px"><FiArrowDown /></span>
                <span className="fs-14px">Income</span>
                <h1 className="mt-2 fw-bold fs-18px">Rp2.120.000</h1>
              </Col>
              <Col className='m-2'>
                <span className="input-group color-red pb-2 fs-22px"><FiArrowUp /></span>
                <span className="fs-14px">Expense</span>
                <h1 className="mt-2 fw-bold fs-18px">Rp1.560.000</h1>
              </Col>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Col md={10}>
                <Image fluid src={Graphic} alt="graphic.png" />
              </Col>
            </div>
          </Col>

          <Col className="border bg-white rounded-4 ms-md-3 p-4 mt-1">
            <div>
              <Col className="d-flex justify-content-between mt-1">
                <h1 className="fs-18px fw-bold mt-1">Transaction History</h1>
                <a className="a-menu"><span className="fs-14px color-web">See
                  all</span></a>
              </Col>
            </div>

            <div>
              <div className="nav justify-content-between d-flex align-items-center mt-4">
                <div>
                  <Image src={Satu} alt="3.png" />
                </div>
                <div className="col">
                  <h1 className="mt-3 fs-16px fw-bold ms-4" >Samuel</h1>
                  <p className="fs-14px ms-4">Transfer</p>
                </div>
                <span className="fs-16px fw-bold color-green-web">+Rp200000</span>
              </div>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  )
}

export default home