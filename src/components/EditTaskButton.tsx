import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function EditTaskButton({ children }) {
	const { theme } = useContext(ThemeContext);
	return (
		<button
			className={`opacity-50 hover:text-amber-500 hover:opacity-100 transition-[color, opacity] duration-100 ${
				theme === 'light' ? 'text-[#252525]' : 'text-[#f7f7f7]'
			}`}
		>
			{children}
		</button>
	);
}
