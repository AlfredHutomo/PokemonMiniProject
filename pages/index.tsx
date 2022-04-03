import styled from '@emotion/styled';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Card = styled.div`
    max-height: 3rem;
    display: flex;
`;

const Home: NextPage = () => {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7].map((id) => (
                <Card key={id}>
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                        alt={`Pokemon ${id}`}
                        layout='fill'
                    />
                </Card>
            ))}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            pokemon: [],
        },
    };
};

export default Home;
