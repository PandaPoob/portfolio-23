import Image from "next/image";

function IconList({ list }) {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {list.map((icon) => (
        <figure key={icon.label} className="grid text-center gap-1">
          <figcaption>{icon.label}</figcaption>
          <Image
            src={`/tech_icons/${icon.img}`}
            width={100}
            height={100}
            alt={icon.label}
          />
        </figure>
      ))}
    </div>
  );
}

export default IconList;
