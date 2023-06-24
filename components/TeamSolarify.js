import styled, { keyframes } from "styled-components";
import TeamMember from "../components/TeamMember";

const TeamSolarify = ({ circleSize }) => {
  const initialRotation = 0;

  const revolve = keyframes`
    0% {
      transform: rotate(${initialRotation}deg);
    }
    100% {
      transform: rotate(${initialRotation + 360}deg);
    }`;

  const Circle = styled.div`
    border: 1px solid red;
    width: ${circleSize}px;
    height: ${circleSize}px;
    animation: ${revolve} 4s linear infinite;
  `;

  return (
    <Circle>
      <TeamMember initialRotation={initialRotation} memberSize={50}>
        Hello
      </TeamMember>
    </Circle>
  );
};

export default TeamSolarify;
