import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    handlePrevious=async()=>{

        let url= `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36f50f2b27604799b41f827583fcd0d0&page=${this.state.page - 1}&pagesize=20`
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles
        })
    }

    handleNext=async()=>{
        if(this.state.page + 1>Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url= `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36f50f2b27604799b41f827583fcd0d0&page=${this.state.page + 1}&pagesize=20`
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles
            })
        }
    }

    constructor(){
        super();
        this.state={
            articles : [],
            loading : false,
            page:1
        }
    }
    async componentDidMount(){
        let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36f50f2b27604799b41f827583fcd0d0&page=1&pagesize=20"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles,  totalResults : parseData.totalResults })
    }
render() {
    return (
        
        <div className='container my-4'>
        <h2>NewsMonkey - Top Headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{ return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem  title= {element.title?element.title:""} description = {element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div> })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
        </div>
    )
}
}

export default News
