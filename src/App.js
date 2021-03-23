import React, { Fragment } from 'react';
import Game from './components/containers/Game';
import Heading from './components/presentational/Heading';
import Modal from './components/containers/Modal';
import './App.css';

export default function App() {
	const win = false;

	return (
		<Fragment>
			<Heading>Match Two!</Heading>
			<Game />
			{win ? <Modal /> : null}
		</Fragment>
	);
}
