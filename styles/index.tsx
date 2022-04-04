import styled from '@emotion/styled';

const mq = {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1280px)',
};

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
