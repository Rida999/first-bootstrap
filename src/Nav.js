import {Button,Form,FormControl,Nav,NavDropdown,Navbar} from "react-bootstrap";
import "./App.css";

const Navigation =() => {
    return ( 
        <div id="container">
            <Navbar expand="lg" style={{backgroundColor:"#0082e6",display:"flex",flexShrink:"5"}}>
  <div id="logo" style={{padding:"0px 50px",fontWeight:"bold"}} ><Navbar.Brand href="#" style={{color:"white"}}>Navbar scroll</Navbar.Brand></div>
  <div id="links">
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px',marginLeft:"550px",display:"flex",minWidth:"200px",flexShrink:"10"}}
      navbarScroll
    >
      <Nav.Link href="#action1" style={{color:"white"}}>Home</Nav.Link>
      <Nav.Link href="#action2" style={{color:"white"}}>Link</Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown" style={{fontColor:"white"}}>
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success" style={{marginLeft:"8px",width:"140px"}}>Search</Button>
    </Form>
  </Navbar.Collapse>
  </div>
</Navbar>
        </div>
     );
}
 
export default Navigation;