import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from '../App';
import ApplyButton from './ApplyButton';
import CloseModalButton from './CloseModalButton';
import TaskInput from './TaskInput';

export default function Modal({ opened, closeModal }) {
	const modalRef = useRef();
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		if (opened) {
			modalRef.current.showModal();
		} else {
			modalRef.current.close();
		}
	}, [opened]);

	return createPortal(
		<dialog
			ref={modalRef}
			onCancel={event => event.preventDefault()}
			className='w-[450px] h-80 p-5 rounded-[10px]'
		>
			<div className='flex flex-col h-full gap-y-2'>
				<h2 className='uppercase font-bold text-center text-2xl'>New Task</h2>
				<TaskInput />
				<div className='flex justify-around mt-auto'>
					<CloseModalButton closeModal={closeModal}>Close</CloseModalButton>
					<ApplyButton>Apply</ApplyButton>
				</div>
			</div>
		</dialog>,
		document.querySelector('#modal')
	);
}
