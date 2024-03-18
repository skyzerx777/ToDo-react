import { useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from '../App';
import ApplyButton from './ApplyButton';
import CloseModalButton from './CloseModalButton';
import TaskInput from './TaskInput';

export default function Modal({ isModalOpen, closeModal }) {
	const modalRef = useRef();
	const { theme } = useContext(ThemeContext);
	const [inputValue, setInputValue] = useState<string>('');

	useEffect(() => {
		if (isModalOpen) {
			modalRef.current.showModal();
		} else {
			modalRef.current.close();
		}
	}, [isModalOpen]);

	return createPortal(
		<dialog
			ref={modalRef}
			onCancel={event => event.preventDefault()}
			className={`w-[450px] h-80 p-5 rounded-[10px] absolute -top-[20%] drop-shadow-xl ${
				theme === 'light'
					? 'bg-[#f7f7f7]'
					: 'bg-[#252525] border border-[#f7f7f7]'
			}`}
		>
			<div className='flex flex-col h-full gap-y-2'>
				<h2
					className={`uppercase font-bold text-center text-2xl ${
						theme === 'light' ? 'text-[#252525]' : 'text-[#f7f7f7]'
					}`}
				>
					New Task
				</h2>
				<TaskInput setInputValue={setInputValue} isModalOpen={isModalOpen} />
				<div className='flex justify-around mt-auto'>
					<CloseModalButton closeModal={closeModal}>Close</CloseModalButton>
					<ApplyButton inputValue={inputValue} closeModal={closeModal}>
						Apply
					</ApplyButton>
				</div>
			</div>
		</dialog>,
		document.querySelector('#modal')
	);
}
