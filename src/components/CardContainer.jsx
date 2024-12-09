import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
// import { useSelector } from 'react-redux';
import { ADD_TO_CART, CHANGE_AMOUNT } from './Redux/Slices/AddCartSlice';
import { useDispatch } from 'react-redux';
import { TextField, Snackbar, Alert } from '@mui/material';
import styles from './CardContainer.module.css';

function CardContainer(props) {
  const dispatch = useDispatch();
  // const newPrice = useSelector((state) => state.cart.newPrice);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState(false);

  const HandleAddToCart = (item) => {
    if (quantity <= 0) {
      return alert("We can't add 0 quantity");
    }
    const obj = {
      ...item,
      quantity: quantity,
    };
    setNotification(true);
    dispatch(ADD_TO_CART(obj));
  };

  const HandleChangeAmount = (event) => {
    setQuantity(parseInt(event.target.value));
    if (event.target.value <= 0) {
      return alert("We can't add 0 quantity");
    }
    const obj = {
      ...props.item,
      quantity: quantity,
    };
    dispatch(CHANGE_AMOUNT(obj));
  };

  const handleNotification = () => {
    setNotification(false);
  };

  return (
    <div>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.image}
            alt={props.title}
            className={styles.cardMedia}
          />
          <CardContent>
            <Typography variant="h6" className={styles.cardTitle}>
              {props.title}
            </Typography>
          </CardContent>
          <CardActions className={`mx-3 ${styles.cardActions}`}>
            <Typography variant="h5" className={styles.cardPrice}>
              ₹{props.price}
            </Typography>
            <div className={styles.quantitySection}>
              <TextField
                variant="outlined"
                margin="normal"
                name="quantity"
                type="number"
                size='small'
                onChange={HandleChangeAmount}
                defaultValue={1}
                className={styles.quantityInput}
              />
              <Button
                variant="contained"
                size="medium"
                className={`mt-2 ${styles.addButton}`}
                disabled={quantity <= 0}
                onClick={() => HandleAddToCart(props.item)}
              >
                <h6>Add to Cart</h6>
              </Button>
            </div>
          </CardActions>
        </CardActionArea>
      </Card>

      <Snackbar
        open={notification}
        autoHideDuration={2000}
        onClose={handleNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleNotification} severity="success" className={styles.snackbar}>
          Item added to the cart successfully! 🎉
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CardContainer;