import {GoodsListType} from '../../types/goods-list-type';
import {GoodType} from '../../types/good-type';
import {GoodSale} from '../good-sale/good-sale';
import {Good} from '../good/good';

type GoodsListProps = {
    goods: GoodsListType
};

const getGoodByType = (type: string, good: GoodType) => {
    switch (type) {
        case 'SALE':
            return <GoodSale {...good}/>
        default:
            return <Good {...good}/>
    }
};

export const GoodsList = ({goods}: GoodsListProps): JSX.Element => {


  return (
      <ul className="goods__list slider__list">
          {goods.map(good => getGoodByType(good.sale ? 'SALE': 'NOT_SALE', good))}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-1@1x.webp 1x, img/product-photo-1@2x.webp 2x" />*/}
          {/*                <img src="https://via.placeholder.com/150*/}

          {/*            C/O https://placeholder.com/" width={214} height={248} alt="Вращающийся стул Токио" srcSet="img/product-photo-1@1x.jpg 1x, img/product-photo-1@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Вращающийся стул Токио*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">24 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product product--sale" href="#">*/}
          {/*        <b className="product__sale-label">*/}
          {/*            −<span className="product__sale-amount">30</span>%*/}
          {/*        </b>*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-2@1x.webp 1x, img/product-photo-2@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-2@1x.jpg" width={214} height={248} alt="Мягкое кресло Манн-Уитни" srcSet="img/product-photo-2@1x.jpg 1x, img/product-photo-2@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Мягкое кресло Манн-Уитни*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">12 600</span><i className="rouble">i</i>*/}
          {/*                <span className="product__price-value product__price-value--old">18 000</span>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-3@1x.webp 1x, img/product-photo-3@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-3@1x.jpg" width={214} height={248} alt="Кожаный диван Колумб" srcSet="img/product-photo-3@1x.jpg 1x, img/product-photo-3@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Кожаный диван Колумб*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">125 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-4@1x.webp 1x, img/product-photo-4@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-4@1x.jpg" width={214} height={248} alt="Диван Рэдмен" srcSet="img/product-photo-4@1x.jpg 1x, img/product-photo-4@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Диван Рэдмен*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">82 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-5@1x.webp 1x, img/product-photo-5@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-5@1x.jpg" width={214} height={248} alt="Прикроватный столик Пьер" srcSet="img/product-photo-5@1x.jpg 1x, img/product-photo-5@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Прикроватный столик Пьер*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">16 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-6@1x.webp 1x, img/product-photo-6@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-6@1x.jpg" width={214} height={248} alt="Стул Детройт" srcSet="img/product-photo-6@1x.jpg 1x, img/product-photo-6@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Стул Детройт*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">12 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-7@1x.webp 1x, img/product-photo-7@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-7@1x.jpg" width={214} height={248} alt="Тканевый диван Альфред" srcSet="img/product-photo-7@1x.jpg 1x, img/product-photo-7@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Тканевый диван Альфред*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">92 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product product--sale" href="#">*/}
          {/*        <b className="product__sale-label">*/}
          {/*            −<span className="product__sale-amount">40</span>%*/}
          {/*        </b>*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-8@1x.webp 1x, img/product-photo-8@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-8@1x.jpg" width={214} height={248} alt="Обеденный комплект для кухни Модерн" srcSet="img/product-photo-8@1x.jpg 1x, img/product-photo-8@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Обеденный комплект для кухни Модерн*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">30 000</span><i className="rouble">i</i>*/}
          {/*                <span className="product__price-value product__price-value--old">50 000</span>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-9@1x.webp 1x, img/product-photo-9@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-9@1x.jpg" width={214} height={248} alt="Мягкое кресло Фред" srcSet="img/product-photo-9@1x.jpg 1x, img/product-photo-9@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Мягкое кресло Фред*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">61 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-10@1x.webp 1x, img/product-photo-10@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-10@1x.jpg" width={214} height={248} alt="Медный светильник Конг" srcSet="img/product-photo-10@1x.jpg 1x, img/product-photo-10@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Медный светильник Конг*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">10 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product product--sale" href="#">*/}
          {/*        <b className="product__sale-label">*/}
          {/*            −<span className="product__sale-amount">20</span>%*/}
          {/*        </b>*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-11@1x.webp 1x, img/product-photo-11@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-11@1x.jpg" width={214} height={248} alt="Деревянный табурет Роган" srcSet="img/product-photo-11@1x.jpg 1x, img/product-photo-11@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Деревянный табурет Роган*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">2 400</span><i className="rouble">i</i>*/}
          {/*                <span className="product__price-value product__price-value--old">3000</span>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-12@1x.webp 1x, img/product-photo-12@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-12@1x.jpg" width={214} height={248} alt="Обеденный комплект для кухни Вууд" srcSet="img/product-photo-12@1x.jpg 1x, img/product-photo-12@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Обеденный комплект для кухни Вууд*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">115 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-13@1x.webp 1x, img/product-photo-13@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-13@1x.jpg" width={214} height={248} alt="Мягкое кресло Девил" srcSet="img/product-photo-13@1x.jpg 1x, img/product-photo-13@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Мягкое кресло Девил*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">54 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-14@1x.webp 1x, img/product-photo-14@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-14@1x.jpg" width={214} height={248} alt="Журнальный столик Ален" srcSet="img/product-photo-14@1x.jpg 1x, img/product-photo-14@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Журнальный столик Ален*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">18 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-15@1x.webp 1x, img/product-photo-15@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-15@1x.jpg" width={214} height={248} alt="Обеденный комплект для кухни Денвер" srcSet="img/product-photo-15@1x.jpg 1x, img/product-photo-15@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Обеденный комплект для кухни Денвер*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">86 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-16@1x.webp 1x, img/product-photo-16@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-16@1x.jpg" width={214} height={248} alt="Мягкое кресло Барби" srcSet="img/product-photo-16@1x.jpg 1x, img/product-photo-16@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Мягкое кресло Барби*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">32 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-17@1x.webp 1x, img/product-photo-17@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-17@1x.jpg" width={214} height={248} alt="Комплект для веранды Вест" srcSet="img/product-photo-17@1x.jpg 1x, img/product-photo-17@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Комплект для веранды Вест*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">94 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-18@1x.webp 1x, img/product-photo-18@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-18@1x.jpg" width={214} height={248} alt="Кресло Олдмен" srcSet="img/product-photo-18@1x.jpg 1x, img/product-photo-18@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Кресло Олдмен*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">62 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product product--sale" href="#">*/}
          {/*        <b className="product__sale-label">*/}
          {/*            −<span className="product__sale-amount">30</span>%*/}
          {/*        </b>*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-19@1x.webp 1x, img/product-photo-19@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-19@1x.jpg" width={214} height={248} alt="Детское кресло Манго" srcSet="img/product-photo-19@1x.jpg 1x, img/product-photo-19@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Детское кресло Манго*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">8 400</span><i className="rouble">i</i>*/}
          {/*                <span className="product__price-value product__price-value--old">12 000</span>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
          {/*<li className="goods__item slider__item">*/}
          {/*    <a className="product" href="#">*/}
          {/*        <div className="product__image">*/}
          {/*            <picture>*/}
          {/*                <source type="image/webp" srcSet="img/product-photo-20@1x.webp 1x, img/product-photo-20@2x.webp 2x" />*/}
          {/*                <img src="img/product-photo-20@1x.jpg" width={214} height={248} alt="Деревянный комод Винди" srcSet="img/product-photo-20@1x.jpg 1x, img/product-photo-20@2x.jpg 2x" />*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div className="product__description">*/}
          {/*            <h3 className="product__heading">*/}
          {/*                Деревянный комод Винди*/}
          {/*            </h3>*/}
          {/*            <b className="product__price">*/}
          {/*                <span className="product__price-value">36 000</span><i className="rouble">i</i>*/}
          {/*            </b>*/}
          {/*        </div>*/}
          {/*    </a>*/}
          {/*</li>*/}
      </ul>
  );
}
