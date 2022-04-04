import { ContentWrapper } from '../styles';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
        </>
    );
};

export default Layout;
