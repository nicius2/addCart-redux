// Navbar.jsx
import { ShoppingCart } from "lucide-react"; // Só o ícone do lucide
import { Badge, ContainerButton, NavBarContainer } from "./style"; // Badge e Container dos seus estilos
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleCart } from "../../store/slice/cartSlice";
import { CartModal } from "../CartModal";

export function Navbar() {
  const dispatch = useAppDispatch()
  const count = useAppSelector((state) => state.cart.items.length)
  const isOpenCart = useAppSelector((state) => state.cart.isOpenCart)

  return (
    <NavBarContainer>
      <ContainerButton onClick={() => dispatch(toggleCart())}>
        <ShoppingCart size={24} />
        {count > 0 && <Badge>{count}</Badge>}
      </ContainerButton>

      {isOpenCart && <CartModal />}
    </NavBarContainer>
  );
}
