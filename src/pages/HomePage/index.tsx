import { Navbar } from "../../components/Navbar";
import { ProductItem } from "../../components/Products";
import { ContainerDiv } from "./styled";
import { loadProduct } from "../../store/slice/product";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";

export function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProduct());
  }, []);

  return (
    <ContainerDiv>
      <Navbar />
      <ProductItem />
    </ContainerDiv>
  );
}
