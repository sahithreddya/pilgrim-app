import axios from 'axios';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Articles extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount(){
    this.getArticles()
  }

  render() {
    return (
      <div className="HomePage">
        <h1>WELCOME TO ARTICLES</h1>
        {
          this.state.articles.map(item => <p key={item.id}>{item.title}</p>)
        }
      </div>
    );
  }

  getArticles = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      this.setState({
        articles: response.data
      })
    })
  }
}

export default Articles;
