import styled from '@emotion/styled';
import Link from 'next/link';

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
    overflow: hidden;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    height: 5vh;

    width: 100%;
    max-width: 640px;

    background-color: #de3065;

    > a {
        text-decoration: none;

        color: white;
    }
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <Link href={'/'}>Pokemon</Link>
            <Link href={'/my-pokemon-list'}>My Pokemon List</Link>
        </FooterWrapper>
    );
};

export default Footer;
