import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InputField() {
	return (
		<div className='flex gap-5 my-3 relative'>
			<input
				type='text'
				placeholder='Search task...'
				className='border-2 border-purple-600 rounded grow px-10 py-1 leading-7 text-lg focus:outline-none'
			/>
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				size='lg'
				className='absolute left-3 top-[calc(50%-10px)] text-purple-600'
			/>
		</div>
	);
}
