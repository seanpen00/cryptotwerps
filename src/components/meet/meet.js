import React from "react";
import { Container } from "react-bootstrap";

import InfiniteCarousel from 'react-leaf-carousel';

//import Assets
import twerp1 from '../../assets/team/1.jpeg';
import twerp2 from '../../assets/team/2.jpeg';
import twerp3 from '../../assets/team/3.jpeg';
import twerp4 from '../../assets/team/4.jpg';
import twerp5 from '../../assets/team/5.jpeg';
import twerp6 from '../../assets/team/6.jpeg';
import twerp7 from '../../assets/team/7.jpeg';
import twerp8 from '../../assets/team/8.jpeg';
import twerp9 from '../../assets/team/9.jpg';
import twerp10 from '../../assets/team/10.jpg';
import twerp11 from '../../assets/team/11.jpeg';
import twerp12 from '../../assets/team/12.jpeg';
import twerp13 from '../../assets/team/13.jpeg';
import twerp14 from '../../assets/team/14.jpeg';
import twerp15 from '../../assets/team/15.jpeg';
import twerp16 from '../../assets/team/16.jpeg';

//import CSS
import './meet.css';

import { BsArrowLeftShort,
    BsArrowRightShort } from 'react-icons/bs';
class Meet extends React.Component {
    render() {
      
        return (
            <div className='meet-control'>
                <Container>
                    <header style={{textAlign: "center"}}>
                         PEER INTO THE <span>FUTURE!</span>
                    </header>
                </Container>
                <InfiniteCarousel
                                breakpoints={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    },
                                },
                                {
                                    breakpoint: 1280,
                                    settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    },
                                },
                                ]}
                                dots={false}
                                arrows={true}
                                showSides={true}
                                sidesOpacity={0.5}
                                sideSize={0.1}
                                slidesToScroll={1}
                                slidesToShow={4}
                                scrollOnDevice={true}
                            >
                                <div>
                                    <img className="caroImg" src={twerp1} alt='twerp1' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp2} alt='twerp2' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp3} alt='twerp3' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp4} alt='twerp4' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp5} alt='twerp5' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp6} alt='twerp6' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp7} alt='twerp7' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp8} alt='twerp8' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp9} alt='twerp9' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp10} alt='twerp10' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp11} alt='twerp11' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp12} alt='twerp12' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp13} alt='twerp13' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp14} alt='twerp14' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp15} alt='twerp15' />
                                </div>
                                <div>
                                    <img className="caroImg" src={twerp16} alt='twerp16' />
                                </div>
                </InfiniteCarousel>
                
                {/* <Container>
                    <div className='slide-arrows'>
                        <a>
                            <BsArrowLeftShort size={40} />
                        </a>
                        <a>
                            <BsArrowRightShort size={40} />
                        </a>
                    </div>
                </Container> */}
                {/* <Container>
                    <div className='remaining'>
                        <span>0</span>
                        <p>SPOOKIES REMAINING</p>
                    </div>
                </Container> */}
            </div>
            
        );
    }
}

export default Meet;