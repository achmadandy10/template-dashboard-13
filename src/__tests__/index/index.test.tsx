import Home from '@/app/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', {
      name: 'Eslint + Prettier + Husky + Jest',
    })
 
    expect(heading).toBeInTheDocument()
  })
})