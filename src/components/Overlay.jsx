import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Table } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { INCREMENT_VALUE, DECREMENT_VALUE, ClearCart,DeleteItem } from './Redux/Slices/AddCartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './Overlay.module.css'; 

function Overlay({ open, close }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cartItems);
  // console.log("The data from overlay is ",data)

  const [orderPlaced, setOrderPlaced] = useState(false);

  let total = 0;
  let subtotal = 0;

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  const closeOrder = () => {
    dispatch(ClearCart());
    setOrderPlaced(false);
  };

  return (
    <div>
      <Modal
        className={styles.modalDialog}
        isOpen={open}
        centered
      >
        <ModalHeader toggle={close}>
          <Typography variant="h5" className={styles.modalHeader}>
            Your Cart
          </Typography>
        </ModalHeader>
        <ModalBody className={styles.modalBody}>
          <Box sx={{ padding: '20px' }}>
            {data.length === 0 ? (
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Your cart is empty!
              </Typography>
            ) : (
              <>
                <Table className={`table-responsive ${styles.table}`}>
                  <thead className={styles.tableHeader}>
                    <tr>
                      <th>Dish Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Actions</th>
                      <th>Delete Item</th>
                    </tr>
                  </thead>
                  <tbody className={styles.tableBody}>
                    {data.map((item) => {
                      subtotal = item.quantity * item.price;
                      total += subtotal;
                      return (
                        <tr key={item.title}>
                          <td>{item.title}</td>
                          <td>₹{item.price}</td>
                          <td>{item.quantity}</td>
                          <td>₹{subtotal}</td>
                          <td className={styles.actionsButton}>
                            <Button
                            className='btn'
                              // size="sm"
                              color="success"
                              onClick={() =>
                                dispatch(INCREMENT_VALUE({ id: item.id }))
                              }
                            >
                              +
                            </Button>
                            &nbsp;
                            <Typography
                              variant="body1"
                              component="span"
                              className={styles.quantityText}
                            >
                              {item.quantity}
                            </Typography>
                            &nbsp;
                            <Button
                            className='btn'
                              // size="sm"
                              color="danger"
                              onClick={() =>
                                dispatch(DECREMENT_VALUE({ id: item.id }))
                              }
                            >
                              -
                            </Button>
                          </td>
                          <td>
                          <DeleteIcon className={styles.deleteIcon}  onClick={() =>
                                dispatch(DeleteItem({ id: item.id }))
                              } />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <Box className={styles.totalAmountBox}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Total Amount: ₹{total}
                  </Typography>
                  <Button
                    color="success"
                    onClick={handleOrder}
                    className={styles.orderButton}
                  >
                    Order Now
                  </Button>
                </Box>
              </>
            )}
          </Box>
          <Button
            color="danger"
            onClick={close}
            className={styles.closeButton}
          >
            Close
          </Button>
        </ModalBody>
      </Modal>

      {/* Order Placed */}
      <Modal
        isOpen={orderPlaced}
        centered
        className={styles.orderModal}
      >
        <ModalHeader className={styles.orderModalHeader}>
          <Typography variant="h6" className={styles.orderModalHeader}>
            Order Placed
          </Typography>
        </ModalHeader>
        <ModalBody className={styles.orderModalBody}>
          <Typography variant="body1">
            Thank you for your order! 🎉
          </Typography>
          <Button
            color="success"
            onClick={closeOrder}
            className={styles.closeButton}
          >
            Okay
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Overlay