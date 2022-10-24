import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import { useRouter } from "next/router"
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
}

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} alt={product.name} width={520} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>{ product.name }</h1>
        <span>{ product.price }</span>
        <p>{ product.description }</p>
        
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params: { id } }) => {
  const product = await stripe.products.retrieve(id, {
    expand: ['default_price'],
  });
  
  const price = product.default_price as Stripe.Price;
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price.unit_amount / 100);

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: priceFormatted,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}