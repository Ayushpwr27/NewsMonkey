import React, { Component } from 'react'

export class NewsItem extends Component {
  

  render() {
    let {title, description,imageUrl,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://media.istockphoto.com/id/1177877876/photo/newspaper-and-coffee-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=AkHmICq072B8pT32n4EYjofe5dYqtDKaJ45v3R8qxQU=":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm" rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem