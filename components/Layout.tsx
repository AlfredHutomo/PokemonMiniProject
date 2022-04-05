import { Container, ContentWrapper } from '../styles';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
    return (
        <Container>
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
        </Container>
    );
};

export default Layout;
