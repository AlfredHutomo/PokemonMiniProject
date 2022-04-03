import { Card } from '../styles';
import { PokemonList } from '../utils/queries';

interface PokemonCardProps {
    pokemonData: PokemonList;
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
    const { name, types, id } = props.pokemonData;
    return (
        <Card>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={`Pokemon ${name}`}
            />
            <h2>{name}</h2>
        </Card>
    );
};

export default PokemonCard;
