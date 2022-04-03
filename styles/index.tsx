import styled from '@emotion/styled';

const mq = {
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1280px)',
};

export const Container = styled.div`
    margin: 0 auto;
    outline: solid 2px;
    max-width: 640px;
    height: 100vh;
`;
