function Modal({ data }) {
  return (
    <div className="mt-6">
      <button>
        <span>{data.detail_docu_text}</span>
        <span className="font-semibold"> {data.detail_docu_btn}</span>
      </button>
    </div>
  );
}

export default Modal;
