import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'
import { Toaster } from 'sonner'

import './global.css'

export function App() {

  return (
    <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
      <HelmetProvider >
        <Helmet titleTemplate='%s | pizza.shop' />
        <Toaster richColors />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
