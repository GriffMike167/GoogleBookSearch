import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { BookListItem } from "../components/BookList";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";


class Books extends Component {
    state = {
      books: [],
      search: "",
      title: "",
      author: "",
      description: ""
    };
  
    componentDidMount() {
  
    }
  


handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
      API.searchBook(this.state.search)
        .then(res => this.setState({ books: res.data.items }))
        .catch(err => console.log(err));
  };

handleSavedBook = data => {
    console.log("This is the book data from handleSavedBook:")
    console.log(data);
    API.saveBook(data)
    .then(res => alert("Your book was saved! 😄") && this.loadBooks())
   
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Google Books Search</h1>
          <h5>Search for and Save Books of Interest</h5>
        </Jumbotron>
      <Container fluid>
      <Row>
      <Col size="md-6">
            <div>
            <form>
                Book Search:
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search for a Book"
              />
            </form>
            </div>
        </Col>
        </Row>
        </Container>
    </div>
);


    
}
}

export default Books;