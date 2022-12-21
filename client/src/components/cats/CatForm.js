import { useState, useEffect } from 'react';
import { CatConsumer } from '../../providers/CatProvider';
import { Form, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const CatForm = ({ setAdd, addCat, updateCat }) => {
  const [cat, setCat] = useState({ name: '', registry: '', breed: '', avatar: '', dob: '' })
  const location = useLocation()
  const { id } = useParams()

  useEffect( () => {
    if (id) {
      const { name, registry, avatar, breed, dob } = location.state
      setCat({ name, registry, avatar, breed, dob })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateCat(id, cat)
    } else {
      addCat(cat)
      setAdd(false)
    }
    setCat({ name: '', registry: '', breed: '', avatar: '', dob: '' })
  }

  return(
    <>
      { id ? <h1>Update Cat</h1> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            name='name'
            value={cat.name}
            onChange={(e) => setCat({ ...cat, name: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Avatar</Form.Label>
          <Form.Control 
            name='avatar'
            value={cat.avatar}
            onChange={(e) => setCat({ ...cat, avatar: e.target.value})}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Breed</Form.Label>
          <Form.Control 
            name='breed'
            value={cat.breed}
            onChange={(e) => setCat({ ...cat, breed: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Registry</Form.Label>
          <Form.Control 
            name='registry'
            value={cat.registry}
            onChange={(e) => setCat({ ...cat, registry: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control 
            name='dob'
            value={cat.dob}
            onChange={(e) => setCat({ ...cat, dob: e.target.value})}
            type='date'
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedCatForm = (props) => (
  <CatConsumer>
    { value => <CatForm {...props} {...value} />}
  </CatConsumer>
)

export default ConnectedCatForm;