import Image from "next/image"


export default function Category(title: {title: String}, image: {image: String}){
    return(
        <div className="flex flex-col items-center justify-center p-5">
            <button>
                <Image 
                src="/../public/images/books.jpg"
                width={150}
                height={150}
                alt="Books"
                />
                <h1 className="font-semibold">{title.title}</h1>
            </button>
        </div>
    )
}