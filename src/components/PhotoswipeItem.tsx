import { useEffect, useState } from 'react';
import { Item } from 'react-photoswipe-gallery'

function PhotoswipeItem({ src } : { src:string }) {

  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imgHeight, setImgHeight] = useState<number>(0);

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImgWidth(img.width)
      setImgHeight(img.height)
    }
    img.src = src
  }, [])

  return (
    <div className="photoswipe-item">
      <Item original={ src } thumbnail={ src } width={imgWidth} height={imgHeight}>
        {({ ref, open }) => (
          <img className="photoswipe-thunbnail" ref={ref} onClick={open} src={ src } />
        )}
      </Item>
    </div>
  )
}

export default PhotoswipeItem;