import { GoodType } from '../../types/good-type'
import { Sale } from '../sale/sale'
import { Price } from '../price/price'

type GoodProps = GoodType & {
  className?: string
}

export const Good = ({ sale, images, description, price, className }: GoodProps) => {
  return (
    <div className='goods__item slider__item'>
      <a className={`product ${className}`} href='#'>
        {sale ? <Sale sale={sale} /> : null}
        <div className='product__image'>
          <picture>
            <source type='image/webp' srcSet={images.join(', ')} />
            <img
              src={images[0]}
              width={214}
              height={248}
              alt={description}
              srcSet={images.join(', ')}
            />
          </picture>
        </div>
        <div className='product__description'>
          <h3 className='product__heading'>{description}</h3>
          <Price price={price} sale={sale} />
        </div>
      </a>
    </div>
  )
}
