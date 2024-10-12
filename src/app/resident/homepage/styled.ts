import styled from "styled-components";

export const FormWrapper = styled.div`
  display: grid;
  justify-content: space-evenly;
  align-content: center;
  justify-items: center;
  margin-top: 5vh;
`;

export const FormButtons = styled.div`
  width: 50vw;
  height: 12vh;
  background: lightseagreen;
  border: lightseagreen;
  color: #1a1a1a;
  border-radius: 10px;
  align-content: center;
  text-align: center;
  margin: 10vh 0;
  font-size: 32px;

  &:hover {
    background: lightcoral;
    color: white;
  }
`;
