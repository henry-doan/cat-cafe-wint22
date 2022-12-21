import { CatConsumer } from "../../providers/CatProvider";
import CatList from './CatList';
import { useState, useEffect } from "react";
import { Container, Modal, Button } from 'react-bootstrap';
import CatForm from './CatForm';

const Cats = ({ cats, getAllCats }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllCats()
  }, [])

  return (
    <Container>
      <Button variant="primary" onClick={() => setAdd(true)}>
        +
      </Button>

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