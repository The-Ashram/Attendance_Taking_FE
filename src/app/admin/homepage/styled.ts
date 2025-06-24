import styled from "styled-components";

export const Date = styled.div`
  font-size: 2vw; /* Base font size based on viewport width */
  text-align: center;
  margin-top: 2vh; /* Margin based on viewport height */
  color: firebrick;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 3vw; /* Slightly larger font size for tablets */
    margin-top: 4vh; /* Adjust margin for tablets */
  }

  @media (max-width: 768px) {
    font-size: 4vw; /* Increase font size for smaller screens */
    margin-top: 5vh; /* Adjust margin for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 5vw; /* Further increase font size for mobile */
    margin-top: 6vh; /* Adjust margin for mobile screens */
  }
`;
