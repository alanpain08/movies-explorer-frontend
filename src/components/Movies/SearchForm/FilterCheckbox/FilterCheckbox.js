function FilterCheckbox({ setIsFiltered }) {
  function handleChange(e) {
    e.target.checked ? setIsFiltered(true) : setIsFiltered(false);
  }

  return (
    <div className='filter'>
      <div className='filter__container'>
        <input
          className='filter__checkbox'
          type='checkbox'
          onChange={handleChange}
        ></input>
        <p className='filter__title'>Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;
