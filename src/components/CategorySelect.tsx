import { useContext, useRef, useState } from 'react';
import Select, { GroupBase, StylesConfig } from 'react-select';
import { CategoryContext } from '../App';
import { CategoryType } from '../types/category';

const options: CategoryType[] = [
	{
		value: 'all',
		label: 'All',
	},
	{
		value: 'completed',
		label: 'Completed',
	},
	{
		value: 'incomplete',
		label: 'Incomplete',
	},
];
export default function CategorySelect() {
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const selectRef = useRef(null);
	const { category, setCategory } = useContext(CategoryContext);

	const style:
		| StylesConfig<CategoryType, false, GroupBase<CategoryType>>
		| undefined = {
		control: (base: object, { isFocused }) => ({
			...base,
			border: 0,
			// This line disable the blue border
			boxShadow: 'none',
			backgroundColor: isFocused ? 'rgb(76, 78, 184)' : 'rgb(99 102 241)',
			minWidth: '170px',
			textAlign: 'left',
			transition: 'all .3s',
			':hover': {
				boxShadow: '0 0 4px #6c63ff',
			},
		}),
		singleValue: (base: object) => ({
			...base,
			color: '#f7f7f7',
			textTransform: 'uppercase',
			fontWeight: '500',
			fontSize: '18px',
		}),
		option: (base: object, { isSelected, isFocused }) => ({
			...base,
			color: 'rgb(99 102 241)',
			textAlign: 'left',
			backgroundColor: isFocused ? '#e6e6ff' : isSelected ? '#cccdff' : 'none',
			padding: '4px 12px',
			transition: 'background-color .1s',
			':active': {
				backgroundColor: 'none',
			},
		}),
		menu: () => ({
			border: '1px solid rgb(99 102 241)',
			borderRadius: '5px',
			position: 'absolute',
			width: '100%',
			backgroundColor: 'rgb(245, 245, 245)',
			zIndex: '999',
		}),
	};

	const onChangeHandler = (event: CategoryType) => {
		setSelectedOption(event);
		setCategory(event.value);
		selectRef.current?.blur();
	};

	return (
		<Select
			ref={selectRef}
			defaultValue={selectedOption}
			onChange={onChangeHandler}
			options={options}
			isSearchable={false}
			styles={style}
			className='grow'
		/>
	);
}
