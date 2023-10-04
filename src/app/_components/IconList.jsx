import Image from "next/image";

function IconList({ list }) {
  return (
    <div className="grid grid-cols-2 gap-3 justify-center items-center sm:grid-cols-3 md:flex md:flex-wrap md:gap-6 lg:gap-10">
      {list.map((icon) => (
        <figure
          key={icon.label}
          className="flex flex-col text-center justify-center items-center gap-1"
        >
          <figcaption className="font-light italic">{icon.label}</figcaption>
          <Image
            src={`/tech_icons/${icon.img}`}
            height={80}
            width={80}
            alt={icon.label}
          />
        </figure>
      ))}
    </div>
  );
}

export default IconList;
