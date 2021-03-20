import React, { Fragment } from 'react';
import Game from './components/containers/Game';
import Heading from './components/presentational/Heading';
import './App.css';

export default function App() {
	return (
		<Fragment>
			<Heading>Match Two!</Heading>
			<Game />
		</Fragment>
	);
}
