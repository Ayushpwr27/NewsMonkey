import React,{ useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async()=>{
        props.setProgress(10);
        const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
        setloading(true) 
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(50);
        setarticles(parseData.articles)
        settotalResults(parseData.totalResults)
        setloading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;  
        updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async() => {
        
        const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=36f50f2b27604799b41f827583fcd0d0&page=${page+1}&pagesize=${props.pageSize}`
        let data = await fetch(url);
        setpage(page+1)
        let parseData = await data.json()
        
        setarticles(articles.concat(parseData.articles))
        settotalResults(parseData.totalResults)
    };
    return (
        
        <div className='container my-4'>
        <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}


        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}>

            <div className="container">
            <div className="row">
            {articles.map((element)=>{ 
                return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem  
                    title= {element.title?element.title:""} 
                    description = {element.description?element.description:""} 
                    imageUrl={element.urlToImage} 
                    newsUrl={element.url} 
                    author={element.author} 
                    date={element.publishedAt} 
                    source={element.source.name} />
                </div> })}
            </div>
            </div>
            </InfiniteScroll>
        </div>
    )
}


News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general' 
}
News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string 
}  
export default News
