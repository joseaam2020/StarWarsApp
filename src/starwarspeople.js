import './App.css';

import React from 'react'

export default class StarWars extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/people/")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.results,
                })
            });
    }

    render() {

        var { items, isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
            return (
                <div className="App">
                    <table>
                        <tr>
                            <th>|</th>
                            <th>Name</th>
                            <th>|</th>
                            <th>Height</th>
                            <th>|</th>
                            <th>Mass</th>
                            <th>|</th>
                            <th>Hair Color</th>
                            <th>|</th>
                            <th>Skin Color</th>
                            <th>|</th>
                            <th>Eye color</th>
                            <th>|</th>
                            <th>Birth Year</th>
                            <th>|</th>
                            <th>Gender</th>
                            <th>|</th>
                        </tr>
                        {items.map((item) => 
                            <tr>
                                <th>|</th>
                                <th>{item.name}</th>
                                <th>|</th>
                                <th>{item.height}</th>
                                <th>|</th>
                                <th>{item.mass}</th>
                                <th>|</th>
                                <th>{item.hair_color}</th>
                                <th>|</th>
                                <th>{item.skin_color}</th>
                                <th>|</th>
                                <th>{item.eye_color}</th>
                                <th>|</th>
                                <th>{item.birth_year}</th>
                                <th>|</th>
                                <th>{item.gender}</th>
                                <th>|</th>
                            </tr>
                        )}
                        <tr>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                            <th>-</th>
                        </tr>
                    </table>
                </div>   
                )
        }
    }


}