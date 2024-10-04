import styled from "styled-components";

export const FormWrapper = styled.div`
    display: grid;
    justify-content: space-evenly;
    align-content: center;
    margin-top: 10vh;
`

export const FormButtons = styled.div`
    width: 50vw;
    height: 12vh;
    background: lightslategray;
    border: aliceblue;
    color: #1a1a1a;
    border-radius: 10px;
    align-content: center;
    text-align: center;
    margin: 10vh 0;

    &:hover {
        background: lightcoral;
        color: white;
    }
`