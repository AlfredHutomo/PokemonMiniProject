import { useQuery } from '@apollo/client';
import { pokemonNoFormat } from '@/utils/index';
import { PokemonData, POKEMON_DATA } from '@/utils/queries';

const PokemonDetail = ({ pokemonId }) => {
    const { loading, data } = useQuery(POKEMON_DATA, {
        variables: { pokemonId },
    });

    if (loading) return <div>is Loading</div>;

    if (data?.pokemon_data.length === 0) return <div>Pokemon not found</div>;

    const { id, name, types, moves } = data?.pokemon_data[0];

    return <div>{pokemonNoFormat(id)}</div>;
};

export default PokemonDetail;
