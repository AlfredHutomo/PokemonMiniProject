import styled from '@emotion/styled';

const mq = Object.freeze({
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1280px)',
});

const colors = Object.freeze({
    primary: '#FF6868',
    secondary: '',
});

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 20px;

    height: 8vh;

    width: 100%;
    max-width: 640px;

    background-color: ${colors.primary};

    > a {
        text-decoration: none;
        font-size: 2.4rem;
        font-weight: bold;

        color: white;

        &:active {
            text-decoration: underline;
        }
    }
`;

export const Container = styled.div`
    margin: 0 auto;
    max-width: 640px;
    height: 100vh;
`;

export const ContentWrapper = styled.div`
    padding-bottom: 5vh;
`;

export const ListWrapper = styled.div`
    height: 100%;
`;

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    row-gap: 10px;
`;

export const Card = styled.div`
    border: solid 2px grey;
    border-radius: 5px;

    margin: 0 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
`;

export const Loader = styled.div`
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }
    .lds-dual-ring:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid ${colors.primary};
        border-color: ${colors.primary} transparent ${colors.primary}
            transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
