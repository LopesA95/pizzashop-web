import { DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"

export interface OrderDetailsProps { }

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 2921122-dsdada</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Anderson da silva lopes
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (99) 99999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                Andersonlopes@email.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado há</TableCell>
              <TableCell className="flex justify-end">
                há 3 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead >Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Pizza de calabresa</span>
                </div>
              </TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 100,00</TableCell>
              <TableCell className="text-right">R$ 200,00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Pizza Mussarela</span>
                </div>
              </TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 80,00</TableCell>
              <TableCell className="text-right">R$ 80,00</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">R$ 280,00</TableCell>
            </TableRow>
          </TableFooter>

        </Table>
      </div>
    </DialogContent>
  )

}
