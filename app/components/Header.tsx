import { Raleway_Dots } from "next/font/google"

const ralewaydots = Raleway_Dots({
        weight: '400',
        subsets: ['latin']
    })

export default function Header(heading: {text: String}){

    return(
        <div className="w-full flex justify-center">
            <div className="p-6 text-7xl text-center border-black border-b-2">
                <h1 className={ralewaydots.className}>{heading.text}</h1>
            </div>
        </div>
    )
}