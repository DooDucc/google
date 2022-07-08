import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <MutatingDots type="Puff" color="#00BFFF" height="550px" width="80px" />
        </div>
    );
};

export default Loading;
