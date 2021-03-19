import { Fragment } from 'react';
import Game from './components/Game';
import Heading from './styled/Heading';
import './App.css';

function App() {
	return (
		<Fragment>
			<Heading>Match Two!</Heading>
			<Game />
		</Fragment>
	);
}

export default App;
