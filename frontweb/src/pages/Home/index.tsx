import { ReactComponent as MainImage } from 'assets/images/main-image.svg';

import './styles.css';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content-container-1">
        <div className="home-content-container-1-text">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-content-container-1-image">
          <MainImage />
        </div>
      </div>
      <div className="base-card home-content-container-2">
        <Link to="/products">
          <ButtonIcon />
        </Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
