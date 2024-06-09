import { createBrowserRouter, RouterProvider} from "react-router-dom"
import {  ThemeProvider } from "styled-components"

import { Home } from "./pages/Home"
import { theme } from "./styled/theme.js"

const router = createBrowserRouter ([
   {

    path: "/",
    element: <Home/>

   }
])

export  function Home() {
  return (

      <ThemeProvider theme={theme}>  
          <RouterProvider router={router}/> 
      </ThemeProvider>

  )
}
