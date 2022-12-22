import { ListGroup, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from 'react';
import Moment from 'react-moment';
import { NoteConsumer } from "../../providers/NoteProvider";
import NoteForm from './NoteForm';
import { useParams } from 'react-router-dom';

const NoteShow = ({ id, subject, body, ndate, ntime, deleteNote }) => {
  const [showing, setShow] = useState(false)
  const [editing, setEdit] = useState(false)
  const { catId } = useParams()

  return(
    <>
      <ListGroup.Item>
        <Row>
          <Col>{subject}</Col>
          <Col>{body}</Col>
          <Col>
            <Button variant="primary" onClick={() => setShow(true)}>
              eye
            </Button>
          </Col>
        </Row>
        <Modal show={showing} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <h1 className="text-center">Note Show</h1>
            <p>Date: <Moment format='MM-DD-YY'>{ndate}</Moment></p>
            <p>Time: <Moment format='hh:mm A'>{ntime}</Moment></p>
            <p>Subject: {subject}</p>
            <p>Body: {body}</p>
            <Button variant="primary" onClick={() => setEdit(true)}>
              Edit
            </Button>

            <Modal show={editing} onHide={() => setEdit(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Update Note</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <NoteForm 
                  id={id}
                  subject={subject}
                  body={body}
                  ndate={ndate}
                  ntime={ntime}
                  setEdit={setEdit}
                />
              </Modal.Body>
            </Modal>
            <Button
              onClick={() => deleteNote(catId, id)}
            >
              Delete
            </Button>
          </Modal.Body>
        </Modal>
      </ListGroup.Item>
    </>
  )
}

const ConnectedNoteShow = (props) => (
  <NoteConsumer>
    { value => <NoteShow {...value} {...props} />}
  </NoteConsumer>
)

export default ConnectedNoteShow;