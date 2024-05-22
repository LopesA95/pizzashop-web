import { api } from '@/lib/axios'

interface updateProfileprofileBody {
  name: string
  description: string | null
}
export async function updateProfile({ description, name }: updateProfileprofileBody) {
  await api.put('/profile', { name, description })
}
