import { gql } from '@apollo/client';

export const POKEMON_LIST = gql`
    query getPokemonList($offset: Int = 0, $limit: Int = 10) {
        pokemon: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
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

export const POKEMON_DATA = gql`
    query getPokemonData($pokemonId: Int = 1, $generationId: Int = 8) {
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
