import { useContext, useEffect, useState } from 'react';
import { CategoryContext, TasksContext } from '../App';
import Task from './Task';

export default function TasksList({ searchValue }) {
	const { tasks } = useContext(TasksContext);
	const { category } = useContext(CategoryContext);
	const [searchableValue, setSearchableValue] = useState('');

	useEffect(() => {
		setSearchableValue(searchValue);
	}, [searchValue]);

	const renderTask = task => {
		return (
			<Task key={task.id} id={task.id} checked={task.isChecked}>
				{task.value}
			</Task>
		);
	};

	const searchCheck = value => {
		return value.toLowerCase().includes(searchableValue.trim().toLowerCase());
	};

	const renderAllTasks = () => {
		if (category !== 'all') {
			return tasks.map(task => {
				if (category === 'completed') {
					if (task.isChecked === true) {
						if (searchCheck(task.value)) {
							return renderTask(task);
						} else {
							return;
						}
					}
				} else {
					if (task.isChecked === false) {
						if (searchCheck(task.value)) {
							return renderTask(task);
						} else {
							return;
						}
					}
				}
			});
		} else {
			return tasks.map(task => {
				if (searchCheck(task.value)) {
					return renderTask(task);
				} else {
					return;
				}
			});
		}
	};
	return <div>{renderAllTasks()}</div>;
}
