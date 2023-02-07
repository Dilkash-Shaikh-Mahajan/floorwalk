import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Audits from './Audits'
import Research from './Research'
import './style.css'
import { useState } from 'react';
const Navbar = () => {

  const [activeKey,setActiveKey] = useState("first")


  return (
    
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" activeKey={activeKey}>
    <Row>
      <Col sm={3}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item onMouseEnter={(item)=>setActiveKey("first")} onMouseLeave={(item)=>setActiveKey("first")}>
            <Nav.Link className='nav-link-tab' eventKey="first">Audits</Nav.Link>
    
          </Nav.Item>
          <Nav.Item onMouseEnter={(item)=>setActiveKey("second")} onMouseLeave={(item)=>setActiveKey("second")}>
            <Nav.Link className='nav-link-tab' eventKey="second">Research</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Audits />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Research />
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  );
};

export default Navbar;
