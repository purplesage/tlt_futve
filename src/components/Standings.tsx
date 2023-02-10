import { getLigaFutveStandings } from '@/api_football/footballApi';
import { useQuery } from '@tanstack/react-query';
import { TeamRow } from '@/types/standings';

const Standings = () => {
	const {
		isLoading,
		isError,
		isSuccess,
		isFetching,
		data: standings,
	} = useQuery(['getLigaFutveStandings'], getLigaFutveStandings);

	return (
		<div>
			{isFetching && <p>is fetching!</p>}
			{isSuccess &&
				standings.map((item: TeamRow, index: number) => (
					<p key={index}>{item.team.name}</p>
				))}
		</div>
	);
};

export default Standings;
