import styled from "styled-components";

export const Wrapper = styled.div`
    height: 7vh;
    background-color: lightslategray;
    justify-content: space-evenly;
    display: flex;
`

export const Button = styled.button`
    width: 17vw;
    height: 6vh;
    background: aliceblue;
    border: aliceblue;
    color: #1a1a1a;
    border-radius: 10px;
    margin-top: 3px;
    margin-left: 5vw;

    &:hover {
        background: lightcoral;
        color: white;
    }
`

export const Title = styled.label`
    display: grid;
`
