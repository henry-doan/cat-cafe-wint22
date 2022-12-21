import { CatConsumer } from "../../providers/CatProvider";
import CatList from './CatList';

const Cats = ({ cats }) => {
  return (
    <>
      <h1>My Cats</h1>
      <CatList 
        cats={cats}
      />
    </>
  )
}

const ConnectedCats = (props) => (
  <CatConsumer>
    { value => <Cats {...value} {...props} />}
  </CatConsumer>
)

export default ConnectedCats;