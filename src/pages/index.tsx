import Image from "next/future/image";
import { HomeContainer, Product } from "../styles/pages/home";
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} alt="Camiseta 0" width={520} height={480} />
          <footer>
            <strong>{ product.name }</strong>
            <span>{ product.price }</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps<{products: IProduct[]}> = async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products: IProduct[] = data.map(product => {
    const price = product.default_price as Stripe.Price;
    const priceFormatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100);

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatted,
    };
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}