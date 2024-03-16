import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

export default function AddTaskButton() {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	window.addEventListener('resize', () => {
		setWindowWidth(window.innerWidth);
	});
	return (
		<button className='bg-indigo-500 rounded-[5px] w-full mt-4 py-1 uppercase font-medium text-[#f7f7f7] leading-7 text-lg md:fixed md:bottom-6 md:right-6 md:w-14 md:h-14 md:rounded-full md:text-4xl md:mt-0 md:py-0'>
			{windowWidth >= 768 && (
				<div className='flex justify-center'>
					<FaPlus />
				</div>
			)}
			{windowWidth < 768 && 'New Task +'}
		</button>
	);
}
