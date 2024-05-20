import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


import { BarChart } from "lucide-react"
import {
  Pie,
  PieChart,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    product: 'Pizza Pepperoni', amount: 40
  },
  {
    product: 'Pizza Marguerita', amount: 30
  },
  {
    product: 'Pizza Portuguesa', amount: 16
  },
  {
    product: 'Pizza Calabreza', amount: 50
  },
  {
    product: 'Pizza Banana', amount: 26
  },

]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie data={data} dataKey='amount' nameKey='product' cx='50%' />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )

}
