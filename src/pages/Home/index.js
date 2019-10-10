import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            userInfo: {},
            repositoryData: []
        }
    }

    componentDidMount() {
        this.loadUserInfor();
        this.loadRepo();
    }


    loadUserInfor = async () => {
        const { match: { params } } = this.props;
        const request = await api.get(`/users/${params.repo}`);
        this.setState({userInfo: request.data});
    }

    loadRepo = async () => {
        const { match: { params } } = this.props;
        const request = await api.get(`/users/${params.repo}/repos`);
        console.log(request);  
        this.setState({repositoryData: request.data});
    }


  render() {
    return(
        <>
        <div className="container_">  
            <div className="container">
                <div className="row">
                <div className="col-12">
                        <div id="cr-1">
                                <img src={this.state.userInfo.avatar_url} />
                                <div className="row" id="cr-s-1">
                                    <div className="col-12">
                                    <h4>{(this.state.userInfo.name == null) ? "Whats Repository?" : this.state.userInfo.name}</h4>
                                    </div>
                                    <div className="col-12" id="d_description">
                                        <span>{this.state.userInfo.bio}</span>
                                    </div>
                                    <div className="col-12">
                                        <ul>
                                            <li><span> {this.state.userInfo.location}</span></li>
                                            <li><span> {this.state.userInfo.blog}</span></li>
                                            <li><span> {this.state.userInfo.email}</span></li>                            
                                        </ul>
                                    </div>
                                </div>
                        </div>
                        <div id="cr-2">
                            <ul>
                                <li className="active">
                                    <a href="#">Repositories</a>
                                </li>
                                <li>
                                    <a href="#">Packages</a>
                                </li>
                                <li>
                                    <a href="#">People</a>
                                </li>
                                <li>
                                    <a href="#">Projects</a>
                                </li>
                            </ul>
                        </div>
                </div>
                </div>
            </div>
        </div>

        <div className="container_body">
            <div className="container" id="">  
                <div className="row">
                    { 
                        this.state.repositoryData.map( r => (
                            <div className="col-12 card_repo">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title"><a href="#">{r.name}</a></h5>
                                        <p class="card-text">{r.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
     </>
    );
  }
}

