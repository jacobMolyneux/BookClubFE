import { Nav } from 'react-bootstrap';
import {Homepage} from './pages/homepage.js'


function App() {
  return (
    <div className="App">
      <Nav className = 'border-bottom d-flex justify-content-between'>
        <div className ='d-flex'>
        <Nav.Item className ='m-3'>Home</Nav.Item>
        <Nav.Item className ='m-3'>Trending</Nav.Item>
        </div>
        <h1>Book Club</h1>
        <div className ='d-flex'>
          <Nav.Item className ='m-3'>Log In</Nav.Item>
          <Nav.Item className ='m-3'>Create Account</Nav.Item>
        </div>
      </Nav>
     <Homepage/>
    </div>
  );
}

export default App;
