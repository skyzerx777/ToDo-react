import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';

export default function TaskInput({ setInputValue, isModalOpen }) {
	const { theme } = useContext(ThemeContext);
	const [inputText, setInputText] = useState('');

	const onChangeHandler = (event: ChangeEvent) => {
		setInputValue(event.target.value);
		setInputText(event.target.value);
	};

	useEffect(() => {
		if (isModalOpen) {
			setInputValue('');
			setInputText('');
		}
	}, [isModalOpen]);

	return (
		<input
			type='text'
			placeholder='New task...'
			onChange={onChangeHandler}
			value={inputText}
			className={`w-full bg-transparent border rounded-[5px] px-4 py-1 leading-7 text-lg outline outline-[3px] outline-offset-0 outline-transparent transition-all duration-300  ${
				theme === 'light'
					? 'border-indigo-500 focus:outline-indigo-300 text-indigo-500 placeholder:text-indigo-200'
					: 'border-[#f7f7f7] text-[#f7f7f7] placeholder:text-gray-500 focus:outline-gray-500'
			}`}
		/>
	);
}
