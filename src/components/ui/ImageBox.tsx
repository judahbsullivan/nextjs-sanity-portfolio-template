import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/image'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  'data-sanity'?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 1400,
  height = 550,
  classesWrapper,
  ...props
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url()

  return (
    <div
      className={` inset-0  max-h-[500px] w-full max-w-screen-xl mx-auto  overflow-clip rounded-md bg-gray-500 ${classesWrapper}`}
      data-sanity={props['data-sanity']}
    >
      <div className='w-full h-full relative'>
{imageUrl && (
        <Image
          className="absolute h-full w-full  object-cover "
          alt={alt}
          width={width}
          height={height}
          src={imageUrl}
        />
      )}
      </div>
      
    </div>
  )
}