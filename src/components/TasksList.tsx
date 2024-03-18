import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../App';
import Task from './Task';

export default function TasksList({ searchValue }) {
	const { tasks } = useContext(TasksContext);
	const [searchableValue, setSearchableValue] = useState('');

	useEffect(() => {
		setSearchableValue(searchValue);
	}, [searchValue]);

	const renderTasks = () => {
		if (searchableValue.trim() !== '') {
			return tasks.map(task => {
				if (
					task.value
						.toLowerCase()
						.includes(searchableValue.trim().toLowerCase())
				) {
					return (
						<Task key={task.id} id={task.id} checked={task.isChecked}>
							{task.value}
						</Task>
					);
				}
			});
		} else {
			return tasks.map(task => (
				<Task key={task.id} id={task.id} checked={task.isChecked}>
					{task.value}
				</Task>
			));
		}
	};
	return <div>{renderTasks()}</div>;
}
