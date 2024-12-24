import styled from "styled-components";

export const FormWrapper = styled.div`
  display: grid;
  justify-content: space-evenly;
  align-content: center;
  justify-items: center;
  margin-top: 5vh;
`;

export const FormButtons = styled.div`
  width: 95%; /* Wider width for better visibility */
  max-width: 500px; /* Larger max width for bigger screens */
  height: 200px; /* Increased height for a larger button */
  background: lightseagreen;
  border: none; /* Removed unnecessary border */
  color: #1a1a1a;
  border-radius: 16px; /* Larger radius for a smoother look */
  display: flex;
  align-items: center;
  justify-content: center; /* Centers the text */
  text-align: center;
  margin: 30px auto; /* More spacing around the button */
  font-size: 40px; /* Larger font size for better readability */
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: lightcoral;
    color: white;
    transform: translateY(-3px); /* More pronounced lift on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25); /* Enhanced shadow */
  }

  &:active {
    background: crimson;
    transform: translateY(1px); /* Slight press-down effect */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15); /* Softer shadow on click */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(240, 128, 128, 0.5); /* More prominent focus ring */
  }

  @media (max-width: 768px) {
    font-size: 50px; /* Adjusted font size for medium screens */
    height: 200px; /* Reduced height for smaller devices */
  }

  @media (max-width: 480px) {
    font-size: 50px; /* Further adjust for very small screens */
    height: 200px; /* Slightly smaller height */
  }
`;


