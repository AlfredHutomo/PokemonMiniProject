import { Container, ContentWrapper } from '../styles';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
    return (
        <Container>
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
        </Container>
    );
};

export default Layout;
