import { React, useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap';
import Satu from '../../assets/img/sam70.png';
import Momo from '../../assets/img/momo.png';
import Jes70 from '../../assets/img/jes70.png';
import Mic70 from '../../assets/img/mic70.png';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import Main from '../../components/layout/PrivateMain';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
// import { getTransfer } from '../redux/asyncActions/profiles'
import { getTransfer } from '../../stores/actions/transfer';

const Transfer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const transfer = useSelector((state) => state.transfer.data);

  useEffect(() => {
    dispatch(getTransfer(token));
  }, []);

  const inputAmount = () => {
    router.push('/private/input-amount');
  }
  return (
    <>
      <Main title='Transfer'>
        <Col className="ms-md-3">
          <Row className="shadow d-flex justify-content-between rounded-4 pt-5 px-4 bg-white mt-1">
            <Col className="pb-2 f-color-g">
              <div className="d-flex justify-content-between mb-3">
                <h1 className="fs-18px fw-bold">Search Receiver</h1>
              </div>
              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text id="basic-addon1" className='s-receiver'><FiSearch className='color-A9A9A9' /></InputGroup.Text>
                <Form.Control
                  className='s-receiver'
                  placeholder="Search receiver here"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <div>
                {transfer && transfer.map((trans, i) => (
                  <div onClick={inputAmount} key={trans.id}
                    className="column-transfer nav justify-content-between d-flex align-items-center mt-4 shadow-sm ps-4 py-3 mb-2 bg-body rounded">
                    <Row><Image src={Satu} alt="3.png" className='mar-right-20px' /></Row>
                    <Col className="ms-4">
                      <h1 className="mt-3 fs-16px fw-bold">{trans?.firstName}</h1>
                      <p className="fs-14px">+628363637453</p>
                    </Col>
                  </div>
                ))}
                <div onClick={inputAmount}
                  className="column-transfer nav justify-content-between d-flex align-items-center mt-4 shadow-sm ps-4 py-3 mb-2 bg-body rounded">
                  <Row><Image src={Satu} alt="3.png" className='mar-right-20px' /></Row>
                  <Col className="ms-4">
                    <h1 className="mt-3 fs-16px fw-bold">Samuel</h1>
                    <p className="fs-14px">+628363637453</p>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Main>
    </>
  )
}

export default Transfer;