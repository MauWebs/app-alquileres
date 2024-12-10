import img from "./Img.jpg";
import "./rentalCards.scss";

const CARDS_OF_RENTALS = [ 
  {
    id: 1,
    img: img,
    price: 10.000,
    stars: 4.0,
    name: "Necochea - Buenos Aires",
    location: "205 Liniers, Necochea",
    subdescription:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa.",
  },
  {
    id: 2,
    img: img,
    price: 25.000,
    stars: 3.5,
    name: "Necochea - Buenos Aires",
    location: "205 Liniers, Necochea",
    subdescription:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa.",
  },
  {
    id: 3,
    img: img,
    price: 15.000,
    stars: 5.0,
    name: "Necochea - Buenos Aires",
    location: "205 Liniers, Necochea",
    subdescription:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa.",
  },
];

function RentalsCards() {
  const renderStars = (stars: number) => {
    const fullStars = Math.floor(stars); 
    const hasHalfStar = stars % 1 !== 0; 
    const totalStars = 5; 

    return Array.from({ length: totalStars }, (_, index) => {
      if (index < fullStars) {
        return <span key={index}>⭐</span>; 
      } else if (index === fullStars && hasHalfStar) {
        return <span key={index}>☆</span>; 
      } else {
        return <span key={index}>☆</span>;
      }
    });
  };

  return (
    <section className="rentals-cards">
      <ul className="cards-container">
        {CARDS_OF_RENTALS.map((item) => (
          <li key={item.id} className="card">
            <img
              src={item.img || "https://via.placeholder.com/150"}
              alt={item.name}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-location">{item.location}</p>
              <p className="card-price">Precio: ${item.price.toFixed(3)} </p>
              <p className="card-stars">{renderStars(item.stars)}</p>
              <div className="divider"></div>
              <p className="card-description">{item.subdescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RentalsCards;