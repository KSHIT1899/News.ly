import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/09/motorola-edge-20-pro-india-launch/-476x249w4/gsmarena_001.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
