import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/react'
import 'reflect-metadata'
import { vi, describe, it, expect, afterEach } from 'vitest'
import { HierarchyMenuComponent } from '../HierarchyMenu'
import { HierarchyPresenter } from '../HierarchyPresenter'
import { HierarchyMenuStub } from '../../../TestTools/GetHierarchyMenuStub'

let hierarchyPresenter: HierarchyPresenter = {
  hierarchyRepository: {
    // @ts-expect-error
    // dataGateway should not be null but not important for tests
    dataGateway: null,
    hierarchyPm: {
      id: 'none',
      children: [],
      name: '',
      label: '',
      tooltip: '',
      type: ''
    },
    loadHierarchy: vi.fn(),
    reset: vi.fn(),
  },
  viewModel: {
    hasHierarchy: false,
    hierarchy: HierarchyMenuStub
  },
  load: vi.fn()
}

describe('<HierarchyMenu />', () => {
  afterEach(() => {
    hierarchyPresenter.viewModel.hasHierarchy = false
  })

  it('should render correctly', () => {
    render(<HierarchyMenuComponent presenter={hierarchyPresenter} />)
  })

  it('should not render the menu', () => {
    render(<HierarchyMenuComponent presenter={hierarchyPresenter} />)
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })

  it('should render the menu', () => {
    hierarchyPresenter.viewModel.hasHierarchy = true
    render(<HierarchyMenuComponent presenter={hierarchyPresenter} />)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.queryByRole('list')?.children).toHaveLength(2)
  })
})
