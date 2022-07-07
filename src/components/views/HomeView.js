import React, { useState } from "react";
import { NewUserContainer } from "../containers/index";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { useDb } from "../../contexts/DbContext";

const HomeView = (props) => {
    // const { email } = props;

    const { signout, currentUser } = useAuth();
    const { userInfo, handlelogout } = useDb();

    async function handleSignout() {
        handlelogout();
        await signout();
    }

    if (userInfo && userInfo.hasLoggedIn) {
        return (
            <div>
                {console.log(userInfo)}
                <h1>Home {currentUser.email}</h1>
                <button onClick={handleSignout}>Signout</button>
            </div>
        );
    } else if (userInfo && ~userInfo.hasLoggedIn) {
        return (
            <div>
                <NewUserContainer />
            </div>
        )
    } else {
        {
            return <div>Loading...</div>
        }
    }
}

export default HomeView;