import { useState, useEffect, useGlobal } from 'reactn';

const useFetch = (url) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useGlobal('isLoading');
    
    useEffect(() => {
        async function fetchUrl() {
            setIsLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setIsLoading(false);
        }
        fetchUrl();
    }, [url, setIsLoading]);
    return [data, isLoading];
}
export { useFetch };