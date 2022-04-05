import type { NextPage } from 'next';

import Layout from '../components/Layout';
import PokemonList from '../components/PokemonList';

const Home: NextPage = () => {
    return (
        <Layout>
            <PokemonList />
        </Layout>
    );
};

export default Home;
