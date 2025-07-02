// react re-render's component
//    EITHER on "state" change
//    OR on "props" change

import { useEffect, useState } from "react";
import ProductResultCart from "./ProductResultCard";
const SearchResults = (props) => {
  const [results, setResults] = useState([]);
  const { searchQuery } = props; // a

  const getSearchResults = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    const data = await response.json();
    console.log(data);
    setResults(data.products);
  };

  useEffect(() => {
    const id=setTimeout(getSearchResults,1000);  //resone of many api call -> debaunsing
    return ()=>clearTimeout(id);
  }, [searchQuery]); // dependency array: initial render only
  

  return (
    <div>
      <h2>{searchQuery}</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {results.map((elem) => {
          // return <ProductResultCard key={elem.id} {...elem} />;
          return (
            <ProductResultCart
              key={elem.id} // help react to identify each card uniquely
              title={elem.title}
              price={elem.price}
              rating={elem.rating}
              thumbnail={elem.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
