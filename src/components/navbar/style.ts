
import styled from "styled-components";

export const NavBarContainer = styled.div`
     display: flex;
     justify-content: flex-end;
     padding: 16px;
     width: 100%;
`

export const Container = styled.div`
  position: relative;
  width: fit-content;
`;

export const Badge = styled.span`
  position: absolute;
  top: -4px;
  right: -6px;

  background: red;
  color: white;

  font-size: 10px;
  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
`;