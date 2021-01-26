import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"



class Detail extends Component {
    state = {
      book: {}
    };
    // When this component mounts, grab the book with the _id of this.props.match.params.id
    componentDidMount() {
      API.getBook(this.props.match.params.id)
        .then(res => this.setState({ book: res.data }))
        .catch(err => console.log(err));
    }