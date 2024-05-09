// Tools
import { useState, useEffect } from "react";


function getStorageValue(key, defaultValue) { 
    // This function searches for any saved data on local storage.
    const savedData = localStorage.getItem(key);
    const startingData = savedData ? JSON.parse(savedData) : null;

    return startingData !== null ? startingData : defaultValue;
}

const useLocalStorage = (key, defaultValue) => {
    /* 
    This function creates a custom hook for use in
    creating new states that will have updated data that
    needs to be saved in local storage and later called upon.
    */

    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export { useLocalStorage };