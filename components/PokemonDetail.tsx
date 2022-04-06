import { useQuery } from '@apollo/client';
import { pokemonNoFormat } from '../utils';
import {
    IPokemonDetailData,
    IPokemonDetailVars,
    PokemonData,
    POKEMON_DATA,
} from '../utils/queries';

interface PokemonDetailProps {
    pokemonId: number;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemonId }) => {
    const { loading, data } = useQuery<IPokemonDetailData, IPokemonDetailVars>(
        POKEMON_DATA,
        {
            variables: { pokemonId },
        }
    );

    if (loading) return <div>is Loading</div>;

    if (data?.pokemon_data.length === 0) return <div>Pokemon not found</div>;

    const { id, name, types, moves } = data?.pokemon_data[0] as PokemonData;

    return <div>{pokemonNoFormat(id)}</div>;
};

export default PokemonDetail;
