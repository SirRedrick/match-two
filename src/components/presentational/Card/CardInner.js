import styled from 'styled-components';

export default styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
	border-radius: 9px;
	position: relative;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	transform: ${({ isChosen }) => (isChosen ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;
