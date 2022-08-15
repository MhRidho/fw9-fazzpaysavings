import { Container, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter } from '../../stores/actions/counter';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <Container className='text-center'>
      <h1>Counter App</h1>
      <hr />
      <h1>{counter.count}</h1>
      <Row>
        <Col className='d-flex gap-3 justify-content-center'>
          <Button onClick={() => dispatch(decreaseCounter(1))} className='fw-bold bg-web rounded-5'>-1</Button>
          <Button onClick={() => dispatch({ type: 'RESET' })} className='fw-bold bg-web'>RESET</Button>
          <Button onClick={() => dispatch(increaseCounter())} className='fw-bold bg-web rounded-5'>+</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter;