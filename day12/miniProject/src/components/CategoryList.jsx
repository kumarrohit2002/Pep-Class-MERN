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
        <div className="flex flex-col gap-1">
            {data.map((elem,idx) => {
                return <p key={idx} className=" p-2 rounded-lg bg-amber-300">{elem.name}</p>;
            })}
        </div>
    );
};

export default CategoryList ;