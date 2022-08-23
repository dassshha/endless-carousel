import { CustomArrowProps } from 'react-slick'

export const PrevArrow = ({ onClick }: CustomArrowProps): JSX.Element => {
  return (
    <button className='slider__button slider__button--prev' type='button' onClick={onClick}>
      <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='#6C63FF'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10.7903 4.3871L10.7071 4.29289C10.3466 3.93241 9.77939 3.90468 9.3871 4.2097L9.29289 4.29289L2.29289 11.2929L2.2515 11.3369L2.19633 11.4047L2.12467 11.5159L2.07123 11.6287L2.03585 11.734L2.00691 11.8819L2 12L2.00279 12.0752L2.02024 12.2007L2.04974 12.3121L2.09367 12.4232L2.146 12.5207L2.21969 12.6254L2.29289 12.7071L9.29289 19.7071C9.68342 20.0976 10.3166 20.0976 10.7071 19.7071C11.0676 19.3466 11.0953 18.7794 10.7903 18.3871L10.7071 18.2929L5.416 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H5.414L10.7071 5.70711C11.0676 5.34662 11.0953 4.77939 10.7903 4.3871L10.7071 4.29289L10.7903 4.3871Z'
        />
      </svg>
      <span className='visually-hidden'>Посмотреть предыдущие 5 товаров</span>
    </button>
  )
}
