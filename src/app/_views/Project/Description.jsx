import Modal from "@/app/_components/Modal";

function Description({ data }) {
  return (
    <section className="min-h-screen p-6">
      <h2 className="font-display text-h4 text-center mb-4 lg:text-h2">
        Description
      </h2>
      <p>{data.detail_descrip_1}</p>
      <p>{data.detail_descrip_2}</p>
      <Modal />
    </section>
  );
}

export default Description;
