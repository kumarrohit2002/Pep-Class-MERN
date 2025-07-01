const ProductResultCard = (props) => {
    const { title, price, thumbnail,rating } = props;

    return (
        <div className="bg-gray-50 shadow-lg rounded-lg p-4">
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