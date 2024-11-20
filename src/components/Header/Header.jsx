import React from "react";
import classes from "./Header.module.css"
import { SlLocationPin } from "react-icons/sl";
import flag from "../../assets/flag.png"
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search product" />
          <FaSearch size={25} />
        </div>
        <div className={classes.order__container}>
          <a href="" className={classes.language}>
            <img src={flag} alt="flag" />
            <select name="">
              <option value="">EN</option>
            </select>
          </a>

          <a href="">
            <div>
              <p>sign In</p>
              <span>Accounts & Lists</span>
            </div>
          </a>
          <a href="">
            {" "}
            <div>
              <p>returns</p>
              <span>& Orders</span>
            </div>
          </a>
          <a href="" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
};

export default Header;
