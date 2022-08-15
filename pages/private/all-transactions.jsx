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
import cookies from "next-cookies";
import axiosServer from '../../helper/axiosServer';

export async function getServerSideProps(context) {
  try {
    console.log('Log Server Side');
    const dataCookie = cookies(context);
    const page = !context.query?.page ? 1 : context.query.page;
    const result = await axiosServer.get(
      `user?page=1&limit=50&search=&sort=firstName ASC`,
      {
        headers: {
          Authorization: `Bearer ${dataCookie.token}`,
        },
      }
    );
    return {
      props: {
        data: result.data.data,
        pagination: result.data.pagination,
      },
    };
  } catch (error) {
    if (error.response.status === 403) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    } else {
      return {
        props: {
          isError: true,
          msg: error.response,
        },
      };
    }
  }
}

const Transaction = (props) => {
  const [data, setData] = useState(props.data);

  console.log('Log Client Slide');
  const handleNextPage = () => {
    router.push(`/rendering/ssr?page=${+router.query + 1}`);
  };
  return (
    <>
      <Main title='All Transactions'>
        <Col className="ms-md-3 shadow">
          <Row className="d-flex justify-content-between rounded-4 py-5 px-4 bg-white mt-1">
            <Col className="pb-5 f-color-g">
              <div className="d-flex justify-content-between mb-3">
                <h1 className="fs-18px fw-bold">Transaction History</h1>
              </div>
              <span>This Week</span>
              <div>
                {data && data.map((item, i) => (
                  <div key={item.id} className="px-4 py-2 nav justify-content-between d-flex align-items-center mt-4 shadow-sm rounded-4">
                    <Row><Image src={Satu} alt="3.png" /></Row>
                    <Col className="ms-4">
                      <h1 className="mt-3 fs-16px fw-bold">{item.firstName}</h1>
                      <p className="fs-14px">Transfer</p>
                    </Col>
                    <span className="fs-16px fw-bold color-green-web">+Rp50.000</span>
                  </div>
                ))}
                <div className="pt-3"><span>This Month</span></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Main>
    </>
  )
}

export default Transaction;