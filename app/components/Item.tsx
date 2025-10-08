import './Item.scss';

type ItemProps = {
    title?: string;
    description?: string;
    image?: string;
}

const Item: React.FC<ItemProps> = ({title = "Item", description = "Descrição do item", image}) => {
    return (
        <div className="item-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Item