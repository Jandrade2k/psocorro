import "./Slide.scss"

type SlideProps = {
    imgSrc?: string;
    title?: string;
    description?: string;
    buttonText?: string;
}

const Slide: React.FC<SlideProps> = ({ imgSrc, title, description, buttonText }) => {
    return (
        <div className="slide">
            <div className="slide-image">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="slide-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <button>{buttonText}</button>
            </div>
            </div>
    )
}
export default Slide