import React from 'react'
import classes from "./catagory.module.css"
const CatagoryCard = ({title, img}) => {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
          <h2>{title}</h2>
        </span>
        <img src={img} alt={title} />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CatagoryCard;
