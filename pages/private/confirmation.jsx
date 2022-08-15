import { React, useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, Form, Button, Modal } from 'react-bootstrap';
import Satu from '../../assets/img/sam70.png';
import Momo from '../../assets/img/momo.png';
import Jes70 from '../../assets/img/jes70.png';
import Mic70 from '../../assets/img/mic70.png';
import { FiLogOut, FiSearch, FiEdit2 } from 'react-icons/fi';
import Link from 'next/link';
import Router from 'next/router';
import Image from 'next/image';
import Main from '../../components/layout/PrivateMain';

const ModalCenter = (props) => {
  const toConfirm = () => {
    Router.push('/private/transfer-success');
  };
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <Modal.Header closeButton>
          <h5 className="modal-title fs-16px fw-700 text-dark" id="contained-modal-title-vcenter"
          >Enter
            PIN
            to Transfer</h5>
        </Modal.Header>
        <Modal.Body>
          <p>Enter your 6 digits PIN for confirmation to continue transferring
            money. </p>
          <div className="d-flex flex-column my-5">
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toConfirm}
            className="btn btn-primary btn-lg bg-web text-white u-none">Continue</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}

const Confirmation = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Main title='Confirmation'>
        <Col className="ms-md-3 shadow">
          <Row className="d-flex justify-content-between rounded-4 pt-5 pb-4 px-4 bg-white mt-1">
            <Col className="pb-2 f-color-g">
              <div className="d-flex justify-content-between mb-3">
                <h1 className="fs-18px fw-bold">Transfer Money</h1>
              </div>
              <div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-3 mb-2 bg-body rounded">
                  <Row className='ps-2'><Image src={Satu} alt="3.png" classNameName='mar-right-20px' /></Row>
                  <Col classNameName="ms-3">
                    <h1 className="mt-3 fs-16px fw-bold ms-4">Samuel Suhi</h1>
                    <p className="fs-14px ms-4">+62 813-8492-9994</p>
                  </Col>
                </div>
                <div className="d-flex justify-content-between my-4">
                  <h1 className="fs-18px fw-bold">Details</h1>
                </div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-2 bg-body rounded">
                  <Col className="mar-right-40px">
                    <p className="fs-16px">Amount
                    </p>
                    <h1 className="fs-18px fw-bold color-web-dark-2">Rp100.000</h1>
                  </Col>
                </div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                  <Col className="mar-right-40px">
                    <p className="fs-16px">Balance Left
                    </p>
                    <h1 className="fs-18px fw-bold color-web-dark-2">Rp20.000</h1>
                  </Col>
                </div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                  <Col className="mar-right-40px">
                    <p className="fs-16px">Date & Time
                    </p>
                    <h1 className="fs-18px fw-bold color-web-dark-2">May 11, 2020 - 12.20</h1>
                  </Col>
                </div>
                <div
                  className="nav justify-content-between d-flex align-items-center mt-4 shadow-sm p-2 bg-body rounded">
                  <Col className="mar-right-40px">
                    <p className="fs-16px">Notes
                    </p>
                    <h1 className="fs-18px fw-bold color-web-dark-2">For buying some socks</h1>
                  </Col>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                  <Button className="btn btn-primary btn-lg bg-web" type="button" onClick={() => setModalShow(true)}>Continue</Button>

                  <ModalCenter
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Main>
    </>
  )
}

export default Confirmation;