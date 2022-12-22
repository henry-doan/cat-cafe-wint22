import { CatConsumer } from "../../providers/CatProvider";
import CatList from './CatList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import CatForm from './CatForm';
import Flash from '../shared/Flash';
import { Link } from 'react-router-dom';

const Cats = ({ cats, getAllCats, msgs, setMsgs  }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllCats()
  }, [])

  return (
    <Container>
      { msgs ?
        <Flash
          variant={msgs.variant}
          msg={msgs.msg}
          setErrors={setMsgs}
        />
        :
        null
      }
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>
      <Link to='/random'>
        <Button>Random Cat</Button>
      </Link>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Cat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CatForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>
      <h1>My Cats</h1>
      <CatList 
        cats={cats}
      />
    </Container>
  )
}

const ConnectedCats = (props) => (
  <CatConsumer>
    { value => <Cats {...value} {...props} />}
  </CatConsumer>
)

export default ConnectedCats;