export const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='container header__inner'>
        <a className='logo header__logo'>
          <img src='img/logo.svg' width={114} height={42} alt='Логотип фабрики мебели «Клубок»' />
        </a>
      </div>
    </header>
  )
}
