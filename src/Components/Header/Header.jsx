import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
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
              <BsSearch size={25} />
            </div>
            <div>
              <div className={classes.order__container}>
                <a href="" className={classes.language}>
                  <img
                    src="https://img.freepik.com/premium-vector/american-flag-official-size-color-standards-vector-illustration_1143296-4775.jpg?semt=ais_hybrid"
                    alt=""
                  />

                  <section name="" id="">
                    <option value="">EN</option>
                  </section>
                </a>
                <a href="">
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                </a>
                <a href="">
                  <p>returns</p>
                  <span>& orders</span>
                </a>
                <div>
                  <a href="" className={classes.cart}>
                    <BiCart size={35} />
                    <span>0</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
