function FilterCheckbox({ setIsFiltered, isFiltered }) {
  function handleChange(e) {
    /* if (e.target.checked) {
       setIsFiltered(true);
       setIschecked(true);
       localStorage.setItem('checked', JSON.stringify(true));
     } else {
       setIsFiltered(false);
       setIschecked(false);
       localStorage.removeItem('checked');
     }*/
    e.target.checked ? setIsFiltered(true) : setIsFiltered(false);
  }

  /*useEffect(() => {
    const checked = localStorage.getItem('checked');
    if (checked) {
      setIschecked(true);
    } else {
      setIschecked(false);
    }
  }, [localStorage]);*/

  return (
    <div className='filter'>
      <div className='filter__container'>
        <input
          className='filter__checkbox'
          type='checkbox'
          onChange={handleChange}
          checked={isFiltered}
        ></input>
        <p className='filter__title'>Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;
