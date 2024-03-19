import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function RemoveTaskButton({ children, removeTask }) {
	const { theme } = useContext(ThemeContext);
	return (
		<button
			onClick={removeTask}
			className={`opacity-50 hover:text-red-600 hover:opacity-100 transition-[color, opacity] duration-300 ${
				theme === 'light' ? 'text-[#252525]' : 'text-[#f7f7f7]'
			}`}
		>
			{children}
		</button>
	);
}
