import { render } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {
  const title = 'Saitama'
  const url = 'https://one-pice/lupy.jpg'

  test('debe hacer march con el sanpshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })
})
