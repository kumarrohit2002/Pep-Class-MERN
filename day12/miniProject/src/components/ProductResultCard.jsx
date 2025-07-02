import { useNavigate } from "react-router";

const ProductResultCard = (props) => {
    const { title,id, price, thumbnail,rating } = props;
    const navigate=useNavigate();

    const handelViewProduct=()=>{
        navigate(`/${id}/view`)
    }

    return (
        <div className="bg-gray-50 shadow-lg rounded-lg p-4" onClick={handelViewProduct}>
            <img src={thumbnail} />
            <p>{title}</p>
            <div className="flex justify-between">
              <p>Rs. {price * 85}</p>
              <p>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default ProductResultCard ;