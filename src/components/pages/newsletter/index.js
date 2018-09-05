import React, { Component } from 'react';

import News from './news/';
import Article from './article/';

class Newsletter extends Component{
    constructor(){
        super()
        this.dataBody=[
            {
                image: 'https://admin.kienyke.com/wp-content/uploads/2018/06/Kimonos.jpg',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            },
            {
                image: 'https://3.bp.blogspot.com/-m_EQEyxz370/VvjxY5qbRCI/AAAAAAAAA8k/6Sf8DzhiXbQfaQdu9In5RLL5poNC0gQjA/s1600/13-perros-haciendo-cosplay-y-odiando-a-sus-duenos-3.jpg',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            },
            {
                image: 'https://vignette.wikia.nocookie.net/new-fantendo/images/b/b8/Champi%C3%B1on_Random.png/revision/latest?cb=20170329164317&path-prefix=es',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            },
            {
                image: 'https://cdn.glamour.mx/uploads/images/thumbs/mx/glam/2/s/2017/19/olanes_en_la_moda_893158530_1800x1200.jpg',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            },
            {
                image: 'https://static.vix.com/es/sites/default/files/styles/large/public/imj/imujer/k/kimonos-a-la-moda%201.jpg?itok=LEToNjQI',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            },
            {
                image: 'https://i.iplsc.com/nasladownictwo-zdaje-sie-byc-od-pewnego-czasu-istota-mody-cz/0007B8293WE7UNQQ-C122-F4.jpg',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            },
            {
                image: 'http://lojaflorem.com.br/wp-content/uploads/revslider/home-slider/Modelos-de-saia-tend%C3%AAncias-ver%C3%A3o-2014-dicas-1024x861.jpg',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            },
            {
                image: 'https://static.vix.com/es/sites/default/files/styles/large/public/imj/imujer/k/kimonos-a-la-moda%201.jpg?itok=LEToNjQI',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            },
            {
                image: 'https://magazinefeed.me/wp-content/uploads/2018/01/tendencias-moda-2018.jpg',
                category: 'Moda',
                name: 'COSAS MODA 2016',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                date: '26 marzo, 2018'
            }
        ]
    }
    render(){
        return(
            <div className="newsletter">
                {<News dataBody={this.dataBody} />}
                {/*<Article />*/}
            </div>
        )
    }
}

export default Newsletter;