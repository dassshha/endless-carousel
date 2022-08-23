export const Banner = (): JSX.Element => {
  return (
      <section className="banner">
          <div className="container banner__inner">
              <div className="banner__text">
                  <h2 className="heading banner__heading">
                      «Клубок» — фабрика мебели
                  </h2>
                  <p className="banner__description">
                      Мы производим лучшую мебель для ваших домов.
                      У нас проверенные поставщики, доставка в день
                      заказа, быстрая сборка и приятные цены.
                  </p>
              </div>
              <div className="banner__image">
                  <img src="img/banner-image.svg" width={377} height={304} alt="Диван, человек, кот и клубок" />
              </div>
          </div>
      </section>
  );
}
