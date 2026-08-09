import styled from "styled-components";

// Wrapper for modal
export const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 400px;  /* Ensures the modal is not too wide on larger screens */
  height: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  /* Responsive styles */
  @media (max-width: 480px) {
    width: 80%;
    padding: 15px;
  }
`;

// Input wrapper to organize input fields
export const InputWrapper = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Styling for input boxes
export const InputBox = styled.input`
  width: 100%;
  box-sizing: border-box; /* Ensures padding doesn't affect width calculations */
  padding: 12px 45px 12px 12px; /* Added right padding for the icon */
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #333;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0070f3; /* Blue border on focus */
    box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }

  /* Responsive styles */
  @media (max-width: 480px) {
    padding: 10px 40px 10px 10px;
    font-size: 14px;
  }
`;
export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px; /* Adjust size to fit your icons */
    height: auto;
    opacity: 0.6;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

// CTA button style
export const CTAButton = styled.button`
  width: 100%;
  max-width: 300px;
  padding: 12px;
  font-size: 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #005bb5;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003f7f;
    transform: scale(0.98);
  }

  /* Responsive styles */
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Error message style
export const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 14px;
  text-align: center;
  margin-top: 2px; /* Adjust for better spacing */
  padding: 15px; /* Added padding for better spacing */
  background-color: #f9d6d5; /* Light red background for error */
  border-radius: 5px;
  width: 100%; /* Make it span the full width */
  box-sizing: border-box; /* Ensure padding does not affect layout */
`;


export const LoginLabel = styled.label`
  color: black;
  text-align: center;
  font-size: 2rem; /* Larger font size for desktops */
  font-weight: bold;
  margin-bottom: 6px; /* Adds space below the label */
  
  /* Responsive styles */
  @media (max-width: 480px) {
    font-size: 1.5rem; /* Smaller font size for mobile */
    margin-bottom: 0px; /* Adjust margin for mobile */
  }
`;
