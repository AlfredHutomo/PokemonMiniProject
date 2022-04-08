import { Container, ContentWrapper } from '@/styles/index';
import Header from '../Header';

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
        </Container>
    );
};

export default Layout;
