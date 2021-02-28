import { Fragment } from 'react';
import Game from './components/Game';
import styled from 'styled-components';
import './App.css';

function App() {
	return (
		<Fragment>
			<Heading>Match Two!</Heading>
			<Game />
		</Fragment>
	);
}

const Heading = styled.h1`
	font-size: 2.625rem;
	text-align: center;
	color: #434344;
	margin-top: 40px;
`;

export default App;
