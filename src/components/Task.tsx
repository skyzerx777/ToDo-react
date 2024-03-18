import { useContext } from 'react';
import { FaCheck, FaPen } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { TasksContext, ThemeContext } from '../App';
import EditTaskButton from './EditTaskButton';
import RemoveTaskButton from './RemoveTaskButton';

export default function Task({ children, checked, id }) {
	const { theme } = useContext(ThemeContext);
	const { tasks, setTasks } = useContext(TasksContext);

	const setCheck = () => {
		console.log(tasks);
		setTasks(
			tasks.map(item => {
				if (item.id === id) {
					return { ...item, isChecked: !item.isChecked! };
				}
				return item;
			})
		);
	};

	const removeTask = () => {
		setTasks(
			tasks.filter(item => {
				if (item.id !== id) {
					return item;
				}
			})
		);
	};

	return (
		<div className='border-b last:border-0 border-indigo-500 text-left py-4 text-xl cursor-pointer select-none flex justify-between'>
			<div onClick={setCheck} className='grow'>
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
			<div className='flex gap-2'>
				<EditTaskButton>
					<FaPen />
				</EditTaskButton>
				<RemoveTaskButton removeTask={removeTask}>
					<FaRegTrashCan />
				</RemoveTaskButton>
			</div>
		</div>
	);
}
