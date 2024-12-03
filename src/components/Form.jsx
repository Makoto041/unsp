const Form = ({ setWord, getPhotoData }) => {
  return (
    <form className="search-form">
      <input
        type="text"
        name="keyword"
        className="search-input"
        placeholder="e.g. cat"
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="submit" className="search-button" onClick={getPhotoData}>
        Search
      </button>
    </form>
  );
};

export default Form;
