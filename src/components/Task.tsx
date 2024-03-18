import { useContext, useRef, useState } from 'react';
import { FaCheck, FaPen } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { TasksContext, ThemeContext } from '../App';
import EditTaskButton from './EditTaskButton';
import RemoveTaskButton from './RemoveTaskButton';

export default function Task({ children, checked, id }) {
	const { theme } = useContext(ThemeContext);
	const { tasks, setTasks } = useContext(TasksContext);
	const [isEditing, setIsEditing] = useState(false);
	const inputRef = useRef();

	const setCheck = () => {
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
		setTasks(tasks.filter(item => item.id !== id));
	};

	const editTask = editedValue => {
		setTasks(
			tasks.map(item => {
				if (item.id === id) {
					return { ...item, value: editedValue };
				}
				return item;
			})
		);
	};

	const finishEditing = () => {
		setIsEditing(false); // Завершаем редактирование
		editTask(inputRef.current.value); // Передаем отредактированное значение в родительский компонент
	};

	return (
		<div className='border-b last:border-0 border-indigo-500 text-left py-4 text-xl cursor-pointer select-none flex justify-between'>
			<div onClick={!isEditing ? setCheck : () => {}} className='grow'>
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
					{!isEditing && (
						<span
							className={`leading-7 transition-all duration-200 ${
								theme === 'light' ? 'text-[#252525]' : 'text-[#f7f7f7]'
							} ${
								checked ? 'line-through opacity-60' : 'no-underline opacity-100'
							}`}
						>
							{children}
						</span>
					)}

					{isEditing && (
						<input
							ref={inputRef}
							autoFocus
							type='text'
							defaultValue={children}
							className={`outline-0 border-b bg-transparent ${
								theme === 'light'
									? 'text-[#252525] border-[#252525]'
									: 'text-[#f7f7f7] border-[#f7f7f7]'
							}`}
						/>
					)}
				</div>
			</div>
			<div className='flex gap-2'>
				<EditTaskButton
					setIsEditing={setIsEditing}
					finishEditing={finishEditing} // Передаем функцию finishEditing
					isEditing={isEditing}
					editTask={editTask}
				>
					<FaPen />
				</EditTaskButton>
				<RemoveTaskButton removeTask={removeTask}>
					<FaRegTrashCan />
				</RemoveTaskButton>
			</div>
		</div>
	);
}
