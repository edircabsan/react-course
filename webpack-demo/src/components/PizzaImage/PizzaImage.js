import React from 'react';
import classes from './PizzaImage.css';
import PizzaImg from '../../assets/pizza.jpg';

const pizzaImage = (props) => {
    return (
        <div className={classes.PizzaImage}>
            <img src={PizzaImg} className={classes.PizzaImage} />
        </div>
    );
};

export default pizzaImage;