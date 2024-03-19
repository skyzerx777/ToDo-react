import { ChangeEvent, createContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import AddTaskButton from './components/AddTaskButton';
import Content from './components/Content';
import Modal from './components/Modal';
import SearchInput from './components/SearchInput';
import { ThemeContextType } from './types/themeContext';

export const ThemeContext = createContext<ThemeContextType>(
	{} as ThemeContextType
);

export const TasksContext = createContext({});

export const CategoryContext = createContext({});

function App() {
	const [theme, setTheme] = useState<string>('light');
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState('');
	const [tasks, setTasks] = useState([]);
	const [category, setCategory] = useState('all');

	const saveData = () => {
		if (tasks.length !== 0) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		} else {
			localStorage.removeItem('tasks');
		}
	};

	const loadData = () => {
		if (localStorage.getItem('tasks')) {
			setTasks(Array.from(JSON.parse(localStorage.getItem('tasks'))));
		}
	};

	const onChangeHandler = (event: ChangeEvent) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		window.addEventListener('beforeunload', saveData);
		return () => {
			window.removeEventListener('beforeunload', saveData);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tasks]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<CategoryContext.Provider value={{ category, setCategory }}>
				<TasksContext.Provider value={{ tasks, setTasks }}>
					<Helmet>
						<style>
							{`body{background-color: ${
								theme === 'light' ? 'rgb(245, 245, 245)' : '#252525'
							}; transition: background-color .2s`}
						</style>
					</Helmet>
					<header className='max-w-3xl mx-auto px-3 md:px-10 text-center pt-10'>
						<h1
							className={`uppercase text-[26px] leading-[39px] font-medium transition-colors duration-300 ${
								theme === 'light' ? 'text-black' : 'text-white'
							}`}
						>
							Todo list
						</h1>
						<SearchInput onChange={onChangeHandler} />
						<AddTaskButton onClick={() => setIsModalOpen(true)} />
						<Modal
							isModalOpen={isModalOpen}
							closeModal={() => setIsModalOpen(false)}
						/>
					</header>
					<Content searchValue={searchValue} />
				</TasksContext.Provider>
			</CategoryContext.Provider>
		</ThemeContext.Provider>
	);
}

export default App;
