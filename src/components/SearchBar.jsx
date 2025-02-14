export default function SearchBar() {
  return (
    <div className="search-bar">
      <div className="input">
        <input type="search" placeholder="Search activities or Destinations" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="booking-total">
        <div className="booking">
          <span className="title">Guestst</span>
          <p className="detail">2 Adult <i className="fa-solid fa-caret-down"></i></p>
        </div>
        <div className="booking">
          <span className="title">Date</span>
          <p className="detail">12 - 13 April 2021 <i className="fa-solid fa-caret-down"></i></p>
        </div>
        <div className="booking">
          <span className="title">Package</span>
          <p className="detail">All <i className="fa-solid fa-caret-down"></i></p>
        </div>
      </div>
      <button className="sign-in">Book Now</button>
    </div>
  );
}