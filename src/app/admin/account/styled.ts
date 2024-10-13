import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw; // Full viewport width
  height: 50vh; // Full viewport height
  margin: 0; // Remove default margin
  padding: 0; // Remove default padding
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CreateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  height: 10%;

  svg {
    &:hover {
      color: #0056b3;
    }
  }
`;

export const Button = styled.button`
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  background-color: cadetblue;
  color: white;
  border: none;
  border-radius: 4px;
`;
