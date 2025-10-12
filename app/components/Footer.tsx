import './Footer.scss';
import {Facebook, X, Instagram, Youtube, PictureInPicture2, Linkedin, Phone, Mail} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='siga-nos'> 
        <h4>Siga-nos</h4>
        <ul className='social'>
          <li>
            <Facebook color='#800020' size={64} />
          </li>
          <li>
            <X color='#800020' size={64} />
          </li>
          <li>
            <Instagram color='#800020' size={64} />
          </li>
          <li>
            <Youtube color='#800020' size={64} />
          </li>
          <li>
            <PictureInPicture2 color='#800020' size={64} />
          </li>
          <li>
            <Linkedin color='#800020' size={64} />
          </li>
          <li>
            <Linkedin color='#800020' size={64} />
          </li>
        </ul>
      </div>
      <div className='navigation'>
        <h5>Navegação</h5>
        <ul>
          <li><a href="">Relógios de ponto</a></li>
          <li><a href="">Controles de acesso</a></li>
          <li><a href="">Sistemas</a></li>
          <li><a href="">Contato</a></li>
          <li><a href="">Sobre nós</a></li>
          <li><a href="">Suporte</a></li>
          <li><a href="">FAQ</a></li>
        </ul>
        <iframe width="80" src="https://revenda.secullum.com.br/selo-oficial/7368"></iframe>
      </div>
      <div className='contato'>
        <h4>
          <Phone />
          <a href="">(16) 3011 - 4096</a> 
        </h4>
        <h4>
          <Mail />
          <a href="">atendimento@pontosocorro.com.br</a>
        </h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.119593732902!2d-47.806836324963996!3d-21.187407580501926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bee012ea53d7%3A0x6a1ad699689819d8!2sPonto%20Socorro%20Controles%20de%20Acesso%20e%20Rel%C3%B3gios%20de%20Ponto!5e0!3m2!1spt-BR!2sbr!4v1758407293867!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
      </div>
    </footer>
  );
};

export default Footer;
