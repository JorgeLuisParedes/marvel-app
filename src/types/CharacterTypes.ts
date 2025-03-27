export interface Character {
	id: number;
	name: string;
	image: string;
}

export interface CharacterDetails extends Character {
	description: string;
	transformations: Transformation[];
}

export interface Transformation {
	id: number;
	name: string;
	image: string;
	ki: string;
}
