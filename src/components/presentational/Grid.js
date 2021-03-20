import styled from 'styled-components';

export default styled.div`
	display: grid;
	grid-template-columns: repeat(4, 130px);
	grid-template-rows: repeat(3, 130px);
	gap: 25px;

	width: max-content;
	margin: 40px auto 0 auto;
`;
