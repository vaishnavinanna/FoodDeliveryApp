import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styles from './BgContainer.module.css';
import bg from '../assets/img.webp';

function BgContainer() {
  return (
    <div className="pt-5">
      <Container fluid className={`p-2 mt-4 ${styles.Container}`}>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <div className={`mx-5 ${styles.getMargin}`}>
              <p className={styles.Heading}>
                Discover the best food <br />
                & drinks in <span className={styles.highlight}>Pune</span>
              </p>
              <Button
                href="#menu"
               className={`mt-4 ${styles.button}`}
                >
              <h4>Explore Menu</h4>
              </Button>
            </div>
          </Col>

          <Col xs={12} md={6} className="text-center">
            <img
              src={bg}
              alt="background"
              className={`img-fluid mt-5 ${styles.Image}`}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BgContainer;
