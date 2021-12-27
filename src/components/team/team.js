import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
import brandon from "../../assets/team/theteam/brandon.png"
import hamza from "../../assets/team/theteam/hamza.png"
import davyy from '../../assets/team/theteam/davyy.png'
import cj from '../../assets/team/theteam/cj.png'
import nick from '../../assets/team/theteam/nick.png'
import muzlimin from '../../assets/team/theteam/muzlimin.png'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: brandon,
                    title: 'Project Ideator',
                    name: "Brandon",
                    link: ""
                },
                {
                    image: hamza,
                    title: 'Full Stack Development',
                    name: "Hamza",
                    link: null
                },
                {
                    image: davyy,
                    title: 'Community Manager',
                    name: "Davyy",
                    link: ''
                },
                {
                    image: cj,
                    title: 'Marketing Specialist',
                    name: "CJ",
                    link: ''
                }, 
                {
                    image: nick,
                    title: 'DC Comics Artist',
                    name: "Nick",
                    link: ''
                },
                {
                    image: muzlimin,
                    title: '3D Artist\n3D Modeling',
                    name: 'Muzlimin',
                    link: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className='team-control' id='team'>
                <Container>
                    <header style={{fontStyle: "normal", color:"white"}}> TEAM MEMBERS </header>
                    <Row>
                        {
                            this.state.teams.map((member, index) => {
                                return(
                                    <Col className="team-control-card" md={6} xs={12} >
                                        <TeamMember 
                                            imageUrl={member.image}
                                            title={member.title}
                                            name={member.name} 
                                        />
                                    </Col>
                                );
                            })
                        }
                    </Row> 
                </Container>
            </div>
        );
    }
}

export default Team