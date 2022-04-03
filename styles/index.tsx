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

export const Card = styled.div`
    border: solid 2px grey;
    border-radius: 1rem;
    margin: 2rem;

    display: flex;
    align-items: center;
`;
