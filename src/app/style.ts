import styled from "styled-components";

export const Background = styled.div`
    background-image: url('/ashram.jpg');
    background-size: cover; // Ensure the image covers the whole background
    background-position: center; // Center the image
    width: 100vw; // Full viewport width
    height: 100vh; // Full viewport height
    display: flex; // Use flexbox for centering
    align-items: center; // Center vertically
    justify-content: center; // Center horizontally
`;

export const Wrapper = styled.div`
    width: 100vw; // Full viewport width
    height: 100vh; // Full viewport height
    margin: 0; // Remove default margin
    padding: 0; // Remove default padding
`;

