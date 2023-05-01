import React, { memo } from 'react';

import { Logo, LogoContainer } from './style';

interface ILogoComponentProps {
    source: string;
}

const LogoComponent = memo(({ source }: ILogoComponentProps) => {
    return (
        <LogoContainer>
            <Logo src={source} alt="company_logo" />
        </LogoContainer>
    );
});

export default LogoComponent;
