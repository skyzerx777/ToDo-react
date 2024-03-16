import { useContext } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { ThemeContext } from '../App';

export default function ChangeThemeButton() {
	const { theme, setTheme } = useContext(ThemeContext);

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};
	return (
		<button
			onClick={changeTheme}
			className='w-10 h-10 bg-indigo-500 rounded-[5px] text-white hover:bg-indigo-600 transition-colors duration-300'
		>
			{theme === 'light' && (
				<div className='text-xl flex justify-center'>
					<FiSun />
				</div>
			)}
			{theme === 'dark' && (
				<div className='text-xl flex justify-center'>
					<FaRegMoon />
				</div>
			)}
		</button>
	);
}
