import { useQuery } from '@apollo/client';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Layout from '../../components/Layout';
import PokemonDetail from '../../components/PokemonDetail';
import {
    IPokemonDetailData,
    IPokemonDetailVars,
    POKEMON_DATA,
} from '../../utils/queries';

interface IQueryParams extends ParsedUrlQuery {
    no: string;
}

const PokemonDetailPage: NextPage = () => {
    const router = useRouter();
    const { no } = router.query as IQueryParams;

    return (
        <Layout>
            <PokemonDetail pokemonId={+no} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { no } = context.params as IQueryParams;

    return {
        props: {
            pokemonId: no,
        },
    };
};

export default PokemonDetailPage;
