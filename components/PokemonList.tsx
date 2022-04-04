import { useQuery } from '@apollo/client';
import PokemonCard from './PokemonCard';
import {
    PokemonListData,
    PokemonListVars,
    POKEMONS_LIST,
} from '../utils/queries';
import { CardList, ListWrapper } from '../styles';
import { useState } from 'react';
import Nav from './Navigation';

const POKEMON_SIZE = 10;

const PokemonList: React.FC = (props) => {
    const [page, setPage] = useState<number>(0);
    const { loading, data, fetchMore } = useQuery<
        PokemonListData,
        PokemonListVars
    >(POKEMONS_LIST, {
        variables: {
            offset: page * POKEMON_SIZE,
            limit: POKEMON_SIZE,
        },
    });

    if (loading) return <div>Loading...</div>;

    return (
        <ListWrapper>
            <CardList>
                {data?.pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemonData={pokemon} />
                ))}
            </CardList>
            <Nav currentPage={page} setPage={setPage} />
        </ListWrapper>
    );
};

export default PokemonList;
