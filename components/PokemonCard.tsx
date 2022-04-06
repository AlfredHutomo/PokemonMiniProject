import Image from 'next/image';
import Link from 'next/link';
import { Card } from '../styles';
import { pokemonNoFormat } from '../utils';
import { PokemonList } from '../utils/queries';

interface PokemonCardProps {
    pokemonData: PokemonList;
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
    const { name, id } = props.pokemonData;
    return (
        <Link href={`/pokemon/${id}`} passHref>
            <Card>
                <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={`Pokemon ${name}`}
                    width={75}
                    height={75}
                />
                <h3>{`${pokemonNoFormat(id)} ${name}`}</h3>
            </Card>
        </Link>
    );
};

export default PokemonCard;
