import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { MainLayout } from '@/components/templates'

describe('MainLayout', () => {
  it('renders children properly', () => {
    render(
      <MainLayout>
        <div>Test Content</div>
      </MainLayout>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
