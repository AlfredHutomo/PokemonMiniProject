interface NavProps {
    currentPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Nav: React.FC<NavProps> = ({ currentPage, setPage }) => {
    const handlePrevPage = () => {
        setPage((prevVal) => prevVal - 1);
    };

    const handleNextPage = () => {
        setPage((prevVal) => prevVal + 1);
    };
    return (
        <nav>
            <button disabled={!currentPage} onClick={handlePrevPage}>
                Previous
            </button>
            <span>{currentPage + 1}</span>
            <button onClick={handleNextPage}>Next</button>
        </nav>
    );
};

export default Nav;
