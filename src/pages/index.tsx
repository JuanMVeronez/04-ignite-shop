import Image from "next/future/image";
import { styled } from "../styles";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt0 from '../assets/products/Shirt-0.png'
import shirt1 from '../assets/products/Shirt-1.png'
import shirt2 from '../assets/products/Shirt-2.png'
import shirt3 from '../assets/products/Shirt-3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt0} alt="Camiseta 0" width={520} height={480} />
        <footer>
          <strong>Camiseta 0</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      
      <Product>
        <Image src={shirt1} alt="Camiseta 1" width={520} height={480} />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt2} alt="Camiseta 2" width={520} height={480} />
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt3} alt="Camiseta 3" width={520} height={480} />
        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
