import { priceBySale } from '../../price-by-sale'

type PriceProps = {
  sale: number
  price: number
}

const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU').format(price)

export const Price = ({ sale, price }: PriceProps): JSX.Element => {
  return (
    <b className='product__price'>
      <span className='product__price-value'>{formatPrice(priceBySale(price, sale))}</span>
      <i className='rouble'>i</i>
      {sale ? (
        <span className='product__price-value product__price-value--old'>{formatPrice(price)}</span>
      ) : null}
    </b>
  )
}
