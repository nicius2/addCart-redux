// components/CartModal/styled.ts
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 380px;
  background: #fff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 101;
  overflow-y: auto;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.3rem;
    font-weight: 700;
  }

  button {
    all: unset;
    cursor: pointer;
    font-size: 1.2rem;
    color: #555;

    &:hover {
      color: #000;
    }
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
`;

export const CartItemImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h4 {
    font-size: 0.95rem;
    font-weight: 600;
  }

  span {
    color: #2d6a4f;
    font-weight: 700;
  }
`;

export const EmptyCart = styled.p`
  color: #888;
  text-align: center;
  margin-top: 2rem;
`;

export const Total = styled.div`
  margin-top: auto;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: right;
  border-top: 1px solid #e0e0e0;
  padding-top: 1rem;
`;