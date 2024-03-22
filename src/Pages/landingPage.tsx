import { useContext } from 'react';
import NavBar  from '../Components/navBar';
import { user, AuthContextType, post } from '../types';
import { AuthContext } from '../App';
import React from 'react';
import { useEffect, useState } from 'react';
import { serverUrl } from '../App';
import axios from 'axios'

const LandingPage: React.FC = () => {


    return (
        <div>
            <div className="top-0">
                <NavBar></NavBar>
            </div>
        </div>
    );
}

export default LandingPage;