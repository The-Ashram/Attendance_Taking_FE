import styled from "styled-components";

export const Wrapper = styled.div`
    height: 10vh;
    background-color: cornflowerblue;
    justify-content: space-evenly;
    display: flex;
`

export const Button = styled.button`
    width: 24vw;
    height: 8vh;
    background: aliceblue;
    border: aliceblue;
    color: #1a1a1a;
    border-radius: 10px;
    margin-top: 8px;
    margin-left: 5vw;
    font-size: 18px;

    &:hover {
        background: lightcoral;
        color: white;
    }
`

export const Title = styled.label`
    display: grid;
    align-items: center;
`
