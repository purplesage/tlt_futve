import { getPlayerStats } from '@/api_football/footballApi';
import { useQuery } from '@tanstack/react-query';

const PlayerStats = ({ id }: { id: string }) => {
	const {
		isLoading,
		isError,
		isSuccess,
		isFetching,
		data: playerStats,
	} = useQuery(['getPlayerStats', id], () => getPlayerStats(id), {
		onSuccess: (data) => console.log(data),
		onError: (error) => console.log(error),
		enabled: id.length > 0,
	});

	return (
		<>
			<h1>Jugadores</h1>
			{isSuccess && <p>{playerStats.team?.name}</p>}
		</>
	);
};

export default PlayerStats;
