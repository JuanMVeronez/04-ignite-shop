import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react';

import shirt0 from '../assets/products/Shirt-0.png'
import shirt1 from '../assets/products/Shirt-1.png'
import shirt2 from '../assets/products/Shirt-2.png'
import shirt3 from '../assets/products/Shirt-3.png'

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt0} alt="Camiseta 0" width={520} height={480} />
        <footer>
          <strong>Camiseta 0</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt="Camiseta 1" width={520} height={480} />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="Camiseta 2" width={520} height={480} />
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="Camiseta 3" width={520} height={480} />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
