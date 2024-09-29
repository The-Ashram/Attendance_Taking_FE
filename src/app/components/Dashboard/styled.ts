import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 5%;
`
export const Wrapper = styled.div`
    width: 100%;
    display: inherit;
    justify-content: inherit;
`

export const StatsBlock = styled.button`
    width: 40%;
    height: 150px;
    padding: 15px;
    display: grid;
    background-color: lightslategray;
    border: lightslategray;
    border-radius: 15px;

    &:hover {
        background-color: lightcoral;
    }
`
export const ModalWrapper = styled.div`
    width: 20%;
    height: 20%;
    background: white;
`