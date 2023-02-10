import { getLigaFutveStandings } from '@/api_football/footballApi';
import { useQuery } from '@tanstack/react-query';
import { TeamRow } from '@/types/standings';
import Link from 'next/link';

const Standings = () => {
	const {
		isLoading,
		isError,
		isSuccess,
		isFetching,
		data: standings,
	} = useQuery(['getLigaFutveStandings'], getLigaFutveStandings, {
		onSuccess: (data) => console.log(data),
	});

	return (
		<div>
			{isFetching && <p>is fetching!</p>}
			<div className="flex flex-col gap-5">
				{isSuccess &&
					standings.map((item: TeamRow, index: number) => (
						<Link href={`/teamStats/${item.team.id}`} key={index}>
							{item.team.name}
						</Link>
					))}
			</div>
		</div>
	);
};

export default Standings;
