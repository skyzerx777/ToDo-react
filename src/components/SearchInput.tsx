import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import CategorySelect from './CategorySelect';
import ChangeThemeButton from './ChangeThemeButton';

export default function SearchInput() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='flex gap-4 mt-[18px] relative'>
			<div className='grow'>
				<input
					type='text'
					placeholder='Search task...'
					className={`w-full bg-transparent border rounded-[5px] grow px-10 py-1 leading-7 text-lg outline outline-[3px] outline-offset-0 outline-transparent transition-all duration-300  ${
						theme === 'light'
							? 'border-indigo-500 focus:outline-indigo-300 text-indigo-500 placeholder:text-indigo-200'
							: 'border-[#f7f7f7] text-[#f7f7f7] placeholder:text-gray-500 focus:outline-gray-500'
					}`}
				/>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					size='lg'
					className={`absolute left-3 top-[calc(50%-10px)] ${
						theme === 'light' ? 'text-indigo-500' : 'text-[#f7f7f7]'
					} transition-colors duration-300`}
				/>
			</div>
			<CategorySelect />
			<ChangeThemeButton />
		</div>
	);
}
