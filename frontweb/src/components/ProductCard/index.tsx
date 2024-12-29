import ProductBtnIcon from 'components/ProductButnIcon';
import './styles.css';

import ProductImg from 'assets/images/car-card 1.png';

const ProductCard = () => {
  return (
    <div className="home-card">
      <div className="base-card product-card">
        <div className="img-container">
          <img src={ProductImg} alt="Nome do Produto" />
        </div>
        <div className="productInfo-container">
          <h1>Audi Supra TT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div className="btn btn-container">
          <ProductBtnIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
