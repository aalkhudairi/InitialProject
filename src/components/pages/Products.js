import React, {useState, useEffect} from 'react'; 
import '../../App.css';





const useFetch = (url) => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect ( async () => {
    const response = await fetch(url);
    const data = await response.json(); 
    const [item] = data.results;
    setData(item); 
    setLoading(false); 
  }, []); 
  return {data, loading}; 
}
export default function products() {

  const [count, setCount] = useState(0); 
  const {data, loading} = useFetch("https://api.randomuser.me/");


  return (
    <div>
      
      {loading ? <div>...loading</div> :  <div>{data.name.first}</div>}
    </div>
  );
}