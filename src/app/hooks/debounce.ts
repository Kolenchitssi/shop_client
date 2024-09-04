import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number = 300): string {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

// How this use:

/* 
const [text, setText]=useState('');
const debounced = useDebounce(text, 500);

useEffect(()=>{
	console.log('debounced')
dispatch(fetchText(text))

},[debounced])

*/
