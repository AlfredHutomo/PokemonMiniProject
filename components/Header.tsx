import Link from 'next/link';
import { HeaderWrapper } from '../styles';

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Link href={'/'}>Poké-list</Link>
            <Link href={'/pokemon-list'}>My List</Link>
        </HeaderWrapper>
    );
};

export default Header;
