import Head from 'next/head';
import Standings from '@/components/Standings';
import Fixtures from '@/components/Fixtures';

export default function Home() {
	return (
		<>
			<Head>
				<title>TLT Futve | Inicio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Standings />
				{/* <Fixtures /> */}
			</main>
		</>
	);
}
