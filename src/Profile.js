// //  Conditional Rendering ---IF Condition

import { useState } from "react";

function Profile()
{
    const [loggedIn, setLoggedIn]=useState(false)

    return (
        <div>
            {loggedIn?<h1>Welcome Tanmay</h1>:<h1>Ram Ram</h1>}
        </div>
    )
}

export default Profile;