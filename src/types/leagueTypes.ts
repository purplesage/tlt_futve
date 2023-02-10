interface Team {
	id: number;
	name: string;
	logo: string;
	winner: boolean | null;
}

interface Fixture {
	id: number;
	referee: string | null;
	date: string;
	status: object;
	venue: object;
}

interface Goals {
	home: number | null;
	away: number | null;
}

interface Teams {
	home: Team;
	away: Team;
}

export interface LeagueFixture {
	fixture: Fixture;

	goals: Goals;

	teams: Teams;
}
