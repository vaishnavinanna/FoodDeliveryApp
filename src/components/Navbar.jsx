import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import Overlay from './Overlay';
import { useDispatch } from 'react-redux';
import { FilterData } from './Redux/Slices/AddCartSlice';
import styles from './Navbar.module.css'; 
import menuItems from '../Data/menuData'; 

function NavBar() {
  const [showCartOverlay, setShowCartOverlay] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const count = useSelector((state) => state.cart.itemCount);
  const dispatch = useDispatch();

  const openOverlay = () => {
    setShowCartOverlay(true);
  };

  const closeOverlay = () => {
    setShowCartOverlay(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen); 
  };

  const SearchItem = (event) => {
    setTimeout(() => {
          console.log(event.target.value)
    dispatch(FilterData({menuItems,search:event.target.value}))
    }, 2000);
}

  return (
    <div>
      <Navbar fixed="top" light expand="md" className={`px-5  ${styles.navbar}`}>
        <NavbarBrand href="/" className={styles.navbarBrand}>
          <h2>Food Restaurant</h2>
        </NavbarBrand>

        <div className={styles.searchContainer}>
          <Input
            className={styles.searchInput}
            placeholder="Search items..."
            onChange={SearchItem}
          />
        </div>

        <NavbarToggler onClick={toggleNavbar} className={styles.navbarToggler} />

        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className={`ms-auto ${styles.navbarNav}`}>
            <NavItem className="d-flex align-items-center">
              <IconButton
                size="large"
                aria-label="show cart"
                onClick={openOverlay}
                color="inherit"
                className={styles.cartIconButton}
              >
                <Badge badgeContent={count} color="error">
                <ShoppingCartIcon className={styles.cartIcon}/>
                </Badge>
              </IconButton>

              <p
                className={`mb-0 d-md-block d-sm-none cursor-pointer ${styles.cartText}`}
                onClick={openOverlay}
              >
                View Cart
              </p>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Overlay open={showCartOverlay} close={closeOverlay} />
    </div>
  );
}

export default NavBar;
