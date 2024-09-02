import React from "react";
import "./Subscribe.css";
import { assets } from "../../assets/asset";

function Subscribe() {
  return (
    <>
      <section class="subscribe section">
        <div class="subscribe__bg">
          <div class="subscribe__container container">
            <h2 class="section__title subscribe__title">
              Subscribe Our <br /> Newsletter
            </h2>
            <p class="subscribe__description">
              Subscribe to our newsletter and get a special 30% discount.
            </p>

            <form action="" class="subscribe__form">
              <input
                type="text"
                placeholder="Enter email"
                class="subscribe__input"
              />

              <button class="button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      {/* sponsers */}
      <section class="sponsor section">
        <div class="sponsor__container container grid">
          <div class="sponsor__content">
            <img src={assets.sponsors1} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={assets.sponsors2} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={assets.sponsors3} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={assets.sponsors4} alt="" class="sponsor__img" />
          </div>
          <div class="sponsor__content">
            <img src={assets.sponsors5} alt="" class="sponsor__img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
