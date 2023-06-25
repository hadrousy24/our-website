import styled, { keyframes } from "styled-components";
import TeamMember from "../components/TeamMember";

const TeamSolarify = ({ circleSize, members }) => {
  function buildCircle(member, initialRotation) {
    const revolve = keyframes`
      0% {
        transform: translate(-50%, -50%) rotate(${initialRotation}deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(${initialRotation + 360}deg);
      }`;

    const Circle = styled.div`
      border: 1px solid red;
      border-radius: 50%;
      width: ${circleSize}px;
      height: ${circleSize}px;
      animation: ${revolve} 4s linear infinite;
      position: absolute;
      top: 50%;
      left: 50%;
    `;

    return (
      <Circle>
        <TeamMember initialRotation={initialRotation} memberSize={50}>
          {member}
        </TeamMember>
      </Circle>
    );
  }

  return (
    <div className="solarify-system">
      {members.map((member, index) => (
        <div key={member.id}>
          {buildCircle(member.name, (index * 360) / members.length)}
        </div>
      ))}
    </div>
  );
};

export default TeamSolarify;
