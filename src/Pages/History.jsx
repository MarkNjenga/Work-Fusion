import { useState,useEffect } from "react";

const History = () => {

    const [ data, setData ] = useState([]);
    const [ search, setSearch ] = useState("");

    useEffect(){
     fetch('https://json-server-vercel-ashy-nine.vercel.app/attendance')
    .then(response => response.json())
    .then((data) => setData(data) );
    .catch(error => console.error("Error fetching data:", error))
    }

    return ( 
        <div className="history">
            <h1>History</h1>

        </div>
     );
}
 
export default History;