import Slider from "react-slick";
import {GoodsListType} from '../../types/goods-list-type';
import {GoodsList} from '../goods-list/goods-list';
import {Good} from '../good/good';
import {GOOD_TYPE} from '../const';
import {GoodType} from '../../types/good-type';
import {GoodSale} from '../good-sale/good-sale';

type GoodsSliderProps = {
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

export const GoodsSlider = ({goods}: GoodsSliderProps): JSX.Element => {
    const settings = {
        arrows: true,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <section className="goods">
            <div className="container container--no-padding goods__inner">
                <h2 className="heading goods__heading">
                    Популярные товары
                </h2>
                <Slider {...settings}>
                    {goods.map(good => getGoodByType(good.sale ? GOOD_TYPE.SALE: GOOD_TYPE.DEFAULT, good))}
                </Slider>
            </div>
        </section>
    );
}
