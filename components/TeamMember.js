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
