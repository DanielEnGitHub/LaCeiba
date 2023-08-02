import React from 'react';
import SideBar from '../../components/Layout';

const Main = ({children}) => {
    return <SideBar>{children}</SideBar>;
}

export default Main;