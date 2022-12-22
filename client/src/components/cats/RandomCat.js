import { CatConsumer } from "../../providers/CatProvider";
import { useEffect, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import Moment from "react-moment";

const RandomCat = ({ setMsgs }) => {
  const [cat, setCat] = useState({ name: '', breed: '', registry: '', dob: '', avatar: '' })

  const getRandoCato = () => {
    axios.get('/api/randocato')
      .then(res => setCat(res.data))
      .catch( err => {
        console.log(err)
        setMsgs({ msg: err.response.data.errors })
      })
  }

  useEffect( () => {
    getRandoCato()
  }, [])

  const { name, breed, registry, dob, avatar } = cat

  return(
    <div className="d-flex flex-wrap justify-content-center">
      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={avatar} height='140px' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Breed:
              { breed ? breed : "Unknown Breed" }
            </p>
            <p>Registry: { registry ? registry : "Unknown Registry" }</p>
            <p>D.O.B: { dob ? <Moment format='MM-DD-YY'>{dob}</Moment> : "Unknown Date of Birth" }</p>
          </Card.Text>
          <Button variant="primary" onClick={getRandoCato}>
            arrow
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

const ConnectedRandomCat = (props) => (
  <CatConsumer>
    { value => <RandomCat {...value} {...props} />}
  </CatConsumer>
)

export default ConnectedRandomCat;