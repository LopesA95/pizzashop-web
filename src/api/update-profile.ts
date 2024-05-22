import { api } from '@/lib/axios'

interface updateProfileprofileBody {
  name: string
  description: string | null
}
export async function updateProfile({ description, name }: updateProfileprofileBody) {
  await new Promise((_, reject) => {
    setTimeout(reject, 1000)

  })

  await api.put('/profile', { name, description })
}
