import { useRouter } from "next/router"

export default function ProductItem() {
  const { query } = useRouter();
  const { id } = query;

  return (
    <h1>product {id}</h1>
  )
}