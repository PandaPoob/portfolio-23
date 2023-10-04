import Heading from "@/app/_components/Heading";

function Description({ data }) {
  return (
    <div
      className="max-w-xl"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
    >
      <Heading title="Description" />
      <p className="mt-6">{data.detail_descrip_1}</p>
      <p className="mt-6">{data.detail_descrip_2}</p>
    </div>
  );
}

export default Description;
