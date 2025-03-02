import React, {Component} from 'react';
import Hititem from "./Hititem";
import {useParams} from "react-router-dom";

class HintDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: null
        }
    }

    componentDidMount() {
        const id = useParams();
        alert(id+"<-------")
        if (id) {
            this.getHits(id);
        }
    }

    render() {
        const { hits } = this.state;
        return (
            <div>
                <h1>Image Details</h1>
                <Hititem hit={hits} />
            </div>
        );
    }

    getHits = (id) => {
        const myHeaders = new Headers();
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://pixabay.com/api/?key=49125697-1e3ccc9a93d6f2720b4c93f66&q="+id, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                this.setState({
                    hits: JSON.parse(result).hits[0],
                });
            })
            .catch((error) => console.error(error));
    }
}

export default HintDetail;