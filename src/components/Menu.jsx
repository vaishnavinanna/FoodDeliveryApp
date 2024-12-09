import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardContainer from './CardContainer';
// import menuItems from '../Data/menuData';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import './Menu.module.css';

function Menu() {
  const menuItems = useSelector((state) => state.cart.items);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);
  const paginatedItems = menuItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="menu">
      <h1 className="mt-5 display-4 bold text-center">
        Popular localities in and around Pune
      </h1>
      <Container fluid className="my-5 px-4">
      <Row>
          <Col className="d-flex justify-content-center mt-4">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary" 
              size="large"
            />
          </Col>
        </Row>
        <Row className="g-10">
          {paginatedItems.map((item) => (
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={3}
              key={item.id}
              className="d-flex justify-content-center"
            >
              <CardContainer
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                item={item}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Menu;

