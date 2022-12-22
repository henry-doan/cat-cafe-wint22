import { ListGroup } from "react-bootstrap";
import NoteShow from './NoteShow';

const NoteList = ({ notes }) => (
  <>
    <ListGroup variant="flush">
      { notes.map( n => 
        <NoteShow
          key={n.id}
          {...n}
        />
      )}
    </ListGroup>
  </>
)

export default NoteList;