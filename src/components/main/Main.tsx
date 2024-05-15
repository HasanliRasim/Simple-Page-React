import './Main.modules.scss'

const Main = () => {
  return (
    <main className='main'>
            <div className='main__section__text'>
            <h1 className='main__section__text__title'>Latest Photos</h1>
            </div>
        <section className='main__section'>
            <div className='main__section__cards'>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-01.jpg" alt="" />
                <p className='main__section__cards__text'>18 Oct 2020</p>
            </div>
            <div className='main__section__cards'>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-02.jpg" alt="" />
                <p className='main__section__cards__text'>10 Oct 2020</p>
            </div>
            <div className='main__section__cards'>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-03.jpg" alt="" />
                <p className='main__section__cards__text'>20 Oct 2020</p>
            </div>
            <div className='main__section__cards'>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-04.jpg" alt="" />
                <p className='main__section__cards__text'>5 Oct 2020</p>
            </div>
            <div className='main__section__cards'>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-05.jpg" alt="" />
                <p className='main__section__cards__text'>13 Sep 2020</p>
            </div>
            <div className='main__section__cards'>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-06.jpg" alt="" />
                <p className='main__section__cards__text'>4 Sep 2020</p>
            </div>
            <div className='main__section__cards'>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-07.jpg" alt="" />
                <p className='main__section__cards__text'>27 Sep 2020</p>
            </div>
            <div>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-08.jpg" alt="" />
                <p className='main__section__cards__text'>2 Sep 2020</p>
            </div>
            <div>
                <img src="https://templatemo.com/templates/templatemo_556_catalog_z/img/img-09.jpg" alt="" />
                <p className='main__section__cards__text'>12 Sep 2020</p>
            </div>
        </section>
    </main>
  )
}

export default Main