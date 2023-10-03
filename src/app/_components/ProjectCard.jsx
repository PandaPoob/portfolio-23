import Image from "next/image";
import Link from "next/link";

function ProjectCard(props) {
  return (
    <Link
      href={`/projects/${props.slug}`}
      className="transition-transform transform hover:translate-x-1 hover:-translate-y-1"
    >
      <article className="max-w-[21.5rem] flex flex-col h-full max-h-[30rem] shadow-card">
        <div className="relative bg-light p-5 h-[45%] flex justify-center items-center">
          <div className="relative w-full h-auto min-h-[12rem]">
            <Image
              src={`/card_img/${props.card_img}`}
              fill={true}
              alt={props.title}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="h-[55%] px-5 py-3 flex flex-col">
          <p className="italic font-light">{props.created_when}</p>
          <h3 className="text-lg font-light mb-1">{props.title}</h3>
          <p className="text-bodys">{props.card_descrip}</p>
          <ul className="flex flex-wrap gap-2 mt-auto">
            {props.card_tags.map((tag) => (
              <li key={tag} className="text-bodys bg-light px-1 rounded-[4px]">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;
