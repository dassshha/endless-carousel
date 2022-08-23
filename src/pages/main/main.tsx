import {Header} from '../../components/header/header';
import {Banner} from '../../components/banner/banner';
import {GoodsSlider} from '../../components/goods-slider/goods-slider';
import {GoodsListType} from '../../types/goods-list-type';

type MainProps = {
    goods: GoodsListType
};

export const Main = ({goods}: MainProps): JSX.Element => {
  return (
      <>
        <Header />
        <main className="main">
          <h1 className="visually-hidden">
            Клубок - главная страница
          </h1>
          <Banner />
          <GoodsSlider goods={goods}/>
        </main>
      </>
  );
}
