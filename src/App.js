import { createContext } from 'react';
import './App.css';
import ChildA from './ChildA';

const data = createContext();
const data1 = createContext();
function App() {
	const name = 'Praharsh';
	const gender = 'Male';

	//Context Api
	// Create, Provider , Consumer

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>App</h1>

				<data.Provider value={name}>
					<data1.Provider value={gender}>
						<ChildA />
					</data1.Provider>
				</data.Provider>
			</header>
		</div>
	);
}

export default App;
export { data, data1 };
