import styled, { keyframes } from "styled-components";
import TeamMember from "../components/TeamMember";

const TeamSolarify = ({ circleSize, members }) => {
  members.map((member, index) => {
    const initialRotation = (index * 360) / members.length;

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
      <div key={member.id}>
        <Circle>
          <TeamMember initialRotation={initialRotation} memberSize={50}>
            {member.name}
          </TeamMember>
        </Circle>
      </div>
    );
  });
};

export default TeamSolarify;
