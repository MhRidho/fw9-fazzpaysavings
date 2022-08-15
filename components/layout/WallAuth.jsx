import Group57 from '../../assets/img/Group-57-purple.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Router } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import rout from 'next/router';

const WallAuth = () => {
  const landing = () => {
    router.push('/');
  }
  return (
    <>
      <Col md={7} className='py-5 ps-5 cover'>
        <Button onClick={landing} className="ms-md-5 home-wallet bg-web"><h2 className="ms-md-5">Savings</h2></Button>
        <Image src={Group57} alt="Group-57" className="ms-md-5" />
        <div className="ms-md-5">
          <div className="marleft-40px">
            <h1 className="text-light fw-700 fs-24px">App that Covering Banking Needs.</h1>
            <p className="mt-4 text-white fw-400 fs-16px">Zwallet is an application that focussing in banking
              needs
              for all users<br />
              in the world. Always updated and always following world trends.<br />
              5000+ users registered in Zwallet everyday with worldwide<br />
              users coverage.</p>
          </div>
        </div>
      </Col>
    </>
  )
}

export default WallAuth;

