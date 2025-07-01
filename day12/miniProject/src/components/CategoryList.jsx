import { useEffect, useState } from "react";

const CategoryList = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch("https://dummyjson.com/products/categories");
        const result = await response.json();
        console.log(result);
        setData(result);
    };

    useEffect(() => {
        getData();
    }, []); // this use effect's call back function will only run ONCE

    return (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 m-2">
            {data.map((elem,idx) => {
                return <p key={idx} className=" p-2 rounded-lg w-40 bg-amber-300">{elem.name}</p>;
            })}
        </div>
    );
};

export default CategoryList ;