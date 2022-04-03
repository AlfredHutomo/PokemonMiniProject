import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            primary: string;
            secondary: string;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
