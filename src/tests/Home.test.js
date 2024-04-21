import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomeComponente   from '@/app/componentes/Home'

describe("Home Component", ()=>{
    it("debería mostrar el componente",()=>{
        render(<HomeComponente/>)
    const h1 = screen.getByText("Home component")
    expert(h1).toBeInTheDocument();
    })
})