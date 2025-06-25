import styled from "styled-components";

export const FormWrapper = styled.div`
  text-align: left;
  padding: 20px;
  width: 100%;
  background-color: #f9f9f9; /* Light background for contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a soft shadow */
  
  
  /* Mobile Optimization */
  @media (max-width: 768px) {
    padding: 18px; /* Slightly reduced padding on tablets */
  }

  @media (max-width: 480px) {
    padding: 10px; /* Smaller padding for very small screens */
  }
`;

export const Form = styled.form`
  max-width: 100%; /* Make form flexible to fit smaller screens */
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff; /* Clean white background */
  
  /* Add subtle hover effect when form is focused */
  &:focus-within {
    border-color: #0070f3; /* Highlight the form border on focus */
    box-shadow: 0 0 8px rgba(0, 112, 243, 0.3); /* Blue glow when focused */
  }

  /* Mobile Optimization */
  @media (max-width: 768px) {
    padding: 18px;
  }

  @media (max-width: 480px) {
    padding: 15px; /* Smaller padding for small screens */
  }
`;


export const Title = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  text-decoration: underline;
  font-size: 8vw; /* Dynamic font size based on viewport width */
  
  /* Responsive typography */
  @media (max-width: 768px) {
    font-size: 6vw; /* Adjust font size for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 5vw; /* Adjust font size for smaller screens */
  }
`;


export const InputDetails = styled.div`
  margin-bottom: 20px; /* Maintain margin for spacing between elements */
  display: flex; /* Aligns content in a row */
  flex-direction: column; /* Ensures the children are stacked vertically */
  gap: 12px; /* Adds space between child components */
  transition: all 0.3s ease; /* Smooth transition for any changes */
  
  /* Add padding and background color for better contrast */
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #eaeaea; /* Slightly darker background on hover */
  }

  @media (max-width: 768px) {
    padding: 12px; /* Reduce padding on smaller screens */
    gap: 10px; /* Reduce the gap between elements */
  }

  @media (max-width: 480px) {
    padding: 8px; /* Further reduce padding on very small screens */
    gap: 8px; /* Reduce gap further */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Add gap between buttons */
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
  margin-top: 10px;
  width: 100%; /* Ensure container takes full width */
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SubmitButton = styled.button`
  text-align: center;
  padding: 12px 24px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
  
  /* Ensure button doesn't overflow */
  max-width: 300px; /* Optional: Limit max width */
  box-sizing: border-box; /* Include padding in width calculation */

  &:hover {
    background-color: #45a049;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #3e8e41;
    transform: translateY(0);
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(72, 239, 126, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Smaller font size on smaller screens */
    padding: 10px 20px; /* Adjust padding for smaller screens */
  }
`;


export const CancelButton = styled.button`
  text-align: center;
  padding: 12px 24px; /* Increased padding for a more balanced look */
  font-size: 1.5rem; /* Slightly larger font size for better readability */
  background-color: #cccccc; /* Soft gray background */
  color: #333333; /* Dark text for better contrast */
  border: none;
  border-radius: 8px; /* Rounded corners for a smoother feel */
  cursor: pointer; /* Pointer cursor on hover */
  transition: all 0.3s ease; /* Smooth transition for background, color, and transform */
  
  /* Subtle shadow for a more elevated look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: #b3b3b3; /* Darker gray on hover */
    color: #ffffff; /* White text on hover for contrast */
    transform: translateY(-2px); /* Lift effect on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }

  &:active {
    background-color: #999999; /* Even darker gray when clicked */
    transform: translateY(0); /* Reset lift effect */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Normal shadow on active state */
  }

  &:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 0 3px rgba(204, 204, 204, 0.6); /* Focus ring with subtle shadow */
  }

  @media (max-width: 768px) {
    font-size: 1.1rem; /* Adjust font size for smaller screens */
    padding: 10px 20px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Further reduce font size on very small screens */
  }
`;

