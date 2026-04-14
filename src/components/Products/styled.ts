// styled.js
import styled from "styled-components";

export const CardContainer = styled.div`
  width: fit-content;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  background: #fff;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 12px;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-weight: 600;
    font-size: 1rem;
    color: #222;
    margin: 0;
  }
`;

export const CardPrice = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d6a4f;
`;

export const CardButton = styled.button<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;

  &:hover {
    background: #444;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4.5rem;
  padding: 1rem;
  justify-content: center;
  
`;