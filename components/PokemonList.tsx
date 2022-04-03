import { useQuery } from '@apollo/client';
import PokemonCard from './PokemonCard';
import {
    PokemonListData,
    PokemonListVars,
    POKEMONS_LIST,
} from '../utils/queries';

const PokemonList: React.FC = (props) => {
    const { loading, data, fetchMore } = useQuery<
        PokemonListData,
        PokemonListVars
    >(POKEMONS_LIST);
    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {data?.pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemonData={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;
