// react re-render's component
//    EITHER on "state" change
//    OR on "props" change

import { useEffect, useState } from "react";
import ProductResultCart from './ProductResultCard'
const SearchResults = (props) => {
    const [results, setResults] = useState([]);
    const { searchQuery } = props; // a

    const getSearchResults = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
        const data = await response.json();
        setResults(data.products);
    };

    useEffect(() => {
        getSearchResults();
    }, [searchQuery]); // dependency array: initial render only

    return (
        <div>
            <h2>{searchQuery}</h2>
            <div className="flex flex-col gap-6">
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

export default SearchResults ;