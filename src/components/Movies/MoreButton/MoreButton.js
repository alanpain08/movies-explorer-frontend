function MoreButton({ handleAddMovie }) {
  return (
    <section className='more-button'>
      <button
        type='button'
        className='more-button__container'
        onClick={handleAddMovie}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoreButton;
