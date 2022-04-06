import {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../components/Layout';
import PokemonDetail from '../../components/PokemonDetail';
import { client } from '../../utils/apollo';
import {
    IPokemonDetailData,
    IPokemonDetailVars,
    PokemonData,
    POKEMON_DATA,
} from '../../utils/queries';

interface IQueryParams extends ParsedUrlQuery {
    no: string;
}

const PokemonDetailPage: NextPage = ({
    pokemonData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { name, a } = pokemonData;
    const router = useRouter();
    const { no } = router.query as IQueryParams;

    return (
        <Layout>
            <PokemonDetail pokemonId={Number(no)} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { no } = context.params as IQueryParams;

    const { data } = await client.query<IPokemonDetailData, IPokemonDetailVars>(
        {
            query: POKEMON_DATA,
            variables: {
                pokemonId: Number(no),
            },
        }
    );

    const pokemonData: PokemonData = data.pokemon_data[0];

    return {
        props: {
            pokemonData,
        },
    };
};

export default PokemonDetailPage;
