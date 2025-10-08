import type { ReactNode } from "react";

import "./Card.scss";

type CardProps = {
    title: string;
    description: string;
    icon?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
    return (
        <div className="card">
            {icon && <div className="icon">{icon}</div>}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;
