import styled, { keyframes } from "styled-components";

const TeamMember = ({ memberSize, children }) => {
  const spin = keyframes`
    to {
      transform: rotate(-360deg);
    }`;

  const Member = styled.div`
    background-color: blue;
    width: ${memberSize}px;
    height: ${memberSize}px;
    animation: ${spin} 4s linear infinite;
    transform-origin: center;
    position: absolute;
  `;

  return <Member>{children}</Member>;
};

export default TeamMember;
