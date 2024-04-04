import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FlightInfo from './pages/FlightInfo';
import LandingView from './pages/LandingView';



export default function AppRoutes(props){


    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<LandingView/>} />
                <Route path='/view-flight-info' element = {<FlightInfo/>} />
            </Routes>
        
        
        </BrowserRouter>

    )

}