import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="footer section">
        <div class="footer__container container grid">
          <div class="footer__content grid">
            <div class="footer__data">
              <h3 class="footer__title">Travel</h3>
              <p class="footer__description">
                Travel you choose the <br /> destination, we offer you the
                <br />
                experience.
              </p>
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  class="footer__social">
                  <i class="ri-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  class="footer__social">
                  <i class="ri-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  class="footer__social">
                  <i class="ri-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  class="footer__social">
                  <i class="ri-youtube-"></i>
                </a>
              </div>
            </div>

            <div class="footer__data">
              <h3 class="footer__subtitle">About</h3>
              <ul>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    About Us
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Features
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    New & Blog
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer__data">
              <h3 class="footer__subtitle">Company</h3>
              <ul>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Team
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Plan y Pricing
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Become a member
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer__data">
              <h3 class="footer__subtitle">Support</h3>
              <ul>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    FAQs
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Support Center
                  </a>
                </li>
                <li class="footer__item">
                  <a href="" class="footer__link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer__rights">
            <p class="footer__copy">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#666666">
                <path d="M408-312h144q20.4 0 34.2-13.8Q600-339.6 600-360v-72h-72v48h-96v-192h96v48h72v-72q0-20.4-13.8-34.2Q572.4-648 552-648H408q-20.4 0-34.2 13.8Q360-620.4 360-600v240q0 20.4 13.8 34.2Q387.6-312 408-312Zm72.28 216Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              2024 Vetrivel. All rigths reserved.
            </p>
            <div class="footer__terms">
              <a href="#" class="footer__terms-link">
                Terms & Agreements
              </a>
              <a href="#" class="footer__terms-link">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-line scrollup__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#666666">
            <path d="M444-336h72v-150l57 57 51-51-144-144-144 144 51 51 57-57v150Zm36 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
          </svg>
        </i>
      </a>
    </>
  );
}

export default Footer;
