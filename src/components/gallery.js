import React, {Component} from 'react';
import axios from 'axios';
import SearchHitForm from "./SearchHitForm";
import Hititem from "./Hititem";

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            currentPage: 1,
            PageSize: 10,
            currentKeyword: '',
            total_pages: 1,
            array: []

        }
    }

    getHits = () => {
        const myHeaders = new Headers();
        // myHeaders.append("Cookie", "__cf_bm=xwBfr6P.M_zDP3tbf08Gd2X5lFMmeIzvUQp.RBDmMKE-1740864347-1.0.1.1-8aYrfDwzhXAu.uamZuPh9MOd3ui_YZswVY9RbFTfDtspk3cAXHIcX5LJu9BiFiWcNhY3CMtHExhU.D.Ceyw6dLaSSDTj9Nhlkk3zi4hE7RU; anonymous_user_id=None; dwf_search_ai_tags=True");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://pixabay.com/api/?key=49125697-1e3ccc9a93d6f2720b4c93f66&q="
                                                                                        +this.state.currentKeyword+"&page=" + this.state.currentPage
                                                                                        +"&per_page="+this.state.PageSize,
                                                                                        requestOptions)

            .then((response) => response.text())
            .then((result) => {
                let totalHits = JSON.parse(result).totalHits;
                let totalPages = Math.ceil(totalHits / this.state.PageSize); // Simplification

                this.setState({
                    hits: JSON.parse(result).hits,
                    total_pages: totalPages,
                    array: new Array(totalPages).fill(0)
                });
            })
            .catch((error) => console.error(error));

    }
    search =(e)=>{
        e.preventDefault();
        this.getHits();
    }

    searchHit = (e) => {
        e.preventDefault();
        this.setState({
                                currentKeyword : e.target.value,
                                currentPage : 1
        })
    }

    render() {
        return (

            <div>
                <div className="row mt-3 ml-1">
                    <ul className="nav nav-pills">
                        {
                            this.state.array.map((v, k) =>
                                <li className="nav-item" key={k}>

                                    <a className={this.state.currentPage == k + 1 ? 'nav-link active' : 'nav-link'}
                                       href="#" onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({currentPage: k + 1}, () => {
                                            this.getHits();
                                        })
                                    }}>{k + 1}
                                    </a>

                                </li>
                            )
                        }

                    </ul>
                </div>


                <SearchHitForm searchHit={this.searchHit} search={this.search}
                               currentKeyword={this.state.currentKeyword}></SearchHitForm>


                               
                <div className="row">
                    {
                        this.state.hits.map((hit, index) =>
                            <Hititem key={index} hit={hit} />
                        )
                    }
                </div>

            </div>

        );
    }


}

export default Gallery;