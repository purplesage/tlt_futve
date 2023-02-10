interface MatchesData {
	draw: number;
	goals: { for: number; against: number };
	lose: number;
	played: number;
	win: number;
}

interface Team {
	id: number;
	logo: string;
	name: string;
}

interface TeamRow {
	rank: number;
	points: number;
	goalsDiff: number;
	all: MatchesData;
	team: Team;
}

export interface StandingsResponse {
	league: { standings: TeamRow[] };
}
