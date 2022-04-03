import { gql } from '@apollo/client';

export interface PokemonList {
    name: string;
    id: number;
    types: PokemonType[];
}

export interface PokemonType {
    type: {
        name: string;
    };
}

/* This is a type definition for the data that will be returned from the query. */
export interface PokemonListData {
    pokemons: PokemonList[];
}

/* This is a type definition for the variables that will be passed to the query. */
export interface PokemonListVars {
    limit: number;
    offset: number;
}

export const POKEMONS_LIST = gql`
    query getPokemonsList($offset: Int = 0) {
        pokemons: pokemon_v2_pokemon(limit: 10, offset: $offset) {
            name
            id
            types: pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                    name
                }
            }
        }
    }
`;

export interface PokemonMoves {
    move_id: number;
    move: { name: string };
    learn_method: { name: string }[];
    move_learn_method_id: number;
}

export interface PokemonDetail {
    name: string;
    id: number;
    types: PokemonType[];
    moves: PokemonMoves[];
}

/* This is a type definition for the data that will be returned from the query. */
export interface PokemonDetailData {
    pokemon_data: PokemonDetail[];
}

/* This is a type definition for the variables that will be passed to the query. */
export interface PokemonDetailVars {
    pokemonId: number;
    generationId: number;
}

export const POKEMON_DATA = gql`
    query getPokemonData($pokemonId: Int = 1, $generationId: Int = 1) {
        pokemon_data: pokemon_v2_pokemon(where: { id: { _eq: $pokemonId } }) {
            name
            id
            types: pokemon_v2_pokemontypes {
                type: pokemon_v2_type {
                    name
                }
            }
            moves: pokemon_v2_pokemonmoves(
                where: {
                    pokemon_v2_versiongroup: {
                        generation_id: { _eq: $generationId }
                    }
                }
                order_by: {
                    level: asc
                    pokemon_v2_movelearnmethod: { id: asc }
                }
            ) {
                move: pokemon_v2_move {
                    name
                    type: pokemon_v2_type {
                        name
                    }
                }
                learn_method: pokemon_v2_movelearnmethod {
                    name
                }
                move_learn_method_id
                move_id
            }
        }
    }
`;
