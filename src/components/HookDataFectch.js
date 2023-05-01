import axios from "axios";
import React, { useEffect, useState } from "react";

function HookDataFetch() {
  const [networkdata, setData] = useState([]);
  const [postid, setID] = useState(1);

  const apiurl = `https://jsonplaceholder.typicode.com/posts/${postid}`;

  useEffect(() => {
    axios
      .get(apiurl)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postid]);

  return (
    <div>
      <input type="text" value={postid}  onChange={e=>setID(e.target.value)} />
      <div>
        {networkdata.title}
      </div>
      {/* <h1>
        <ul>
          {networkdata.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
      </h1> */}
    </div>
  );
}

export default HookDataFetch;
