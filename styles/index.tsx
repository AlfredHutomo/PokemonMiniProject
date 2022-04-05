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
    justify-content: space-evenly;
    align-items: center;

    height: 5vh;

    width: 100%;
    max-width: 640px;

    background-color: ${colors.primary};

    > a {
        text-decoration: none;

        color: white;
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
    display: flex;

    flex-flow: row wrap;
    justify-content: center;
    gap: 5px;
`;

export const Card = styled.div`
    border: solid 2px grey;
    border-radius: 5px;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    flex: 0 45%;
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
