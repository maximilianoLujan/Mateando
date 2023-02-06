import HeaderMovil from "./HeaderMovil";

export default function Header(){
    return(
        <header className="fixed z-50 w-full flex justify-between items-center h-16 bg-principal">
            {/*Header para la version movil y tablet */}
                <HeaderMovil />
            {/*Header para la version desktop */}
        </header>
    )
}