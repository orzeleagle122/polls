import React from 'react';
import {useDispatch, useSelector} from "./redux/store";
import SignIn from "./pages/SignIn";
import MainTemplate from "./components/template/MainTemplate";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {

    return (
        <>
            <Router><MainTemplate/></Router>


        </>
    );
};

export default App;