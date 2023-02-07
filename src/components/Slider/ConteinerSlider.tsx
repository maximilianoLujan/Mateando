import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ConteinerSlider(){
    return(
        <Carousel autoPlay infiniteLoop showThumbs={false} className="w-full mx-auto">
            <div className="relative">
                <img src="carousel/foto-mate.png" alt="mate amigo" />
                <h2 className="absolute">"DONDE SEA, PERO CON MATES</h2>
            </div>
            <div>
                <img src="carousel/foto-termo.png" alt="mate y termo"/>
            </div>
            <div>
                <img src="carousel/fotoo-mate.png" alt="mate"  />
            </div>
        </Carousel>
    )
}