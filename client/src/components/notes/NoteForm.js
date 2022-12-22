import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useParams } from 'react-router-dom';

const NoteForm = ({ setAdd, addNote, id, subject, body, ndate, ntime, updateNote, setEdit }) => {
  const [note, setNote] = useState({ subject: 'Health', body: '', ndate: new Date(), ntime: new Date()})
  const { catId } = useParams();
  
  useEffect( () => {
    if (id) {
      setNote({ subject, body, ndate, ntime })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(catId, id, note)
      setEdit(false)
    } else {
      addNote(catId, note)
      setAdd(false)
    }
    setNote({ subject: 'Health', body: '', ndate: new Date(), ntime: new Date()})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            name='ndate'
            value={note.ndate}
            onChange={(e) => setNote({ ...note, ndate: e.target.value })}
            type='date'
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control 
            name='ntime'
            value={note.ntime}
            onChange={(e) => setNote({ ...note, ntime: e.target.value })}
            type='time'
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Select
            name='subject'
            value={note.subject}
            onChange={(e) => setNote({ ...note, subject: e.target.value })}
            required
          >
            <option value="health">Health</option>
            <option value="diet">Diet</option>
            <option value="misc">Misc.</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control 
            name='body'
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            required
            as="textarea" 
            rows={3} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...value} {...props} />}
  </NoteConsumer>
)

export default ConnectedNoteForm;