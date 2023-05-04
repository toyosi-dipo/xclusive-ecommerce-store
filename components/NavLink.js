import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ href, title }) {
  const pageRoute = useRouter().asPath;

  return (
    <li className="group">
      <Link href={href} className={`mb-1 inline-block px-2 hover:text-text1`}>
        {title}
      </Link>
      <div
        className={`h-1 bg-black duration-200 group-hover:w-full ${
          pageRoute === href ? "w-full" : "w-0"
        }`}
      ></div>
    </li>
  );
}
