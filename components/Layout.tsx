import Navigation from './Navigation';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            {children}
            <Navigation />
        </div>
    );
};

export default Layout;
