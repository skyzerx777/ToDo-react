import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../App';

export default function ApplyButton({ children, inputValue, closeModal }) {
	const { tasks, setTasks } = useContext(TasksContext);
	const [buttonIsOn, setButtonIsOn] = useState(false);

	useEffect(() => {
		if (inputValue !== '') {
			setButtonIsOn(true);
		} else {
			setButtonIsOn(false);
		}
	}, [inputValue]);

	return (
		<button
			onClick={() => {
				setTasks([
					...tasks,
					{ id: tasks.length, value: inputValue, isChecked: false },
				]);
				closeModal();
			}}
			disabled={buttonIsOn ? false : true}
			className='w-24 text-lg leading- p-1 bg-indigo-500 text-[#f7f7f7] border uppercase font-bold rounded-[5px] hover:bg-indigo-600 transition-[background-color, opacity] duration-300 disabled:hover:bg-indigo-500 disabled:opacity-50'
		>
			{children}
		</button>
	);
}
