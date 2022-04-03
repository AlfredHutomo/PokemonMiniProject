import styled from '@emotion/styled';
import Link from 'next/link';

const NavigationWrapper = styled.div`
    position: fixed;
    bottom: 0;
    overflow: hidden;

    display: flex;
    justify-content: space-evenly;
    padding: 40px;

    width: 100%;
    max-width: 640px;

    background-color: #de3065;

    > a {
        text-decoration: none;

        color: white;
    }
`;

const Navigation: React.FC = () => {
    return (
        <NavigationWrapper>
            <Link href={'/'}>Pokemons</Link>
            <Link href={'/my-pokemons'}>My Pokemons</Link>
        </NavigationWrapper>
    );
};

export default Navigation;
