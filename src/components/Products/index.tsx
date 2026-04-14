import {
     CardContainer,
     CardImg,
     CardItem,
     CardPrice,
     CardButton,
     ProductsWrapper,
} from "./styled";
import { useAppDispatch, useAppSelector } from "../../store";
import { addToCart } from "../../store/slice/cartSlice";

export function ProductItem() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.product.product);

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <CardContainer key={product.id}>
          <CardItem>
            <CardImg src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <CardPrice>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </CardPrice>
            <CardButton onClick={() => dispatch(addToCart(product))} >Adicionar ao carrinho</CardButton>
          </CardItem>
        </CardContainer>
      ))}
    </ProductsWrapper>
  );
}
