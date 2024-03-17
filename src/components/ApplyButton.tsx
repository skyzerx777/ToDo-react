export default function ApplyButton({ children }) {
	return (
		<button className='w-24 text-lg leading- p-1 bg-indigo-500 text-[#f7f7f7] border uppercase font-bold rounded-[5px] hover:bg-indigo-600 transition-colors duration-300'>
			{children}
		</button>
	);
}
