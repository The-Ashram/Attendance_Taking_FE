import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 9vh;
    align-items: center;
    background-color: cornflowerblue;
    padding: 5px
`

export const ButtonsWrapper = styled.div`
    display: flex;
    height: inherit;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
`

export const Button = styled.button`
    width: 10vw;
    height: 80%;
    background: aliceblue;
    border: aliceblue;
    color: #1a1a1a;
    border-radius: 10px;

    &:hover {
        background: lightcoral;
        color: white;
    }
`