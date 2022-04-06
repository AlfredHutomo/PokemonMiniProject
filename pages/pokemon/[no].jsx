import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import PokemonDetail from '../../components/PokemonDetail';
import { client } from '../../utils/apollo';
import { POKEMON_DATA } from '../../utils/queries';

const PokemonDetailPage = ({ pokemonData }) => {
    const { name, a } = pokemonData;
    const router = useRouter();
    const { no } = router.query;

    return (
        <Layout>
            <PokemonDetail pokemonId={Number(no)} />
        </Layout>
    );
};

export const getServerSideProps = async (context) => {
    const { no } = context.params;

    const { data } = await client.query({
        query: POKEMON_DATA,
        variables: {
            pokemonId: Number(no),
        },
    });

    const pokemonData = data.pokemon_data[0];

    return {
        props: {
            pokemonData,
        },
    };
};

export default PokemonDetailPage;
