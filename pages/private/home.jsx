import React, { useState, useEffect } from 'react'
import Main from '../../components/layout/PrivateMain';
import { Button, Col, Row } from 'react-bootstrap';
import { FiArrowUp, FiPlus, FiArrowDown } from 'react-icons/fi';
import Image from 'next/image';
import Graphic from '../../assets/img/graphicPurple.png';
import Satu from '../../assets/img/sam1.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cookies from "next-cookies";
import axiosServer from '../../helper/axiosServer';

export async function getServerSideProps(context) {
  try {
    console.log('Log Server Side');
    const dataCookie = cookies(context);
    const page = !context.query?.page ? 1 : context.query.page;
    const result = await axiosServer.get(
      `/transaction/history?page=1&limit=2&filter=MONTH`,
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


const Home = (props) => {
  const router = useRouter();
  const transfer = () => {
    router.push('/private/transfer');
  }
  const topup = () => {
    router.push('/private/top-up');
  }

  const [data, setData] = useState(props.data);

  console.log('Log Client Slide');
  const handleNextPage = () => {
    router.push(`/rendering/ssr?page=${+router.query + 1}`);
  };

  return (
    <>
      <Main title='Home'>
        <Row className="d-flex justify-content-between rounded-4 py-4 px-3 main-section shadow">
          <Col>
            <span className="fs-18px">Balance</span>
            <h1 className="fs-40px">Rp120.000</h1>
            <p className="fs-14px">+62 813-9387-7946</p>
          </Col>
          <Col md={3} className="d-flex flex-column gap-2 justify-content-end py-1">
            <Button className='btn btn-lg btn-main-section bg-371B58' onClick={transfer}><FiArrowUp className="me-3" />Transfer</Button>
            <Button className='btn btn-lg btn-main-section bg-371B58' onClick={topup}><FiPlus className="me-3" />Top Up</Button>
          </Col>
        </Row>
        <Row className="mt-md-3">
          <Col md={7} className="bg-white rounded-4 p-4 mt-1 shadow">
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

          <Col className="bg-white rounded-4 ms-md-3 p-4 mt-1 shadow">
            <Row>
              <Col className="d-flex justify-content-between mt-1">
                <h1 className="fs-18px fw-bold mt-1">Transaction History</h1>
                <Link href={'/private/all-transactions'} className="a-menu"><a className="fs-14px color-web fw-bold">See
                  all</a></Link>
              </Col>
            </Row>

            <div>
              <div className="nav justify-content-between d-flex align-items-center mt-4">
                <div>
                  <Image src={Satu} alt="3.png" />
                </div>
                <Col>
                  <h1 className="mt-3 fs-16px fw-bold ms-4">Samuel</h1>
                  <p className="fs-14px ms-4">Transfer</p>
                </Col>
                <span className="fs-16px fw-bold color-green-web">+Rp200000</span>
                {data && data.map((item, i) => (
                  <div key={item.id}>
                    <div>
                      <Image src={Satu} alt="3.png" />
                    </div>
                    <Col>
                      <h1 className="mt-3 fs-16px fw-bold ms-4">{item.firstName}</h1>
                      <p className="fs-14px ms-4">Transfer</p>
                    </Col>
                    <span className="fs-16px fw-bold color-green-web">+Rp200000</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  )
}

export default Home;