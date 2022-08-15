import { React, useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import Satu from '../../assets/img/sam70.png';
import Momo from '../../assets/img/momo.png';
import Jes70 from '../../assets/img/jes70.png';
import Mic70 from '../../assets/img/mic70.png';
import { FiLogOut, FiSearch, FiEdit2, FiDownload, FiShare2 } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import Main from '../../components/layout/PrivateMain';
import { Formik } from 'formik';
import Failed from '../../assets/img/failed.png';
import Sam70 from '../../assets/img/sam70.png';

const TransferFailed = () => {
  return (
    <>
      <Main title='Transfer Failed'>
        <Col className="ms-md-3 shadow">
          <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
            <Col className="pb-2 f-color-g">
              <Row>
                <div className="text-center mt-2">
                  <Col md={1} className='mx-auto'>
                    <Image src={Failed} alt="failed.png" />
                  </Col>
                  <h1 className="fs-18px fw-bold my-4">Transfer Failed</h1>
                  <span>We can`t transfer your money at the moment, we recommend you to check your<br /> internet connection and try again.</span>
                </div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                  <div className="col mar-right-40px">
                    <p className="fs-16px">Amount
                    </p>
                    <h1 className="fs-18px fw-bold color-web-dark-2">Rp100.000</h1>
                  </div>
                </div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                  <div className="col mar-right-40px">
                    <p className="fs-16px">Balance Left
                    </p>
                    <h1 className="fs-18px fw-bold color-web-dark-2">Rp20.000</h1>
                  </div>
                </div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                  <div className="col mar-right-40px">
                    <p className="fs-16px">Date & Time
                    </p>
                    <h1 className="fs-18px fw-bold color-web-dark-2">May 11, 2020 - 12.20</h1>
                  </div>
                </div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                  <div className="col mar-right-40px">
                    <p className="fs-16px">Notes
                    </p>
                    <h1 className="fs-18px fw-bold color-web-dark-2">For buying some socks</h1>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <h1 className="fs-18px fw-bold">Transfer To</h1>
                </div>
                <div>
                  <div
                    className="nav justify-content-between d-flex align-items-center mt-1 shadow-sm p-3 mb-1 bg-body rounded">
                    <Row><Image src={Sam70} alt="3.png" className="mar-right-40px" /></Row>
                    <div className="col ms-3">
                      <h1 className="mt-3 fs-18px fw-bold">Samuel Suhi</h1>
                      <p className="fs-16px">+62 813-8492-9994
                      </p>
                    </div>
                  </div>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5 pb-2">
                    <div className="d-grid d-md-flex justify-content-md-end">
                      <Link
                        className="u-none-back btn btn-primary mt-1 btn-lg text-white" href={'/private/home'}>Try Again</Link>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Main>
    </>
  )
}

export default TransferFailed;