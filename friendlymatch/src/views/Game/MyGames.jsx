import React  from "react";

import "./MyGames.css";
import { withFirebase } from "../../services";

function MyGames({firebase}) {
    
    return (
        <>
        <div>
            MyGames
        </div>
        </>
    );
}

export default withFirebase(MyGames);