export interface Film {
    title: string | null;
    director: string | null;
    releaseDate: string | Date;
    speciesConnection: {
        species: {
            name: string;
            classification: string;
            homeworld: {
                name: string;
            };
        }[];
    };
}

export interface QueryResponse {
    allFilms: {
        films: Film[];
    };
}