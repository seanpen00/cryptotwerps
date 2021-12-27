import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '0%',
                    title: "Community Giveaways",
                    content: "More than 25 Crypto Twerps will be given away to early community members, as well as to those who participate in contests on Twitter and Discord, and for creating memes and other art with their Twerps."
                },
                {
                    tag: '25%',
                    title: "ETH Giveaways",
                    content: "20 random Crypto Twerps owners will be chosen and they’ll receive 1ETH each in their wallet."
                },
                {
                    tag: '50%',
                    title: "Community Wallet Setup + ETH Giveaway",
                    content: "We will fund the community wallet with 20 ETH. The Twerpy community will decide what the funds will be used for, including purchasing NFTs from other collections to raffle among Crypto Twerps owners. We will also raffle ETH."
                },
                {
                    tag: '75%',
                    title: "ETH Giveaway",
                    content: "1 Lucky winner will randomly be chosen to be transfered 2 ETH"
                },
                {
                    tag: '100%',
                    title: "Community Wallet, Airdrops, Giveaway",
                    content: "20 random Crypto Twerps will be chosen, and their wallets sent 1ETH each.\nCommunity Wallet will be funded with 20 ETH.\nSpecial Edition 2nd Collection will be airdropped to all holders.\nThe Twerp community will help us decide on our second big project (NFT Gaming)."
                },
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center" }}>
                <Container style={{ backgroundColor: "#172A55", padding: 30, border: "solid black 10px", borderRadius: 20 }}>
                    <h1>Roadmap</h1>
                    <p className='roadmap-description'>
                    Quality comes first. We strive to provide quality artwork, community, and value to our Twerps. The underdogs will rise again. We are focused on organic community growth over time to ensure everyone involved is active and engaged. It is important to us to drive social change with this project and avoid the pitfalls of many of the projects launching.
                        <ul>
                            <li>Our foremost commitment is delivering value to our community members, in doing so we're prioritizing the artwork and continuous Metaverse development.</li>
                            <li>We want our original supporters to feel the prosperity. Don’t underestimate the underdog.</li>
                            <li>When sold out there will be an announcement for a new free + gas NFT accessible exclusively for holders, first and foremost.</li>
                            <li>Meanwhile, we’ll be integrating with a number of the largest projects and metaverses currently active on The ethereum network.</li>
                            <li>Crypto Twerp holders will be rewarded the most throughout our journey together.</li>
                        </ul>
                    Welcome to the fam you Twerps
                    </p>
                    <Row style={{ alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col xs={12} md={6}>
                            <img  className="roadimage"style={{border:"solid 10px black", borderRadius: 20}}src="https://cdn.dribbble.com/users/35633/screenshots/7704871/media/7b62d4238bb104a065dfeaf8a91a14bb.png?compress=1&resize=800x600" />
                        </Col>
                        <Col style={{ color: "white", alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ textAlign: "center", color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content} />
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