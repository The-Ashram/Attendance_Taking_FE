import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Optional: Add a shadow for better visibility
    display: grid; // Optional: Use flexbox for internal alignment if needed
    align-items: center; // Center content inside the modal
    justify-content: center; // Center content inside the modal
`;

export const InputWrapper = styled.div`
    display: grid;
`

export const InputBox = styled.input`
    width: 200px;
    height:30px;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 0px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 10px;
    color: black;
`

export const CTAButton = styled.button`
    width: 200px;
    height: 30px;
    margin: 10px;
`

