import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function OrdersTableRow() {
    return (
        <TableRow>
            <TableCell>
                <Button variant="outline" size="xs">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido
                    </span>
                </Button>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">313121ni1h32i1nk3ln</TableCell>
            <TableCell className="text-muted-foreground"> há 15 minutos
            </TableCell>
            <TableCell className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="font-medium text-muted-foreground p-1">
                    Pendente
                </span>
            </TableCell>
            <TableCell className="font-medium">Anderson da Silva Lopes
            </TableCell>
            <TableCell className="font-medium">
                R$ 149,90
            </TableCell>
            <TableCell><Button variant='outline' size='xs'>
                <ArrowRight className="h-3 w-3 mr-2" />
                Aprovar
            </Button>
            </TableCell>
            <TableCell><Button variant='ghost' size='xs'>
                <X className="h-3 w-3 mr-2" />
                Cancelar
            </Button>
            </TableCell>
        </TableRow>
    )

}