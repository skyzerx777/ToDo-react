import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { TasksContext, ThemeContext } from '../App';

export default function Task({ children, checked, taskIndex }) {
	const { theme } = useContext(ThemeContext);
	const { tasks, setTasks } = useContext(TasksContext);

	const setCheck = () => {
		setTasks(
			tasks.map((item, index) => {
				if (index === taskIndex) {
					console.log(item);
					return { ...item, isChecked: !checked };
				}
				return item;
			})
		);
	};

	return (
		<div
			onClick={setCheck}
			className='border-b last:border-0 border-indigo-500 text-left py-4 text-xl cursor-pointer select-none'
		>
			<div
				className={`inline-block w-7 h-7 align-top border border-indigo-500 relative transition-colors duration-300 ${
					checked ? 'bg-indigo-500' : 'bg-transparent'
				}`}
			>
				<div
					className={`w-7 h-7 absolute left-[calc(50%-10px)] top-[calc(50%-10px)] text-[#f7f7f7] transition-opacity duration-300 ${
						checked ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<FaCheck />
				</div>
			</div>
			<div className='inline-block ps-3'>
				<span
					className={`leading-7 transition-all duration-200 ${
						theme === 'light' ? 'text-[#252525]' : 'text-[#f7f7f7]'
					} ${
						checked ? 'line-through opacity-60' : 'no-underline opacity-100'
					}`}
				>
					{children}
				</span>
			</div>
		</div>
	);
}
