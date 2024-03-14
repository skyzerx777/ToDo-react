import './App.css';
import SearchInput from './components/SearchInput';

function App() {
	return (
		<div className='container mx-auto px-1 md:px-10 xl:px-40 text-center pt-7'>
			<h1 className='uppercase font-bold text-2xl'>Todo list</h1>
			<SearchInput />
		</div>
	);
}

export default App;
