// Navbar.jsx
import { ShoppingCart } from "lucide-react"; // Só o ícone do lucide
import { Badge, Container, NavBarContainer } from "./style"; // Badge e Container dos seus estilos
import { useState } from "react";

export function Navbar() {
  const [count] = useState(1);

  return (
    <NavBarContainer>
      <Container>
        <ShoppingCart size={24} />
        {count > 0 && <Badge>{count}</Badge>}
      </Container>
    </NavBarContainer>
  );
}
