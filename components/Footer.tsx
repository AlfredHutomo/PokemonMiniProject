import Link from 'next/link';
import { FooterWrapper } from '../styles';

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <Link href={'/'}>Pokemon</Link>
            <Link href={'/pokemon-list'}>My Pokemon List</Link>
        </FooterWrapper>
    );
};

export default Footer;
