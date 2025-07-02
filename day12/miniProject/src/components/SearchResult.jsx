// react re-render's component
//    EITHER on "state" change
//    OR on "props" change

import { useEffect, useState } from "react";
import ProductResultCart from "./ProductResultCard";
const SearchResults = (props) => {
  const [results, setResults] = useState([]);
  const { searchQuery } = props; // a
  const [page,setPage]=useState(1);
  const [total,setTotal]=useState(0);

  const limit=4;

  const getSearchResults = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}&skip=${limit*(page-1)}&limit=${limit}`
    );
    const data = await response.json();
    console.log(data);
    setResults(data.products);
    setTotal(data.total)
  };

  useEffect(() => {
    const id=setTimeout(getSearchResults,1000); // debounce API call
    return ()=>clearTimeout(id);
  }, [searchQuery,page]); // dependency array: initial render only
  

  return (
    <div>
      <h2>{searchQuery}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {results.map((elem) => {
          // return <ProductResultCard key={elem.id} {...elem} />;
          return (
            <ProductResultCart
              key={elem.id} // help react to identify each card uniquely
              id={elem.id}
              title={elem.title}
              price={elem.price}
              rating={elem.rating}
              thumbnail={elem.thumbnail}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-10 gap-2">
        <button className="bg-amber-500 rounded-sm p-1 px-2" onClick={()=>{
          if(page>1) setPage(page-1);
        }} >PREV</button>
        <p className="underline">{page}</p>
        <button className="bg-amber-500 rounded-sm p-1 px-2" onClick={()=>{

          if(total>=limit*(page-1)+limit)setPage(page+1);

          else alert('limit full')
        }
          }>NEXT</button>
      </div>
    </div>
  );
};

export default SearchResults;
