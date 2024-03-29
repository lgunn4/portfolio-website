import React from 'react';
import {SyncLoader} from "react-spinners";
import './LoadingComponent.css';

export const LoadingComponent = () => {
    return (
        <div className="loading-wrapper">
            <div className="loadable-component">
                <SyncLoader isLoading={true} color="black"/>
            </div>
        </div>
    );
}