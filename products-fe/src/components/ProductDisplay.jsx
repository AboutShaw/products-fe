import { useState, useEffect } from "react";
import ProductTiles from "./ProductTiles"
import { getProducts} from "../api";


  export default function ProductDisplay({filter}) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(true);
      getProducts(filter).then((products) => {
        setProducts(products);        
        setIsLoading(false);
      });
    }, [filter]);

    if (isLoading) return <p>loading..</p>;
    return (
      <section className="productTiles">
        {products.products.map(({ name, description, priceValue, weight, department, type }) => {
          return (
            <ProductTiles
            name = {name}
            description = {description}
            priceValue = {priceValue}
            weight = {weight}
            department = {department}
            type = {type}
            />
          );
        })}
      </section>
    );
  }
 