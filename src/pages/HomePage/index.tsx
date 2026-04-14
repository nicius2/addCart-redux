import { Navbar } from "../../components/navbar";
import { ProductItem } from "../../components/products";
import { ContainerDiv } from "./styled";

export function HomePage() {

  return (
    <ContainerDiv>
      <Navbar />
      <ProductItem />
    </ContainerDiv>
  );
}
