import React, { FC } from 'react';
import './index.css'
interface Props {

}

const BookShop: FC<Props> = () => {
  return (
    <div>
      <div className="bookShop_container">
        <h2>Todays Quote</h2>
        <div className="box">
          <h3>Quotes</h3>
          <p>- author</p>
        </div>

        <h3>Book Shop</h3>
        <div> No of Books avaiable: 100</div>
        <div>
          <button>Buy Books</button>
        </div>

        <div>
          <button>Buy All Books</button>
        </div>

        <div>
          <input type="text"></input>
        </div>

        <div>
          <button>Buy Book</button>
        </div>

      </div>

      <div className='bookShop_lists'>
        <div>
          <h2>List of items</h2>
          <div> all data</div>
        </div>
      
      </div>
    </div>

  );
};

export default BookShop;