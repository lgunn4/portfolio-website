import React from 'react';
import {SyncLoader} from "react-spinners";
import './LoadingComponent.css';

export const LoadingComponent = () => {
    return (
        <div className="loadable-component">
            <SyncLoader isLoading={true} color="var(--custom-orange)"/>
        </div>
    );
}