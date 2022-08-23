import {GoodsListType} from '../../types/goods-list-type';
import {GoodType} from '../../types/good-type';
import {GoodSale} from '../good-sale/good-sale';
import {Good} from '../good/good';
import {GOOD_TYPE} from '../const';

type GoodsListProps = {
    goods: GoodsListType
};

const getGoodByType = (type: string, good: GoodType) => {
    switch (type) {
        case GOOD_TYPE.SALE:
            return <GoodSale {...good}/>
        default:
            return <Good {...good}/>
    }
};

export const GoodsList = ({goods}: GoodsListProps): JSX.Element => {
  return (
      <ul className="goods__list slider__list">
          {goods.map(good => getGoodByType(good.sale ? GOOD_TYPE.SALE: GOOD_TYPE.DEFAULT, good))}
      </ul>
  );
}
