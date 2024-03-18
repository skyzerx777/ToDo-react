import TasksList from './TasksList';

export default function Content({ searchValue }) {
	return (
		<main>
			<div className='max-w-3xl mx-auto px-3 md:px-24 text-center pt-10'>
				<TasksList searchValue={searchValue} />
			</div>
		</main>
	);
}
