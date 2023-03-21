import { useFetchGifd } from '../hooks/useFetchGifd'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifd(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando....</h2>}
      <div className='card-grid'>
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}
