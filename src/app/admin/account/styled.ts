import styled from "styled-components";

// Wrapper for the whole container
export const Wrapper = styled.div`
  width: 100vw; // Full viewport width
  margin-top: 5vh; // Remove default margin
  padding: 0; // Remove default padding
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px; // Add space between child elements

  /* Responsive styles */
  @media (max-width: 768px) {
    margin-top: 10vh; // Adjust top margin for mobile
  }
`;

// Container for the create button
export const CreateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  height: 10%;
  margin-top: 20px;

  svg {
    cursor: pointer; // Add pointer cursor to svg for better UX
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3; // Change color on hover
    }
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    justify-content: center; // Center the svg button on mobile
    width: 100%;
  }
`;

// Button style
export const Button = styled.button`
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  background-color: cadetblue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer; // Show pointer cursor when hovering over the button
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; // Change background on hover
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 8px 16px; // Reduce padding on smaller screens
    font-size: 14px; // Adjust font size for mobile
  }
`;
