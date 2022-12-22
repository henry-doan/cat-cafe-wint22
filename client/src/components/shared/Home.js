import { Image, Container, Row, Col, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainBtn, MainBtn2, HeadImg, MainHeader } from '../styles/mainStyles';

const Home = () => (
  <>
    <Image 
      src='https://images.unsplash.com/photo-1608096281339-5bcae1ec2f12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80'
      alt='home'
      width='100%'
    />
    <br />
    <br />
    <br />
    <Container>
      <Row>
        <Col>
          <MainHeader>Enjoy a Catpuccino in a <br />Purrfect Catmosphere</MainHeader>
        </Col>
        <Col>
          <p>Have purrsausive experience with putty darn cute kittys in the biggest meowment of the century.</p>
          <Row>
            <Col>
              <Link to='/register'>
                <MainBtn>
                  SignUp
                </MainBtn>
              </Link>
              <Link to='/login'>
                <MainBtn2>
                  Login
                </MainBtn2>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <Container>
      <Row md='2'>
        <Col>
          <HeadImg 
            src="https://images.unsplash.com/photo-1607923432780-7a9c30adcb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80"
            alt='head2'
          />
        </Col>
        <Col className='justify-content-center align-self-center'>
          <MainHeader>Check out Pawsome <br />Cats while enjoying <br /> some Kit-teas</MainHeader>
          <p>Meow Meow Meow Meow Meow Meow!</p>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <Container>
      <h1 className='text-center'>FAQs</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    <br />
    <br />
    <br />
    <br />
  </>
)

export default Home;