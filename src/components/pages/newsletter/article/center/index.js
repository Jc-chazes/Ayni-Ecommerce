import React, { Component } from 'react';
import './index.css';

class ArticleCenter extends Component{
    render(){
        return(
            <div className="newsletter-article-center">
                <div className="newsletter-article-center__section">MODA</div>
                <div className="newsletter-article-center__title">Superhype 2016</div>
                <div className="newsletter-article-center__date">29 MARZO, 2018</div>
                <div className="newsletter-article-center__description">No es novedad que Instagram y su dinámica han revolucionado el escenario global. Dicen que una imagen habla más que mil palabras y, quizás, es ese uno de los secretos de su éxito frente a Facebook, el gigante mundial de las redes sociales. La celebridad de la fotográfica aplicación es tal, que el término “instagrameable” es hoy en día un factor clave a considerar por muchos usuarios al momento de decidir un destino, ya sea para comer, viajar, bailar, comprar… O lo que sea.<br/><br/>
En realidad, los estudios de Schofield Insurance que indican que el 40,1% de los jóvenes entre 18 y 35 años (los famosos millennials) escogen lugares para visitar (incluso sus vacaciones) basándose en la comida, atractivos turísticos y cualquier experiencia con el potencial suficiente para ser parte de una composición fotográfica que vaya acorde a su cuenta de Instagram.<br/><br/>
Como para no perder la costumbre ni el amor por la comida, aquí va una lista de restaurantes instagrameables en Lima. Una vez más: para diferentes bolsillos, para todos los gustos. ¿Cuántos de estos spots ya están en tu feed?
</div>
                <div className="newsletter-article-center__interests">
                    <div className="newsletter-article-center__interests__title">OTROS INTERESES</div>
                    <div className="newsletter-article-center__interests__description">
                        El lugar es un lujo. Ubicado en Av Mariscal La Mar 1332 (Miraflores), la Barra Verde se ilumina con una luz tenue que le da una calidez increíble. Por si fuera poco, tiene un mariposario de varios pisos que deleita una infinidad de especies en medio de puras plantas.
                    </div>
                </div>
                <div className="newsletter-article-center__fb-image1">
                    <div className="newsletter-article-center__fb-image1__img">
                        <div className="newsletter-article-center__fb-image1__img__picture" style={{backgroundImage: 'url(http://localhost:3000/images/resources/Moodboard-image5.jpg)'}} />
                        <div className="newsletter-article-center__fb-image1__img__text">
                            <div className="newsletter-article-center__fb-image1__img__text__from">Foto: fanpage de Facebook</div>
                            <div className="newsletter-article-center__fb-image1__img__text__date">6 junio, 2017 </div>
                        </div>
                    </div>
                    <div className="newsletter-article-center__fb-image1__arrow-icon"/>
                </div>
                <div className="newsletter-article-center__fb-image2">
                    <div className="newsletter-article-center__fb-image2__picture" style={{backgroundImage:'url(http://localhost:3000/images/fb-image2.png)'}} />
                    <div className="newsletter-article-center__fb-image2__text">Foto: fanpage de Facebook</div>
                </div>
                <div className="newsletter-article-center__other-side">
                    <div className="newsletter-article-center__other-side__title">POR OTRO LADO</div>
                    <div className="newsletter-article-center__other-side__body">El bar de coctelería contemporánea está situado en Av. Pardo y Aliaga 662 (San Isidro) y, la verdad, 
es que no hay mucho que decir al respecto. Sus tragos, o mejor dicho, obras de arte hablan por sí 
solas.</div>
                </div>
                <div className="newsletter-article-center__fb-image2">
                    <div className="newsletter-article-center__fb-image2__picture" style={{backgroundImage:'url(http://localhost:3000/images/fb-image-22.png)'}} />
                    <div className="newsletter-article-center__fb-image2__text">Foto: fanpage de Facebook</div>
                </div>
                <div className="newsletter-article-center__close">
                    <div className="newsletter-article-center__close__icon"/>
                    <div className="newsletter-article-center__close__text">Cerrar</div>
                </div>
            </div>
        )
    }
}

export default ArticleCenter;