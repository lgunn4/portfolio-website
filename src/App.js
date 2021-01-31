import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import Layout from './Layout';
import "./App.css"
import {Placeholder, Preloader} from "react-preloading-screen";
import {LoadingComponent} from "./Components/LoadingComponent/LoadingComponent";


function App() {
  return (
      <div className="page-wrap">
            <Layout />
            <Preloader>
                <Placeholder>
                    <LoadingComponent />
                </Placeholder>
            </Preloader>
      </div>
  );
}

export default App;
