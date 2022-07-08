import { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Javascript');

    // type: /videos,   /search,    /images
    const getResults = async (type) => {
        setIsLoading(true);

        const res = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '87e73812d6msh44c28339374eb4bp1a11edjsn6acb94a3fe4a',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            },
        });

        const data = await res.json();

        if (type.includes('/news')) {
            setResults(data.entries);
        } else if (type.includes('/image')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }
        setIsLoading(false);
    };

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext = () => useContext(ResultContext);
