import Modal from "@/app/_components/Modal";
import Heading from "@/app/_components/Heading";

function Description({ data }) {
  return (
    <section className="mx-3 my-16 md:my-28 grid justify-center">
      <div className="max-w-xl">
        <Heading title="Description" />
        <p className="mt-6">{data.detail_descrip_1}</p>
        <p className="mt-6">{data.detail_descrip_2}</p>
        {data.detail_docu_text && <Modal data={data} />}
      </div>
    </section>
  );
}

export default Description;
