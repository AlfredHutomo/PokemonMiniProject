import Image from 'next/image';

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
                <Image
                    src={'/assets/ActivePrevButton.svg'}
                    alt='Previous Button'
                    width={70}
                    height={70}
                />
            </button>
            <span>{currentPage + 1}</span>
            <button onClick={handleNextPage}>
                <Image
                    src={'/assets/ActiveNextButton.svg'}
                    alt='Previous Button'
                    width={70}
                    height={70}
                />
            </button>
        </nav>
    );
};

export default Nav;
