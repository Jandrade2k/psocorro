const Card: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
