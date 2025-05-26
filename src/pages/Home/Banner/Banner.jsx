import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image01 from '../../../assets/banner-1.png'
import image02 from '../../../assets/banner-2.jpg'
import image03 from '../../../assets/banner-3.jpg'
import image04 from '../../../assets/banner-4.png'
import image05 from '../../../assets/banner-5.jpg'
import image06 from '../../../assets/banner-6.jpg'

const Banner = () => {
    return (
        <Carousel>
                <div className="max-h-40">
                    <img src={image01} />
                    <p className="legend">Metro City News</p>
                </div>
                <div>
                    <img src={image02} />
                    <p className="legend">Tech & StartUp</p>
                </div>
                <div>
                    <img src={image03} />
                    <p className="legend">Entertainment</p>
                </div>
                <div>
                    <img src={image04}/>
                    <p className="legend">Books & Literature</p>
                </div>
                <div>
                    <img src={image05}/>
                    <p className="legend">Business</p>
                </div>
                <div>
                    <img src={image06}/>
                    <p className="legend">Sports</p>
                </div>
            </Carousel>
    );
};

export default Banner;