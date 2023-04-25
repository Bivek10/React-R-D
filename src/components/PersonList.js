import React from "react";
import { getImageUrl } from "./imageutils";

function RenderPersonList(props) {
  const listItems = props.data.map((item) => {
    return (
      <li key={item.id}>
        <img src={getImageUrl(item)} alt={item.name} />
        <p>
          <b>{item.name}</b> {" " + item.profession + " "} is known for{" "}
          {item.accomplishment}
        </p>
      </li>
    );
  });
  return <ul>{listItems}</ul>
}

export default RenderPersonList;
