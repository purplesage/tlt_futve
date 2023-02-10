interface Stats {
	draw: number;
	goals: { for: number; against: number };
	lose: number;
	played: number;
	win: number;
}

export interface Team {
	id: number;
	logo: string;
	name: string;
}

export interface TeamRow {
	rank: number;
	points: number;
	goalsDiff: number;
	all: Stats;
	team: Team;
}
