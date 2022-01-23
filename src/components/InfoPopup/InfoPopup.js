function InfoTooltip(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""
        }`}
    >
      <div className="popup__info">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        />

        <h2 className="popup__info-title">К сожалению, невозможно сохранить карточку</h2>
      </div>
    </section>
  );
}

export default InfoTooltip;
