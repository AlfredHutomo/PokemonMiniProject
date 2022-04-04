import Image from 'next/image';
import { Card } from '../styles';
import { PokemonList } from '../utils/queries';

interface PokemonCardProps {
    pokemonData: PokemonList;
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
    const { name, types, id } = props.pokemonData;
    return (
        <Card>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={`Pokemon ${name}`}
                width={100}
                height={100}
            />
            <h3>{`#${id} ${name}`}</h3>
        </Card>
    );
};

export default PokemonCard;
