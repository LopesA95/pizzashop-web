import { api } from '@/lib/axios'

export type GetPopularProductsResponse = {
  products: string,
  amount: number,
}[]

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsResponse>('/metrics/pupular-products',

  )
  return response.data
}
