import Head from 'next/head';
import { useState, useEffect } from 'react';
import { getCountries, getLigaFutveStandings } from '@/api_football';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
	const {
		isLoading,
		isError,
		isSuccess,
		isFetching,
		data: standings,
	} = useQuery(['getLigaFutveStandings'], getLigaFutveStandings, {
		staleTime: Infinity,
	});

	console.log(standings);
	return (
		<>
			<Head>
				<title>Football testing!</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{isFetching && <p>is fetching!</p>}
				<div>{JSON.stringify(standings)}</div>
			</main>
		</>
	);
}
