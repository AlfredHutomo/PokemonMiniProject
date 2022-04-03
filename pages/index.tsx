import { useQuery } from '@apollo/react-hooks';
import type { GetServerSideProps, NextPage } from 'next';

import Layout from '../components/Layout';
import PokemonList from '../components/PokemonList';
import { Container } from '../styles';

const Home: NextPage = () => {
    return (
        <Container>
            <Layout>
                <h1>PokeList</h1>
                <PokemonList />
            </Layout>
        </Container>
    );
};

export default Home;
