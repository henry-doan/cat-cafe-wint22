import { useParams } from 'react-router-dom';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useEffect, useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import NoteList from './NoteList';
import Flash from '../shared/Flash';
import NoteForm from './NoteForm';

const Notes = ({ getAllNotes, notes, msgs, setMsgs }) => {
  const { catId } = useParams()
  const [adding, setAdd] = useState(false)

  useEffect(() => {
    getAllNotes(catId)
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

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NoteForm setAdd={setAdd} />
        </Modal.Body>
      </Modal>
      <h1>All Notes</h1>
      <NoteList notes={notes} />
    </Container>
  )
}

const ConnectedNotes = (props) => (
  <NoteConsumer>
    { value => <Notes {...value} {...props} />}
  </NoteConsumer>
)

export default ConnectedNotes;