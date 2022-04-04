interface NavProps {
    currentPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Nav: React.FC<NavProps> = ({ currentPage, setPage }) => {
    const handlePrevPage = () => {
        if (currentPage > 0) setPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setPage(currentPage + 1);
    };
    return (
        <nav>
            <button onClick={handlePrevPage}>Previous</button>
            <span>{currentPage + 1}</span>
            <button onClick={handleNextPage}>Next</button>
        </nav>
    );
};

export default Nav;
