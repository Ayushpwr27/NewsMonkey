import React from 'react'

const NewsItem=(props)=> {
    let {title, description,imageUrl,newsUrl,author,date,source} = props
    return (
      <div className='my-3'>
        <div className="card">
        <div style={{ display:`flex`, justifycontent: `flex-end`, position: `absolute`, right: 0}}>
          <span className="badge badge text-bg-info ">{source}</span>
        </div>
          <img src={!imageUrl?"https://media.istockphoto.com/id/1177877876/photo/newspaper-and-coffee-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=AkHmICq072B8pT32n4EYjofe5dYqtDKaJ45v3R8qxQU=":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm" rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem