import Link from 'next/link';
import { HeaderWrapper } from '../styles';

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Link href={'/'}>Pokemon</Link>
            <Link href={'/pokemon-list'}>My Pokemon List</Link>
        </HeaderWrapper>
    );
};

export default Header;
