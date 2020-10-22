import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Task1</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/calculator">Calculator</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/bmi">BMI</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/stopwatch">Stopwatch</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/thermometer">Thermometer</Link>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}

