import Navbar from "./Navbar";

export default function HeaderDesktop(){
    return(
        <div className="hidden md:flex w-full items-center justify-between px-6 py-2">
            <h1 className="font-bold text-xl lg:text-3xl">MATEANDO</h1>
            <Navbar/>
        </div>
    )
}