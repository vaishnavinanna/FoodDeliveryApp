import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import styles from './Categories.module.css';
import { useDispatch } from 'react-redux';
import { CallThali } from '../components/Redux/Slices/AddCartSlice'

function Categories() {

  const dispatch=useDispatch()

  return (
    <div className={`container mt-5 ${styles.Container}`}>
      <p className={`display-3 text-center mb-5 ${styles.title}`}>
        WHICH CATEGORY YOU LIKE THE MOST
      </p>
      <div className="row g-4 justify-content-center">

        <div className="col-12 col-sm-6 col-md-4">
          <Card className={`h-100 shadow-sm ${styles.card}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://img.freepik.com/premium-photo/traditional-maharashtrian-thali-meal-with-puran-poli-amti_1170794-337279.jpg"
                alt="Maharashtrian Thali"
              />
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
                  MAHARASHTRIAN Thali
                </Typography>
                <Typography variant="body2" className={styles.cardDescription}>
                  A wholesome culinary experience: A Maharashtrian thali is a balanced and satisfying meal that offers a variety of dishes, flavors, spices, and textures. Soul satisfying and comfort food: A Maharashtrian thali is a perfect choice for a Sunday afternoon.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardActions}>
              <Button size="small" color="primary" href="#menu" className={styles.exploreButton} onClick={()=>dispatch(CallThali({type: 'maharashtrian'}))}>
                EXPLORE
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <Card className={`h-100 shadow-sm ${styles.card}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://sukhis.com/app/uploads/2022/09/image3-5-900x601-1.jpg"
                alt="South-Indian Thali"
              />
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
                  SOUTH-INDIAN Thali
                </Typography>
                <Typography variant="body2" className={styles.cardDescription}>
                  Serving food on Banana leaves is followed as a custom in South India which became a beautiful trend in the world nowadays. Eating on banana leaves is chemical-free as well as flavorful, environmentally friendly, hygienic, and practical. In every aspect, eating off of banana leaves is healthful.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardActions}>
              <Button size="small" color="primary" href="#menu" className={styles.exploreButton} onClick={()=>dispatch(CallThali({type: 'south'}))}>
                EXPLORE
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <Card className={`h-100 shadow-sm ${styles.card}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://img.freepik.com/premium-photo/traditional-punjabi-thali-with-range-spicy-ric_1177965-118300.jpg"
                alt="Punjabi Thali"
              />
              <CardContent className={styles.cardContent}>
                <Typography gutterBottom variant="h5" component="div" className={styles.cardTitle}>
                  PUNJABI Thali
                </Typography>
                <Typography variant="body2" className={styles.cardDescription}>
                  This Punjabi food is famous not only in Punjab but all around the world. We can find Sarso ka Saag, Makki ki Roti, and varieties like Dal Makhani etc. Thali consists of rice or wheat, millets, etc.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardActions}>
              <Button size="small" color="primary" href="#menu" className={styles.exploreButton} onClick={()=>dispatch(CallThali({type: 'punjabi'}))}>
                EXPLORE
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Categories;
