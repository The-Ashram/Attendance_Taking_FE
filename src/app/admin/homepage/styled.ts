import styled from "styled-components";

export const Date = styled.div`
  font-size: 4vw; /* Base font size based on viewport width */
  text-align: center;
  margin-top: 3vh; /* Margin based on viewport height */
  color: firebrick;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 4vw; /* Slightly larger font size for tablets */
    margin-top: 6vh; /* Adjust margin for tablets */
  }

  @media (max-width: 768px) {
    font-size: 4vw; /* Increase font size for smaller screens */
    margin-top: 4vh; /* Adjust margin for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 6vw; /* Further increase font size for mobile */
    margin-top: 4vh; /* Adjust margin for mobile screens */
  }
`;
