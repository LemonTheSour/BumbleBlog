import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col">
        <div className="h-10 w-full flex items-center bg-chardonnay">
            <Link href='/'>BumbleBlog</Link>
            <Link href='/login'>login</Link>
        </div>
        <div className="h-7 pl-2 bg-atomic-tangerine w-full">
            <div className='flex-start space-x-2'>
                <Link href='/categories'>Categories</Link>
                <Link href='/newcategories'>New Categories</Link>
            </div>
        </div>
    </div>
  )
}