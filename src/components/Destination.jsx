import { useContext } from "react";
import { CardContext } from "../context/context";

export default function Destinations() {
  const { destinations } = useContext(CardContext);
  return (
    <section className="destinations">
      <div className="navigation">
        <button className="nav-button">‹</button>
        <button className="right-nav">›</button>
      </div>
      <div className="destination-card">
      {destinations.map((destination, index) => (
        <div key={index} className="destination">
          <img src={destination.image} alt={destination.name} />
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
        </div>
      ))}
      </div>
     
    </section>
  );
}