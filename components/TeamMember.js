import styled, { keyframes } from "styled-components";

const TeamMember = ({ initialRotation, memberSize, children }) => {
  const spin = keyframes`
    0% {
      transform: rotate(${360 - initialRotation}deg);
    }
    100% {
      transform: rotate(${initialRotation * -1}deg);
    }`;

  const Member = styled.div`
    width: ${memberSize}px;
    height: ${memberSize}px;
    animation: ${spin} 4s linear infinite;
    transform-origin: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return <Member>{children}</Member>;
};

export default TeamMember;
