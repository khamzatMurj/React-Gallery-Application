import React, {Component} from 'react';

class Hititem extends Component {
    render() {
        const { hit } = this.props;
        return (
            <div className="col-md-4">
                <div className="card mt-3">
                    <div className="card-header">
                        {hit.tags} <br/> {hit.webformatWidth} x {hit.webformatHeight}
                    </div>
                    <div className="card-body m-1">
                        <img height={200} className={'card-img'} src={hit.webformatURL} alt="img"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hititem;