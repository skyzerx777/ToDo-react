import { useContext } from 'react';
import { TasksContext } from '../App';
import Task from './Task';

export default function TasksList() {
	const { tasks } = useContext(TasksContext);
	return (
		<div>
			{tasks.map(task => (
				<Task key={task.id} taskIndex={task.id} checked={task.isChecked}>
					{task.value}
				</Task>
			))}
		</div>
	);
}
