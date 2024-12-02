import React, { useContext } from "react";
import classes from "./Header.module.css"
import { SlLocationPin } from "react-icons/sl";
import flag from "../../assets/flag.png"
import { FaSearch } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
const Header = () => {
 const [{ basket}, dispatch] = useContext(DataContext);

  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount +amount
  },0)
  return (
    <div className={classes.fixed}>
      <section className={classes.header__container}>
        <div className={classes.logo__container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
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
          <Link to="" className={classes.language}>
            <img src={flag} alt="flag" />
            <select name="">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to="/auth">
            <div>
              <p>sign In</p>
              <span>Accounts & Lists</span>
            </div>
          </Link>
          <Link to="/order">
            {" "}
            <div>
              <p>returns</p>
              <span>& Orders</span>
            </div>
          </Link>
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </section>
      <LowerHeader/>
    </div>
  );
};

export default Header;
