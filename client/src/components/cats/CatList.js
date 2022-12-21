import { Container, Row, Col } from 'react-bootstrap';
import CatShow from './CatShow';

const CatList = ({ cats }) => (
  <Container>
    <Row md='4'>
      { cats.map( c => 
        <Col key={c.id}>
          <CatShow 
            {...c}
          />
        </Col>
      )}
    </Row>
  </Container>
)

export default CatList;