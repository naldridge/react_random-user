import React, { Component } from "react";
import './Usercard.css';

class Usercard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        }
    };

    componentDidMount() {
        this._fetchUser();
    }

    _fetchUser = async () => {
        const response = await fetch(
            'https://randomuser.me/api/?results=1'
        ).then(response => response.json());

        this.setState({
            user: response.results,
        });

    };


    render() {
        return (
            <>
            
                {this.state.user.map(detail => {
                    return (
                        <div className="card">
                            <img src={detail.picture.large} alt=""></img>
                            <div className="container">
                                <h4>Name: {detail.name.first} {detail.name.last}</h4>
                                <p>Age: {detail.dob.age}</p>
                                <p>Location: {detail.location.city}, {detail.location.state}, {detail.nat}</p>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Usercard;