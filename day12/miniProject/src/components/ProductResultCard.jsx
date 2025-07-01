const ProductResultCard = (props) => {
    const { title, price, thumbnail } = props;

    return (
        <div className="p-4 rounded-lg bg-gray-200">
            <img src={thumbnail} />
            <p>{title}</p>
            <p>Rs. {price * 85}</p>
        </div>
    );
};

export { ProductResultCard };