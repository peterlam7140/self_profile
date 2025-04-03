import { Gallery } from 'react-photoswipe-gallery'
import PhotoswipeItem from '../components/PhotoswipeItem'

function PhotoswipeGallery({ list } : { list:string[] }) {

  return (
    <div className="photoswipe-gallery">
        <Gallery>
            {list.map((item)=>{
                return <PhotoswipeItem src={ item } />
            })}
        </Gallery>
    </div>
  )
}

export default PhotoswipeGallery;