/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"
require("dotenv").config();
const API_KEY = "";


export default {

    getBooks: function() {
        return axios.get("/api/books");
    },

    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    deleteBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    },
    searchBook: function(bookData){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookData}&key=${API_KEY}`)
    }

}