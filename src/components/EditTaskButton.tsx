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
			className={`hover:text-amber-500 hover:opacity-100 transition-[color, opacity] duration-300 ${
				theme === 'light' ? 'text-[#252525]' : 'text-[#f7f7f7]'
			} ${isEditing ? 'text-amber-500 opacity-100' : 'opacity-50'}`}
		>
			{children}
		</button>
	);
}
