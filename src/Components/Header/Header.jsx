import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
            </div>
            <p>Delivery to</p>
            <span>Ethiopia</span>
            <div></div>
            {/* search */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" />
              <BsSearch size={38} />
            </div>
            <div>
              <div className={classes.order__container}>
                <Link to="" className={classes.language}>
                  <img
                    src="https://img.freepik.com/premium-vector/american-flag-official-size-color-standards-vector-illustration_1143296-4775.jpg?semt=ais_hybrid"
                    alt=""
                  />

                  <section name="" id="">
                    <option value="">EN</option>
                  </section>
                </Link>
                <Link to="/auth">
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                </Link>
                <Link to="/Orders">
                  <p>returns</p>
                  <span>& Orders</span>
                </Link>

                <Link to="/cart" className={classes.cart}>
                  <BiCart size={35} />
                  <span>{totalItem}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
