import './Header.modules.scss'

const Header = () => {
  return (
    <header className='header'>
        <div className='header__title'>
        <h1 className='header__title__text'>Catalog-Z</h1>
        </div>
        <nav className='header__nav'>
            <ul className='header__nav__ul'>
                <li className='header__nav__ul__list'><a className='header__nav__ul__link' href="#">Photos</a></li>
                <li className='header__nav__ul__list'><a className='header__nav__ul__link' href="#">Videos</a></li>
                <li className='header__nav__ul__list'><a className='header__nav__ul__link' href="#">About</a></li>
                <li className='header__nav__ul__list'><a className='header__nav__ul__link' href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header