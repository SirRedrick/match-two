import styled from 'styled-components';

export default styled.div`
	height: 100%;
	width: 100%;
	border-radius: 7px;
	background-color: ${({ isMatched }) => {
		if (isMatched === null) return '#fff';
		return isMatched ? '#0f0' : '#f00';
	}};
	display: flex;
	justify-content: center;
	align-items: center;
`;
