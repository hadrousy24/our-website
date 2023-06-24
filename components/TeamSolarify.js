import styled, { keyframes } from "styled-components";
import TeamMember from "../components/TeamMember";

const TeamSolarify = ({ circleSize }) => {
  const revolve = keyframes`
    to {
      transform: rotate(360deg);
    }`;

  const Circle = styled.div`
    border: 1px solid red;
    width: ${circleSize}px;
    height: ${circleSize}px;
    animation: ${revolve} 4s linear infinite;
  `;

  return (
    <Circle>
      <TeamMember>Hello</TeamMember>
    </Circle>
  );
};

export default TeamSolarify;
