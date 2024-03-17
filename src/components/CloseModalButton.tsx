export default function CloseModalButton({ children, closeModal }) {
	return (
		<button
			onClick={closeModal}
			className='w-24 text-lg leading-8 p-1 text-indigo-500 border border-indigo-500 uppercase font-bold rounded-[5px] hover:bg-indigo-500 hover:text-[#f7f7f7] transition-colors duration-300'
		>
			{children}
		</button>
	);
}
