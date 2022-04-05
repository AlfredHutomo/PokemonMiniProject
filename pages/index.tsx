import type { NextPage } from 'next';

import Layout from '../components/Layout';
import PokemonList from '../components/PokemonList';

const Home: NextPage = () => {
    return (
        <Layout>
            <h1>PokeList</h1>
            <PokemonList />
        </Layout>
    );
};

export default Home;
