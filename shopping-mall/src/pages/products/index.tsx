import { useQuery } from "react-query"
import { fetcher, QUERY_KEYS } from "../../queryClients"

const ProductList = () => {
  const {data} = useQuery(QUERY_KEYS.PRODUCTS, () => {
    return fetcher({method: 'GET', path: '/products'})
  })

  console.log('data : ', data)


  return (<div>상품목록</div>)
}

export default ProductList