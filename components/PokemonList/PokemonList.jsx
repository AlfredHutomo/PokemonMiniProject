import { useQuery } from '@apollo/client';
import PokemonCard from '@/components/PokemonCard';
import { POKEMON_LIST } from '@/utils/queries';
import { CardList, ListWrapper } from '@/styles/index';
import { useState } from 'react';
import Navigation from '../Navigation';

const POKEMON_SIZE = 10;

const PokemonList = () => {
    const [page, setPage] = useState(0);
    const { loading, data } = useQuery(POKEMON_LIST, {
        variables: {
            offset: page * POKEMON_SIZE,
            limit: POKEMON_SIZE,
        },
    });

    if (loading) return <div>Loading...</div>;

    return (
        <ListWrapper>
            <CardList>
                {data?.pokemon.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemonData={pokemon} />
                ))}
            </CardList>
            <Navigation currentPage={page} setPage={setPage} />
        </ListWrapper>
    );
};

export default PokemonList;
