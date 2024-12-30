import './styles.css';

const SearchBar = () => {
  return (
    <div className="base-card search-card">
      <div className="search-form">
      <form action="" >
        <input type="text" placeholder="Digite sua busca" />
      </form>
    </div>
      <button className="btn btn-content searchbtn-icon">
        <p>BUSCAR</p>
      </button>
    </div>
  );
};

export default SearchBar;
