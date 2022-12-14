import { CustomArrowProps } from 'react-slick'

export const NextArrow = ({ onClick }: CustomArrowProps): JSX.Element => {
  return (
    <button className={'slider__button slider__button--next'} type='button' onClick={onClick}>
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
          d='M13.2097 19.6129L13.2929 19.7071C13.6534 20.0676 14.2206 20.0953 14.6129 19.7903L14.7071 19.7071L21.7071 12.7071L21.7485 12.6631L21.8037 12.5953L21.8753 12.4841L21.9288 12.3713L21.9642 12.266L21.9931 12.1181L22 12L21.9972 11.9248L21.9798 11.7993L21.9503 11.6879L21.9063 11.5768L21.854 11.4793L21.7803 11.3746L21.7071 11.2929L14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.9324 4.65338 12.9047 5.22061 13.2097 5.6129L13.2929 5.70711L18.584 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L18.586 13L13.2929 18.2929C12.9324 18.6534 12.9047 19.2206 13.2097 19.6129L13.2929 19.7071L13.2097 19.6129Z'
        />
      </svg>
      <span className='visually-hidden'>Посмотреть следующие 5 товаров</span>
    </button>
  )
}
