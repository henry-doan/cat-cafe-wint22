import { AuthConsumer } from "../../providers/AuthProvider";
import { Link } from 'react-router-dom';
import { Button, Container, Navbar } from 'react-bootstrap';
import { MainBtn, MainBtn2 } from "../styles/mainStyles";

const MainNavbar = ({ user, handleLogout }) => {
  
  const rightNavItems = () => {
    // links to show up when user is logged in
    if (user) {
      return (
        <>
          <Link to='/cats'>
            <Button variant="link">Cats</Button>
          </Link>
          <MainBtn2 
            onClick={() => handleLogout()} 
          >
            Logout
          </MainBtn2>
        </>
      )
    } else {
      // links to show up when NOT logged in
      return (
        <>
          <Link to='/login'>
            <MainBtn2>Login</MainBtn2>
          </Link>
          <Link to='/register'>
            <MainBtn>SignUp</MainBtn>
          </Link>
        </>
      )
    }
  }
  
  // have links regardless of login or not
  return (
    <>
      <Navbar>
        <Container>
          <Link to='/'>
            <Navbar.Brand>CatCafe</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            { rightNavItems() }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedNavbar;