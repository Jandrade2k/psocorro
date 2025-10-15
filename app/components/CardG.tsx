import './CardG.scss';

type CardGProps = {
    title: string;
    content: string;
    img: string;
    dir: "reverse" | "right";
}

const CardG: React.FC<CardGProps> = ({ title, content, img, dir }) => {
    return (
        <div className={'card-g'}>
            <h2>{title}</h2>

            <div className={`content ${dir}`}>
                <p >{content}</p>
                <img src={img} alt={title} />
            </div>

        </div>
    );
}

export default CardG;