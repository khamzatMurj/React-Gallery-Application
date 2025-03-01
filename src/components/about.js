import React, {Component} from 'react';

class About extends Component {


    constructor(props) {
        super(props );
        this.state = {
            new_skill : '',
            contact : {
                name : 'Hamza',
                email : 'hamza@gmail.com',
                message : 'Hello World !',
                skill : [
                    {id:1, skill: 'Software Engineer'},
                    {id:2, skill: 'Web Developer'},
                    {id:3, skill: 'Full Stack Developer'},
                    {id:4, skill: 'Machine Learning'},
                ]
            }
        }

    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        Contact
                    </div>
                    <div className="card-body">
                        <p>{this.state.contact.message}</p>
                        <div className="row">
                            <div className="col-md-6 pl-5">
                                <img src="https://picsum.photos/200/200"/>
                            </div>
                            <div className="col-md-6 pt-5">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <h5 className="card-title">Name : {this.state.contact.name}</h5>
                                    </li>
                                    <li className="list-group-item">
                                        <h5 className="card-title">Email : {this.state.contact.email}</h5>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>

                </div>
                <div className="card mt-5">
                    <div className="card-header">
                        Skills : {this.state.new_skill}
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" value={this.state.contact.message}
                                          onChange={(e) => this.setState({contact: {...this.state.contact, message: e.target.value}})}/>
                            </div>
                        </form>
                        <form onSubmit={this.addSkill}>
                            <div className="row mb-2">
                                <div className="col-md-8">
                                    <input type="text" className="form-control" placeholder="Skill" name="skill"
                                           value={this.state.new_skill}
                                           onChange={(e) =>
                                               this.setskill(e)
                                    }
                                    />
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-primary" type="submit">Subbmit</button>
                                </div>

                            </div>
                        </form>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>SKILL</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.contact.skill.map((v,k) => (
                                <tr key={k}>
                                    <td>{v.id}</td>
                                    <td>{v.skill}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => this.ondelete(v)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-trash-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>
        );
    }

    setskill = (event) => {
        this.setState(
            {
                new_skill: event.target.value
            }
        )
    }
    addSkill = (event) => {
        event.preventDefault();
        if (this.state.new_skill !== '') {
            this.setState({
                contact: {
                    ...this.state.contact,
                    skill: [...this.state.contact.skill, {
                        id: this.state.contact.skill.length + 1,
                        skill: this.state.new_skill
                    }]
                },
                new_skill: ''
            })
        }
    }
    ondelete = (k) => {
        console.log(k)
        let index = this.state.contact.skill.indexOf(k);
        let listskills = [...this.state.contact.skill];
        listskills.splice(index, 1);
        console.log(listskills)
        this.setState({
            contact: {
                ...this.state.contact,
                skill: listskills
            }
        })
    }
}

export default About;