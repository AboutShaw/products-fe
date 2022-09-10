export default function ItemCard({ name, description, priceValue, weight, department, type }) {
    const convertToPounds = (priceValue).toFixed(2)
    return (
      <article>
        <h3>{name}</h3>
        <p>Price: £{convertToPounds}</p>
        <p>{description}</p>
        <p>Weight: {weight}g</p>
        <p>Category: {department}: {type}</p>
      </article>
    );
  }