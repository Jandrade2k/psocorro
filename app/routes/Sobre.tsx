import React from 'react';
import Footer from '~/app/components/Footer';
import Header from '~/app/components/Header';
import CardG from '~/components/CardG';
import './Sobre.scss';

const Sobre: React.FC = () => {
    return (
        <div>
            <Header theme='bordo'></Header>
            <div className='image-sobre'>
                <h1>Quem Somos</h1>
            </div>
            <CardG title="Nossa História" content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non sollicitudin nibh, eu accumsan lorem. Integer vulputate blandit commodo. Nunc cursus nunc non imperdiet semper. Nulla vel urna et arcu dapibus ultrices in sed leo. Donec maximus felis imperdiet, sollicitudin velit sed, egestas arcu. Praesent euismod felis a nibh ultricies hendrerit. Donec condimentum elementum metus in vehicula. Phasellus ultrices eget metus efficitur gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam felis ipsum, tincidunt ac massa dignissim, fringilla tincidunt eros.\n\nCurabitur at erat a lacus sagittis ultrices. Integer ligula orci, fermentum et consectetur sit amet, lacinia eu elit. Mauris efficitur aliquam felis, sit amet elementum metus sodales nec. Suspendisse pharetra consequat risus, sit amet luctus enim sagittis eget. Nam iaculis elit vel dolor faucibus, at convallis nunc consequat. Nam ac ante posuere, dignissim arcu a, ultricies dui. Quisque scelerisque metus in metus imperdiet euismod. Ut varius placerat efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam eu risus a neque mollis auctor. Morbi non elit arcu.\n\nfeugiat tortor. Suspendisse fermentum eleifend quam quis luctus. Sed at varius ipsum. Vivamus porttitor malesuada libero, scelerisque tempus magna. Phasellus pretium mi id felis rhoncus vulputate. Quisque elementum magna eu ante iaculis, eu dignissim velit maximus. Nunc efficitur neque ac elementum malesuada.`} img="/assets/ponto-socorro-frente.jpg" dir="right" />
            <Footer></Footer>
        </div>
    );
};

export default Sobre;