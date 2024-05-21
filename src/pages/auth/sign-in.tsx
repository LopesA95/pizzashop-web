import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { signIn } from '@/api/sign-in'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { useMutation } from '@tanstack/react-query'
import { Link, useSearchParams } from "react-router-dom"
import { toast } from "sonner"


const sininForm = z.object({
  email: z.string().email()
})

type SigninForm = z.infer<typeof sininForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SigninForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignin(data: SigninForm) {
    try {

      await authenticate({ email: data.email })

      toast.success('Enviamos um link de autenticação para o seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () =>
            handleSignin(data),
        }
      })
    } catch {
      toast.error('Ocorreu um erro ao enviar o e-mail de autenticação. Tente novamente mais tarde.')
    }
  }

  return (
    <>
      <Helmet title='Login' />
      <div className='p-8'>
        <Button variant='ghost' asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignin)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input type="email" id="email" placeholder="Seu e-mail" {...register('email')} />

            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
