import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Layout from '../Layout';

function AppRouter() {
    return(
        
            <Routes>
                <Route path="/Home" element={<Home />}/>
            </Routes>
    )
}

export default AppRouter;