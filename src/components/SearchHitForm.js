import React, {Component} from 'react';

class SearchHitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKeyword: this.props.currentKeyword || ''
        }
    }

    doSearchHit = (e) => {
        this.setState({ currentKeyword: e.target.value });
        this.props.searchHit(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.search(e);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-md-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search"
                            value={this.props.currentKeyword}
                            onChange={this.doSearchHit}
                        />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchHitForm;