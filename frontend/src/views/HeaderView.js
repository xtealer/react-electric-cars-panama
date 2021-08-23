import React from 'react';
import CarouselComponent from '../components/CarouselComponent';


const HeaderView = () => {
    // images to be used at carousel
    const images = [
        {
            alt: 'Green White Battery',
            file: require('../images/batteries.gif')
        },
        {
            alt: 'Mercedes Electric Car',
            file: require('../images/mercecharge.jpg')
        }
    ];

    return (<div className="row flex-row mx-0">
        <div className="col px-0">
            <h1 className="py-5 text-center">
                <span role="img" aria-label="lightning">
                    ⚡
              </span>
                Vehiculos Eléctricos en Panamá
              <span role="img" aria-label="lightning">
                    ⚡
              </span>
            </h1>
            <CarouselComponent images={images} />
        </div>
    </div>);
};

export default HeaderView;