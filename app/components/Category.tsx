import Image from "next/image"

interface CategoryProps {
    title: String,
    imageSource: string
}

export default function Category(props: CategoryProps){
    return(
        <div className="flex flex-col items-center justify-center p-5">
            <button>
                <Image 
                src={props.imageSource}
                width={150}
                height={150}
                alt="Books"
                />
                <h1 className="font-semibold">{props.title}</h1>
            </button>
        </div>
    )
}