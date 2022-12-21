import { Card, Button, Modal, Container, Row, Col, Image } from 'react-bootstrap';
import { useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { CatConsumer } from '../../providers/CatProvider';

const CatShow = ({ id, name, breed, registry, dob, avatar, deleteCat }) => {
  const [showing, setShow] = useState(false)

  return(
    <>
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={avatar} height='140px' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="outline-dark" onClick={() => setShow(true)}>
            Show
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showing} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Container>
                <h1>{name}</h1>
                <p>Breed:
                  { breed ? breed : "Unknown Breed" }
                </p>
                <p>Registry: { registry ? registry : "Unknown Registry" }</p>
                <p>D.O.B: { dob ? <Moment format='MM-DD-YY'>{dob}</Moment> : "Unknown Date of Birth" }</p>
                <Link
                  to={`/${id}/updateCat`}
                  state={{
                    id,
                    name,
                    breed,
                    registry,
                    dob,
                    avatar,
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteCat(id)}
                >
                  Delete
                </Button>
                <Link
                  to={`/${id}/notes`}
                >
                  <Button>Notes</Button>
                </Link>
              </Container>
            </Col>
            <Col>
              <Image 
                src={avatar} 
                alt={name}
                height='200px'
                width='200px'
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <br />
    </>
  )
}

const ConnectedCatShow = (props) => (
  <CatConsumer>
    { value => <CatShow {...props} {...value} />}
  </CatConsumer>
)

export default ConnectedCatShow;