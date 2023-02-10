import { getThisWeekFixtures } from '@/api_football/footballApi';
import { useQuery } from '@tanstack/react-query';
import { LeagueFixture } from '@/types/leagueTypes';

const Fixtures = () => {
	const {
		isLoading,
		isError,
		isSuccess,
		isFetching,
		data: fixtures,
	} = useQuery(['getLeageFixtures'], getThisWeekFixtures);

	return (
		<div>
			{isSuccess &&
				fixtures.map((leagueFixture: LeagueFixture) => (
					<div key={leagueFixture.fixture.id}>
						<div className="flex">
							<p>{leagueFixture.teams.home.name}</p>
							<p className="font-bold">{leagueFixture.goals.home}-</p>
							<p className="font-bold">{leagueFixture.goals.away}</p>
							<p>{leagueFixture.teams.away.name}</p>
						</div>

						<p>{new Date(leagueFixture.fixture.date).toLocaleDateString()}</p>
					</div>
				))}
		</div>
	);
};

export default Fixtures;
