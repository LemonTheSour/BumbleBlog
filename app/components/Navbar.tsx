import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/Rx";
import Categories from "../data/categories.json"

export default function Navbar() {
  return (
    <div>
        <div className="h-14 w-full px-4 bg-chardonnay flex flex-row items-center justify-between">
            <Link href='/'>BumbleBlog</Link>
            <div>SearchBar</div>
            <Link href='/login'>login</Link>
        </div>
        <div className="h-10 w-full px-4 bg-atomic-tangerine flex flex-row items-center space-x-4">
            <button><RxHamburgerMenu size={28}/></button>
            {Categories.map((categories:any) => (
                <Link key={categories.key} href={categories.link} className="font-semibold font text-xl">{categories.category}</Link>
            ))}
        </div>
    </div>
  )
}