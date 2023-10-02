import Link from "next/link";

function ButtonLink({title, url}){

    return <Link href={url} className="border border-dark py-2 px-6 rounded-full flex items-center justify-center w-1/2">{title}</Link>
}

export default ButtonLink;