import Head from 'next/head';
import { getLigaFutveStandings, getThisWeekFixtures } from '@/api_football';
import { useQuery } from '@tanstack/react-query';
import { LeagueFixture } from '@/types/leagueTypes';

export default function Home() {
	// const {
	// 	isLoading,
	// 	isError,
	// 	isSuccess,
	// 	isFetching,
	// 	data: standings,
	// } = useQuery(['getLigaFutveStandings'], getLigaFutveStandings);

	const {
		isLoading,
		isError,
		isSuccess,
		isFetching,
		data: fixtures,
	} = useQuery(['getLeageFixtures'], getThisWeekFixtures, {
		onSuccess: (data) => console.log(data),
	});

	return (
		<>
			<Head>
				<title>Football testing!</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{isFetching && <p>is fetching!</p>}
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
			</main>
		</>
	);
}
