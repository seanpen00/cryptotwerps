import React from "react";
import { Container } from "react-bootstrap";

import InfiniteCarousel from 'react-leaf-carousel';

//import Assets
import ImageBoy1 from '../../assets/team/1.jpeg';
import ImageBoy2 from '../../assets/team/2.jpeg';
import ImageBoy3 from '../../assets/team/3.jpeg';
import ImageBoy4 from '../../assets/team/4.jpeg';
import ImageBoy5 from '../../assets/team/5.jpeg';
import ImageBoy6 from '../../assets/team/6.jpeg';
import ImageBoy7 from '../../assets/team/7.jpeg';
import ImageBoy8 from '../../assets/team/8.jpeg';

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
                         PEEP <br /> <span>OUR OWLS!</span>
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
                                    <img className="caroImg" src={ImageBoy1} alt='twerp1' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/2.jpeg" alt='twerp2' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/3.jpeg" alt='twerp3' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/4.jpeg" alt='twerp4' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/5.jpeg" alt='twerp5' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/6.jpeg" alt='twerp6' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/7.jpeg" alt='twerp7' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/8.jpeg" alt='twerp8' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/9.jpeg" alt='twerp9' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/10.jpeg" alt='twerp10' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/11.jpeg" alt='twerp11' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/12.jpeg" alt='twerp12' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/13.jpeg" alt='twerp13' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/14.jpeg" alt='twerp14' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/15.jpeg" alt='twerp15' />
                                </div>
                                <div>
                                    <img className="caroImg" src="../../assets/team/16.jpeg" alt='twerp16' />
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