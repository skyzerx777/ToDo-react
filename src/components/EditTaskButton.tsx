import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function EditTaskButton({
	children,
	isEditing,
	setIsEditing,
	finishEditing,
}) {
	const { theme } = useContext(ThemeContext);

	const onClickHandler = () => {
		if (!isEditing) {
			setIsEditing(true); // Начинаем редактирование
		} else {
			setIsEditing(false); // Завершаем редактирование
			finishEditing(); // Передаем значение текста обратно в родительский компонент
		}
	};
	return (
		<button
			onClick={onClickHandler}
			className={`opacity-50 hover:text-amber-500 hover:opacity-100 transition-[color, opacity] duration-100 ${
				theme === 'light' ? 'text-[#252525]' : 'text-[#f7f7f7]'
			}`}
		>
			{children}
		</button>
	);
}
