import { createContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Content from './components/Content';
import SearchInput from './components/SearchInput';

type ThemeContextType = {
	theme: string;
	setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>(
	{} as ThemeContextType
);

function App() {
	const [theme, setTheme] = useState('light');
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Helmet>
				<style>
					{`body{background-color: ${
						theme === 'light' ? 'rgb(245, 245, 245)' : '#252525'
					}; transition: background-color .2s`}
				</style>
			</Helmet>
			<header className='max-w-3xl mx-auto px-1 md:px-10 text-center pt-10'>
				<h1
					className={`uppercase text-[26px] leading-[39px] font-medium transition-colors duration-300 ${
						theme === 'light' ? 'text-black' : 'text-white'
					}`}
				>
					Todo list
				</h1>
				<SearchInput />
			</header>
			<Content />
		</ThemeContext.Provider>
	);
}

export default App;
