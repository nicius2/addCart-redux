// components/CartModal/index.tsx
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleCart } from "../../store/slice/cartSlice";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  CartItem,
  CartItemInfo,
  CartItemImg,
  EmptyCart,
  Total,
} from "./style";

export function CartModal() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Overlay onClick={() => dispatch(toggleCart())}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>

        <ModalHeader>
          <h2>Carrinho</h2>
          <button onClick={() => dispatch(toggleCart())}>✕</button>
        </ModalHeader>

        {items.length === 0 ? (
          <EmptyCart>Nenhum item no carrinho</EmptyCart>
        ) : (
          <>
            {items.map((item, index) => (
              <CartItem key={index}>
                <CartItemImg src={item.img} alt={item.title} />
                <CartItemInfo>
                  <h4>{item.title}</h4>
                  <span>
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </CartItemInfo>
              </CartItem>
            ))}
            <Total>
              Total:{" "}
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Total>
          </>
        )}

      </ModalContainer>
    </Overlay>
  );
}