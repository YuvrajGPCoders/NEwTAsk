import React, { useState } from "react";
import {Link} from "react-router-dom"
import {
  CNavbar,
  CCollapse,
  CContainer,
  CNavbarToggler,
  CNavbarNav,
  CNavItem,
  CForm,
  CNavLink,
  CDropdown,
  CFormInput,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CButton,
} from "@coreui/react";
import HomePage from "./HomePage";
const AdminPanel = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
               <Link to="/homepage"> <CNavLink active>
                  Home 
                </CNavLink></Link>
              </CNavItem>
              <CNavItem> 
           <Link to="/shorting"><CNavLink href="#"> Form </CNavLink></Link>  
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">
                  Dropdown button
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
               <Link to="/">   <CDropdownItem href="#"> Logout </CDropdownItem></Link>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <div>   
<HomePage/>

      </div>
    </div>
  );
};

export default AdminPanel;
