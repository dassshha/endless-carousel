type SaleProps = {
  sale: number
}

export const Sale = ({ sale }: SaleProps): JSX.Element => {
  return (
    <b className='product__sale-label'>
      −<span className='product__sale-amount'>{sale}</span>%
    </b>
  )
}
