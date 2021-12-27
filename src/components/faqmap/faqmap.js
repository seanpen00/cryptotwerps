import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './faqmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./faqmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '1',
                    title: "Where can I find my Crypto Twerps?",
                    content: "You’ll be able to find your collection of crocs by connecting your Ethereum/MetaMask wallet to OpenSea."
                },
                {
                    tag: '2',
                    title: "How do I access the private community?",
                    content: "You’ll need to verify the ownership of your Crypto Twerps within our Discord in order to gain access to our exclusive secret treehouse lair."
                },
                {
                    tag: '3',
                    title: "Will there be a max per transaction?",
                    content: "Yes. You’re able to mint up to 20 Crypto Twerps per transaction."
                },
                {
                    tag: '4',
                    title: "When's the official drop date?",
                    content: "Crypto will drop in late December. Please check our Discord and Twitter channels for the latest updates."
                },
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ backgroundColor: "black", backgroundImage: "none" }}>
                <Container style={{ backgroundColor: "black", paddingTop: 100 }}>
                    <header style={{fontStyle: "normal", color:"white", textAlign: "center" }}><span></span> <br/> FAQ's</header>
                    <Row style={{ paddingTop: 0}}>
                        <Col>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content}
                                             />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default RoadMap;