import styled from "styled-components";

export const Background = styled.div`
  background-image: url('/ashram.jpg');
  background-size: cover; /* Ensure the image covers the whole background */
  background-position: center; /* Center the image */
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  display: flex; /* Use flexbox for centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  position: relative; /* For positioning content over the image */
  overflow: hidden; /* Prevents any overflow outside of the viewport */

  /* Optional: Add an overlay to improve text visibility */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay with transparency */
    z-index: 1; /* Ensure overlay is above the image */
  }

  /* Make sure text or content is placed above the background */
  > * {
    z-index: 2; /* Ensure any child content is above the overlay */
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    background-size: cover; /* Ensure responsiveness */
    background-position: center center; /* Ensure it remains centered on smaller screens */
  }

  @media (max-width: 480px) {
    background-size: cover; /* Prevent image distortion on very small screens */
    background-position: center center;
  }
`;


export const Wrapper = styled.div`
    width: 100vw; // Full viewport width
    height: 100vh; // Full viewport height
    margin: 0; // Remove default margin
    padding: 0; // Remove default padding
`;

