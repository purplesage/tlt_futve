import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { isThisWeek } from 'date-fns';
import { LeagueFixture } from '@/types/leagueTypes';
import { TeamRow } from '@/types/standings';

const footballApi: AxiosInstance = axios.create({
	baseURL: 'https://v3.football.api-sports.io',
	headers: {
		'x-rapidapi-host': 'v3.football.api-sports.io',
		'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
	},
});

export const getCountries = async () => {
	const response = await footballApi.get('/countries');

	return response.data;
};

export const getLigaFutveStandings = async (): Promise<TeamRow[]> => {
	const response = await footballApi.get('/standings?league=299&season=2023');
	return response.data.response[0].league.standings[0];
};

export const getThisWeekFixtures = async (): Promise<LeagueFixture[]> => {
	const response = await footballApi.get('/fixtures?league=299&season=2023');

	return response.data.response.filter((leagueFixture: LeagueFixture) =>
		isThisWeek(new Date(leagueFixture.fixture.date))
	);
};
