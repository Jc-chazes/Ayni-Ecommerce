import React, { Component } from 'react';
import './index.css';
import HomeCoverPage from './cover_page';
import HomeCollections from './collections';
import HomeBestGarments from './best_garments';
import HomeOurEssence from './our_essence';
import HomeTrends from './trends';
import HomeSubscription from './subscription';

class Home extends Component{
    constructor(props){
        super(props)
        this.collectionsData = ['http://192.168.1.10:3000/images/Image41.png',
                                'http://192.168.1.10:3000/images/arrival1.png',
                                'http://192.168.1.10:3000/images/Image41.png',
                                'http://192.168.1.10:3000/images/arrival1.png',
                                'http://192.168.1.10:3000/images/Image41.png',
                                'http://192.168.1.10:3000/images/arrival1.png']
        this.bestGarments=[
                {
                    image: 'http://192.168.1.10:3000/images/arrival1.png',
                    name: 'Floral Off-the-Shoulder Romper',
                    price: 199.00
                },
                {
                    image: 'http://192.168.1.10:3000/images/resources/Moodboard-image5.jpg',
                    name: 'Floral Off-the-Shoulder Romper',
                    price: 199.00
                },
                {
                    image: 'http://192.168.1.10:3000/images/arrival1.png',
                    name: 'Floral Off-the-Shoulder Romper',
                    price: 199.00
                }
            ]

        this.trendsData=[
            {
                image: 'https://cdn.vogue.es/uploads/images/thumbs/es/vog/2/s/2018/01/moda_tendencias_voguees_965319015_620x.jpg',
                category: 2,
                caption: 'LIF WEEK',
                body: 'Todos los detales de la pasarela más importante en nuestra ciudad'
            },
            {
                image: 'https://cdn.vogue.es/uploads/images/thumbs/es/vog/2/s/2018/01/moda_tendencias_voguees_768545343_620x413.jpg',
                category: 3,
                caption: '#ALPACA',
                body: 'Las prendas más usadas en las pasarelas actuales'
            },
            {
                image: 'https://cdn.vogue.es/uploads/images/thumbs/es/vog/2/s/2018/01/moda_tendencias_voguees_965319015_620x.jpg',
                category: 2,
                caption: '#GirlTalk',
                body: 'Los 7 outfits más recomendados para la temporada FW 18'
            }
        ]
    }
    render(){
        return(
            <div className="home">

                <div className="home__container">
                    {<HomeCoverPage />}
                    {<HomeCollections collectionsData={this.collectionsData}/>}
                    {<HomeBestGarments dataGarments={this.bestGarments} />}
                    {<HomeOurEssence />}
                    {<HomeTrends trendsData={this.trendsData} />}
                    {<HomeSubscription />}
                </div>

            </div>
        )
    }
}

export default Home;
