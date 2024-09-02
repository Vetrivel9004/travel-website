import React from "react";
import { assets } from "../../assets/asset";
import "./Place.css";

function Place() {
  return (
    <div className="place-container">
      <h1>Choose Your Place</h1>
      {/* <div className='main'>
      <div className='place-content'>
        <span>
            <i className='rating_icon'></i>
            <span className='rating_number'>4,8</span>
        </span>
        <div className='place_data'>
          <h3 className='place_title'> Bali</h3>
          <span className='sub_title'>Indonesia</span>
          <span className='price'>$2499</span>
        </div>
      </div>
       <button className='button-start'>
        <i className='icon'>
        </i>
       </button>
      </div> */}

      <div className="destinations">
        <div className="card1">
          <h2 className="trplace">Bali</h2>
          <p className="location">Indonesia</p>
          <p className="price">$2499</p>
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
              
               >
              <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
            </svg>
          </button>
        </div>

        <div className="card2">
          <h2 className="trplace">Bora Bora</h2>
          <p className="location">Polinesia</p>
          <p className="price">$1599</p>
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666">
              <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
            </svg>
          </button>
        </div>

        <div className="card3">
          <h2 className="trplace">Hawaii</h2>
          <p className="location">EE.UU</p>
          <p className="price">$3499</p>
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666">
              <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
            </svg>
          </button>
        </div>

        <div className="card4">
          <h2 className="trplace">Whitehaven</h2>
          <p className="location">Australia</p>
          <p className="price">$2499</p>
          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666">
              <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
            </svg>
          </button>
        </div>

        <div className="card5">
          <h2 className="trplace">Hvar</h2>
          <p className="location">Croacia</p>
          <p className="price">$1999</p>
          <button className="button">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#666666">
                <path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z" />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Place;
