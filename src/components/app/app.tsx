import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import { Main } from '../../pages/main/main'
import { GoodsListType } from '../../types/goods-list-type'

type AppProps = {
  goods: GoodsListType
}

function App({ goods }: AppProps) {
  return <Main goods={goods} />
}

export default App
