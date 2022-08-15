import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi';
import Main from '../../components/layout/PrivateMain'

const TopUp = () => {
  return (
    <>
      <Main title='Top Up'>
        <Container className=' rounded-4'>
          <Row>
            <Col className="ms-md-3">
              <Row className="shadow d-flex justify-content-between rounded-4 pt-5 pb-4 px-4 bg-white mt-1 ">
                <Col className="pb-2 f-color-g">
                  <div className="d-flex justify-content-between mb-2">
                    <h1 className="fs-18px fw-bold">How To Top Up</h1>
                  </div>
                  <div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-2 shadow-sm p-2 bg-body rounded">
                      <Col className="mar-right-40px py-3">
                        <h4 className="fs-16px color-web-dark"><span
                          className="color-web fw-18px fw-bold mx-3">1
                        </span>Go the nearest
                          ATM or you
                          can use E-Banking.
                        </h4>
                      </Col>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-3 shadow-sm p-2 bg-body rounded">
                      <Col className="mar-right-40px py-3">
                        <h4 className="fs-16px color-web-dark"><span
                          className="color-web fw-18px fw-bold mx-3">2
                        </span>Type your security number on the ATM or E-Banking.
                        </h4>
                      </Col>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-3 shadow-sm p-2 bg-body rounded">
                      <Col className="mar-right-40px py-3">
                        <h4 className="fs-16px color-web-dark"><span
                          className="color-web fw-18px fw-bold mx-3">3
                        </span>Select “Transfer” in the menu
                        </h4>
                      </Col>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-3 shadow-sm p-2 bg-body rounded">
                      <Col className="mar-right-40px py-3">
                        <h4 className="fs-16px color-web-dark"><span
                          className="color-web fw-18px fw-bold mx-3">4
                        </span>Type the virtual account number that we provide you at the top.
                        </h4>
                      </Col>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-3 shadow-sm p-2 bg-body rounded">
                      <Col className="mar-right-40px py-3">
                        <h4 className="fs-16px color-web-dark"><span
                          className="color-web fw-18px fw-bold mx-3">5
                        </span>Type the amount of the money you want to top up.
                        </h4>
                      </Col>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-3 shadow-sm p-2 bg-body rounded">
                      <Col className="mar-right-40px py-3">
                        <h4 className="fs-16px color-web-dark"><span
                          className="color-web fw-18px fw-bold mx-3">6
                        </span>Read the summary details
                        </h4>
                      </Col>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-3 shadow-sm p-2 bg-body rounded">
                      <Col className="mar-right-40px py-3">
                        <h4 className="fs-16px color-web-dark"><span
                          className="color-web fw-18px fw-bold mx-3">7
                        </span>Press transfer / top up
                        </h4>
                      </Col>
                    </div>
                    <div
                      className="nav justify-content-between d-flex align-items-center mt-3 shadow-sm p-2 bg-body rounded">
                      <Col className="mar-right-40px py-3">
                        <h4 className="fs-16px color-web-dark"><span
                          className="color-web fw-18px fw-bold mx-3">8
                        </span>You can see your money in Zwallet within 3 hours.
                        </h4>
                      </Col>
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

export default TopUp;