import axios, { AxiosInstance, AxiosResponse } from 'axios';

const footballApi: AxiosInstance = axios.create({
	baseURL: 'https://v3.football.api-sports.io',
	headers: {
		'x-rapidapi-host': 'v3.football.api-sports.io',
		'x-rapidapi-key': process.env.NEXT_PUBLIC_API_KEY,
	},
});

export const getCountries = async (): Promise<AxiosResponse> => {
	const response = await footballApi.get('/countries');

	return response.data;
};

export const getLigaFutveStandings = async (): Promise<AxiosResponse> => {
	const response = await footballApi.get('/standings?league=299&season=2023');

	return response.data;
};
