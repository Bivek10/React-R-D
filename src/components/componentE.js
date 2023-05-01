import React, { useContext } from "react";

import { UserContext, AddressContext } from "../App";

function ComponentE() {
    const username= useContext(UserContext)
    const address= useContext(AddressContext)

    return ( 
        <div>
            {username}--{address}

        </div>
     );
}

export default ComponentE;