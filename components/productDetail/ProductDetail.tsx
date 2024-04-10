import React, { Component, ComponentState } from "react";
import styles from "./Product.module.scss";
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSnapchat,
} from "react-icons/bs";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

export default class ReactState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      stars: [false, false, false, false, false],
      selectedImage:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/364/712/products/021216.jpg?v=1635824915017",
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleImageSelect = (imageUrl) => {
    this.setState({ selectedImage: imageUrl });
  };

  handleStarClick = (index) => {
    const updatedStars = this.state.stars.map((star, i) =>
      i <= index ? true : false
    );
    this.setState({ stars: updatedStars });
  };

  render() {
    const { selectedImage } = this.state;

    return (
      <div className={styles.product}>
        <div className="container">
          <div className="row">
            <div className="p-5">
              <div className="col-12">
                <div className="d-block d-lg-inline-flex">
                  <div className="">
                    <div className={styles.product__imgLeft}>
                      {selectedImage && (
                        <img
                          style={{ width: "450px", height: "400px" }}
                          src={selectedImage}
                          alt=""
                          className={styles.selectedImage}
                        />
                      )}
                    </div>
                    <div className={styles.product__right}>
                      <div className={styles.product__imgRight}>
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src="https://bizweb.dktcdn.net/thumb/1024x1024/100/364/712/products/021216.jpg?v=1635824915017"
                          alt=""
                          onClick={() =>
                            this.handleImageSelect(
                              "https://bizweb.dktcdn.net/thumb/1024x1024/100/364/712/products/021216.jpg?v=1635824915017"
                            )
                          }
                        />
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfS--H9Nm66xRY8ZM3BKUyBkSNfNA53CRgb4HreMfPww&s"
                          alt=""
                          onClick={() =>
                            this.handleImageSelect(
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfS--H9Nm66xRY8ZM3BKUyBkSNfNA53CRgb4HreMfPww&s"
                            )
                          }
                        />
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src="https://www.anwearhub.com/wp-content/uploads/2023/11/BG35YR_16_1-2.jpg"
                          alt=""
                          onClick={() =>
                            this.handleImageSelect(
                              "https://www.anwearhub.com/wp-content/uploads/2023/11/BG35YR_16_1-2.jpg"
                            )
                          }
                        />
                        <img
                          style={{ width: "100px", height: "100px" }}
                          src="https://salt.tikicdn.com/cache/550x550/ts/product/dc/46/42/3a2e3d56e13eb3e5a273e938c22e95be.jpg"
                          alt=""
                          onClick={() =>
                            this.handleImageSelect(
                              "https://salt.tikicdn.com/cache/550x550/ts/product/dc/46/42/3a2e3d56e13eb3e5a273e938c22e95be.jpg"
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* right  */}
                  <div className="">
                    <h3>Zebra Stripe Curved Hem Shirt </h3>
                    <p>sw2209299427621166</p>
                    <div className="star">
                      {this.state.stars.map((selected, index) => (
                        <i
                          key={index}
                          className={`fa-regular fa-star${
                            selected ? " gold" : ""
                          }`}
                          style={{ color: "gold" }}
                          onClick={() => this.handleStarClick(index)}
                        ></i>
                      ))}
                    </div>

                    {/* price  */}
                    <div className={styles.product__price}>
                      <h2>
                        From 72.00 to 88.00$ <span>(-5%)</span>
                      </h2>
                      <h5 style={{ color: "blue" }}>Free Shipping</h5>
                      <h5>2782 pieces available</h5>
                    </div>

                    {/* size  */}
                    <div className={styles.product__size}>
                      <h5>Select Size: </h5>
                      <div className="d-flex">
                        <div
                          className={styles.product__sizeElement}
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "1px solid #333",
                            padding: "7px",
                            textAlign: "center",
                            marginRight: "5px",
                          }}
                        >
                          S
                        </div>

                        <div
                          className={styles.product__sizeElement}
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "1px solid #333",
                            padding: "7px",
                            textAlign: "center",
                            marginRight: "5px",
                          }}
                        >
                          L
                        </div>
                        <div
                          className={styles.product__sizeElement}
                          style={{
                            width: "40px",
                            height: "40px",
                            border: "1px solid #333",
                            padding: "7px",
                            textAlign: "center",
                          }}
                        >
                          XL
                        </div>
                      </div>
                    </div>

                    <div className={styles.product__count}>
                      <h5>
                        {" "}
                        <button
                          className={styles.product__crementCount}
                          onClick={this.decrementCount}
                        >
                          -
                        </button>
                        {this.state.count}
                        <button
                          className={styles.product__crementCount}
                          onClick={this.incrementCount}
                        >
                          +
                        </button>
                      </h5>
                    </div>

                    {/* shopping card  */}
                    <div className="shopping_cart d-block d-md-inline-flex ">
                      <div
                        className={styles.product__shopCardLeft}
                        style={{ width: "500px" }}
                      >
                        <button className="mb-2 p-2 w-100">
                          <i className="fa-solid fa-bag-shopping"> </i>ADD TO
                          CART
                        </button>
                      </div>
                      <div className="shopping_cart__right">
                        <button
                          className="p-2 w-100 ml-md-3 ml-0"
                          style={{ backgroundColor: "#333", color: "#fff" }}
                        >
                          <i className="fa-regular fa-heart"> </i>WISHLIST
                        </button>
                      </div>
                    </div>

                    {/* icon  */}
                    <div className="styles.product__socials">
                      <section>
                        <ul
                          className="d-flex mt-3 mb-3"
                          style={{ color: "#fff" }}
                        >
                          <li
                            style={{
                              width: "40px",
                              height: "40px",
                              textAlign: "center",
                              marginRight: "5px",
                              padding: "7px",
                              borderRadius: "50%",
                              backgroundColor: "blue",
                            }}
                          >
                            <a href="/" target="_blank">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li
                            style={{
                              width: "40px",
                              height: "40px",
                              textAlign: "center",
                              marginRight: "5px",
                              padding: "7px",
                              borderRadius: "50%",
                              backgroundColor: "#3f48bedc",
                            }}
                          >
                            <a href="/" target="_blank">
                              <BsInstagram />
                            </a>
                          </li>
                          <li
                            style={{
                              width: "40px",
                              height: "40px",
                              textAlign: "center",
                              marginRight: "5px",
                              padding: "7px",
                              borderRadius: "50%",
                              backgroundColor: "#2f82ff",
                            }}
                          >
                            <a href="/" target="_blank">
                              <BsTwitter />
                            </a>
                          </li>
                          <li
                            style={{
                              width: "40px",
                              height: "40px",
                              textAlign: "center",
                              marginRight: "5px",
                              padding: "7px",
                              borderRadius: "50%",
                              backgroundColor: "red",
                            }}
                          >
                            <a href="/" target="_blank">
                              <BsYoutube />
                            </a>
                          </li>
                          <li
                            style={{
                              width: "40px",
                              height: "40px",
                              textAlign: "center",
                              marginRight: "5px",
                              padding: "7px",
                              borderRadius: "50%",
                              backgroundColor: "#ed4337",
                            }}
                          >
                            <a href="/" target="_blank">
                              <BsPinterest />
                            </a>
                          </li>
                          <li
                            style={{
                              width: "40px",
                              height: "40px",
                              textAlign: "center",
                              marginRight: "5px",
                              padding: "7px",
                              borderRadius: "50%",
                              backgroundColor: "green",
                            }}
                          >
                            <a href="/" target="_blank">
                              <BsSnapchat />
                            </a>
                          </li>
                          <li
                            style={{
                              width: "40px",
                              height: "40px",
                              textAlign: "center",
                              marginRight: "5px",
                              padding: "7px",
                              borderRadius: "50%",
                              backgroundColor: "gray",
                            }}
                          >
                            <a href="/" target="_blank">
                              <FaTiktok />
                            </a>
                          </li>
                        </ul>
                      </section>
                    </div>

                    <div>
                      <i className="fa-solid fa-circle-chevron-right"></i>Detail
                    </div>

                    <div>
                      <i className="fa-solid fa-circle-chevron-right"></i>Size &
                      Fit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
