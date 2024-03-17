import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

export default function AddTaskButton({ onClick }) {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
		return window.removeEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	}, []);

	return (
		<button
			onClick={onClick}
			className='bg-indigo-500 rounded-[5px] w-full mt-4 py-1 uppercase font-medium text-[#f7f7f7] leading-7 text-lg transition-colors duration-300 md:fixed md:bottom-6 md:right-6 md:w-14 md:h-14 md:rounded-full md:text-4xl md:mt-0 md:py-0 hover:bg-[#4c4eb8] focus-visible:outline-none'
		>
			{windowWidth >= 768 && (
				<div className='flex justify-center'>
					<FaPlus />
				</div>
			)}
			{windowWidth < 768 && 'New Task +'}
		</button>
	);
}
