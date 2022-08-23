import Slider from "react-slick";
import {GoodsListType} from '../../types/goods-list-type';
import {Good} from '../good/good';
import {GOOD_TYPE} from '../const';
import {GoodType} from '../../types/good-type';
import {GoodSale} from '../good-sale/good-sale';
import {PrevArrow} from '../prev-arrow/prev-arrow';
import {NextArrow} from '../next-arrow/next-arrow';

type GoodsSliderProps = {
    goods: GoodsListType
};

const getGoodByType = (type: string, good: GoodType) => {
    switch (type) {
        case GOOD_TYPE.SALE:
            return <GoodSale {...good} key={good.id}/>
        default:
            return <Good {...good} key={good.id}/>
    }
};

export const GoodsSlider = ({goods}: GoodsSliderProps): JSX.Element => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    };

    return (
        <section className="goods">
            <div className="container container--no-padding goods__inner">
                <h2 className="heading goods__heading">
                    Популярные товары
                </h2>
                <div style={{padding: '24px 20px'}}>
                    <Slider {...settings}>
                        {goods.map(good => getGoodByType(good.sale ? GOOD_TYPE.SALE: GOOD_TYPE.DEFAULT, good))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
