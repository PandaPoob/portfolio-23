import Link from "next/link";
import Heading from "@/app/_components/Heading";

function Contact() {
  return (
    <section
      id="contact"
      className="mt-28 bg-top-grad py-24 md:pt-28 overflow-y-hidden"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-center"
      >
        <Heading title={"Get in touch"} />
        <p className="text-tag md:text-bodyS mt-4 mb-2">
          Email me at{" "}
          <Link href="mailto:frejasmith123@gmail.com" className="font-semibold">
            frejasmith123@gmail.com
          </Link>
        </p>
        <p>Or find me here:</p>
        <div className="flex gap-3 mt-2">
          <Link
            href="https://www.linkedin.com/in/freja-smith98/"
            target="_blank"
            className="group"
          >
            <svg
              className="fill-dark group-hover:fill-light group-hover:stroke-dark"
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="#201036"
                clipRule="evenodd"
                d="M1 5.44116V33.7352C1 35.0048 1.87059 37.6528 5.35294 38.0881H34.1912C35.8235 38.088 38 37.6528 38 33.7352V6.5294C38 5.07842 37.2366 1.08849 33.6471 1.08824C29.8382 1.08797 12.4265 1.08814 4.26471 1.08849C3.17647 1.08843 1 2.17636 1 5.44116Z"
                stroke="#201036"
              />
              <path
                d="M32.5588 25.0292V32.6468H27.1176V22.8527C26.5735 17.9557 21.1323 19.0439 21.1323 22.8527V32.6468H15.6912V15.2351H21.1323V17.4116C21.1323 15.2351 28.2059 13.0587 30.9265 16.3234C31.3799 16.8675 32.5588 18.19 32.5588 20.1322M32.5588 25.0292C32.5588 24.1494 32.5588 22.3086 32.5588 20.1322M32.5588 25.0292V20.1322M6.44116 15.2351V32.6468H12.4265V15.2351H6.44116ZM9.70587 6.52927C8.07351 6.52927 6.44116 7.6175 6.44116 9.79396C6.44116 12.4057 8.61763 13.0587 9.70587 13.0587C10.7941 13.0587 12.9706 12.5145 12.9706 9.79396C12.9706 7.6175 11.3382 6.52927 9.70587 6.52927Z"
                stroke="#201036"
                fill="#F2F1FF"
              />
            </svg>
          </Link>
          <Link
            href="https://github.com/PandaPoob"
            target="_blank"
            className="group"
          >
            <svg
              className="fill-dark group-hover:fill-light"
              width="40"
              height="39"
              viewBox="0 0 40 39"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1614 33.6419V37.1144C15.0436 37.5774 14.525 38.3645 13.3936 37.8089C11.9794 37.1144 6.91929 36.0032 2.43321 27.3913C-1.3655 20.099 1.72613 1 19.7577 1C24.354 1.00016 34.4659 3.57008 38.143 13.8485C39.9108 19.9834 40.1231 33.295 26.8292 37.4617C26.122 37.5775 24.7078 37.5312 24.7078 36.42C24.7078 35.0309 25.7685 30.8639 23.6471 28.4331C28.1255 27.6229 35.7389 23.5716 30.3648 13.8485C30.7183 12.9225 31.1426 10.6537 30.0112 8.98691C29.7284 8.46913 26.3577 9.92868 24.7078 10.7232C22.4684 10.3759 17.4241 9.88977 15.1614 10.7232C14.3365 10.0287 12.1917 8.7091 10.2117 8.98691C9.85817 9.79717 9.29247 11.9038 9.85817 13.8485C7.50109 17.6683 5.54471 25.9329 16.5759 28.4331C16.2223 28.6646 15.5152 29.4054 15.5152 30.5166C14.2188 31.0954 11.3431 31.6973 10.2117 29.4749C9.62246 28.5489 7.94894 26.8358 5.96899 27.3914C5.85113 27.6229 5.82756 28.1553 6.67611 28.4331C7.7368 28.7804 8.09036 29.4749 9.50461 32.2529C10.636 34.4753 13.7472 34.1049 15.1614 33.6419Z"
                stroke="#201036"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
