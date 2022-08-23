import { Good } from '../good/good'
import { GoodType } from '../../types/good-type'

type GoodSaleProps = GoodType

export const GoodSale = (props: GoodSaleProps): JSX.Element => {
  return <Good {...props} className='product--sale' />
}
