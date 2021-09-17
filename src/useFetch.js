import {useEffect, useState} from "react";

 const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState (null)


    useEffect(() => {
        const abort = new AbortController();

       setTimeout(() => {
           fetch(url, {signal: abort.signal})
               .then(res => {
                   if(!res.ok){
                       throw Error("couldnt fetch data from Server")
                   }
                   return res.json();
               })
               .then(data => {
                   setIsPending(false);
                   setData(data);
               })
               .catch(error => {
                   if (error.name === 'AbortError'){
                       console.log('fetch Aborted')
                   } else {
                       setIsPending(false)
                       setError(error.message)
                   }
               });
       }, 100)
        return () => abort.abort();
    },[url])

     return {data, isPending, error}
}

export default useFetch;
