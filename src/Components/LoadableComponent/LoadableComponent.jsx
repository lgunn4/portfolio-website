import React, {useState} from 'react';
import {SyncLoader} from "react-spinners";
import './LoadableComponent.css';
import {HEADER_IMAGE_URL} from "../../Assets/Constants";

export const LoadableComponent = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const loadingComponent = (
        <div className="loadable-component">
            <SyncLoader isLoading={isLoading} color="black"/>
            <img alt='hidden-header-photo'
                 hidden={true}
                 src={HEADER_IMAGE_URL}
                 onLoad={() => {
                     console.log('loaded');
                     setIsLoading(false);
                 }}/>
        </div>);
    return isLoading ? loadingComponent : children;
}