import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Hititem extends Component {
    render() {
        const { hit } = this.props.hit;
        return (
            <div className="col-md-4">
                <div className="card mt-3">
                    <div className="card-header">
                        {hit.tags} <br/> {hit.webformatWidth} x {hit.webformatHeight}
                    </div>
                    <div className="card-body m-1">
                        <img height={200} className={'card-img'} src={hit.webformatURL} alt="img"/>
                    </div>
                    <div className="ms-4 me-2 mb-3">
                        {/*<a href={hit.pageURL} target="_blank" rel="noopener noreferrer">*/}
                        <Link to={'/hintDetail/'+hit.id } className="btn btn-success">Details</Link>


                        {/*</a>*/}
                    </div>
                </div>
            </div>
        );
    }

}

export default Hititem;