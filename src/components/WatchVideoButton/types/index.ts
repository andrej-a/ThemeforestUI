import React from 'react';

interface WatchVideoButtonProps {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    type?: 'primary' | 'secondary';
}

export default WatchVideoButtonProps;
