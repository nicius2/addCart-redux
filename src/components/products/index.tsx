// ProductItem.jsx
import { useEffect, useState } from "react";
import { CardContainer, CardImg, CardItem, CardPrice, CardButton, ProductsWrapper } from "./styled";
import { api } from "../../lib/api";

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
}

export function ProductItem() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${api}/product`);
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <CardContainer key={product.id}>
          <CardItem>
            <CardImg src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <CardPrice>
              {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </CardPrice>
            <CardButton>Adicionar ao carrinho</CardButton>
          </CardItem>
        </CardContainer>
      ))}
    </ProductsWrapper>
  );
}