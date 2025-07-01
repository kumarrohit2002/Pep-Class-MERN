// tailwind 1: 0.25rem === 4px
// tailwind 4: 1rem === 16px

import { Link, useNavigate } from "react-router";

// p-4   |  m-4 ---> top & left & right & bottom

// px-4  |  mx-4 ---> left & right
// py-4  |  my-4 ---> top & bottom

// pt-4  |  mt-4 ---> top
// pb-4  |  mb-4 ---> bottom
// pl-4  |  ml-4 ---> left
// pr-4  |  mr-4 ---> right

const Header = (props) => {
    const navigate=useNavigate();
    const {text,handleSearchText}=props;
    const searchHandle=(e)=>{
        navigate('/search');
    }

    return (
        <header className="flex bg-black p-4 justify-between ">
            <div>
                <Link to={'/'} className="text-amber-300">Shopping App</Link>
            </div>
            <div>
                <input className="border-1 border-amber-900 p-1 text-cyan-300" value={text} type="text" onChange={(e)=>{handleSearchText(e.target.value);}}  />
                <button className="border-1 border-amber-900 p-1 text-blue-400" onClick={searchHandle}>Search</button>
            </div>
            <div>   
                <div className="h-8 w-8 rounded-full bg-purple-700"></div>
            </div>
        </header>
    );
};

export default Header ;