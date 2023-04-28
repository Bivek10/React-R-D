import React from "react";

import { UserContext, AddressContext } from "../App";
function ComponentD() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <AddressContext.Consumer>{
            (address)=>{
                return <div>
                    <ul>
                        <li>
                            Username: {user}
                        </li>
                        <li>
                            Address: {address}
                        </li>

                    </ul>
                </div>
            }
            }</AddressContext.Consumer>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentD;
