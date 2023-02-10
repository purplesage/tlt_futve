import { useRouter } from 'next/router';
import { getTeamStats } from '@/api_football/footballApi';
import PlayerStats from '@/components/PlayerStats';
import { useQuery } from '@tanstack/react-query';

const Stats = () => {
	const router = useRouter();
	const id = typeof router.query?.id === 'string' ? router.query.id : '';

	const {
		isLoading,
		isError,
		isSuccess,
		isFetching,
		data: teamStats,
	} = useQuery(['getTeamStats', id], () => getTeamStats(id), {
		onSuccess: (data) => console.log(data),
		onError: (error) => console.log(error),
		enabled: id.length > 0,
	});

	return (
		<div>
			{isSuccess && <p>{teamStats.team?.name}</p>}
			<PlayerStats id={id} />
		</div>
	);
};

export default Stats;
