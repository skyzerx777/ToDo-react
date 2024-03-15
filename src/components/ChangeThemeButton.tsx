import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
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
			{theme === 'light' && <FontAwesomeIcon icon={faMoon} size='xl' />}
			{theme === 'dark' && <FontAwesomeIcon icon={faSun} size='xl' />}
		</button>
	);
}
