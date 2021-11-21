import React from "react";
import './styles/JobItem.css';


function JobItem({listing}) {
    return (
        <div className="job-item-container">
            <h2>{listing.title}</h2>
            <div class="Row">
                <div class="place-image">
                    <img src={listing.photo} />
                </div>
                <div clss="Column">
                    <p>{listing.description}</p>
                    <div className="job-tags">
                        <a>{listing.tag1}</a>
                        <a>{listing.tag2}</a>
                    </div>
                    <br />
                    <div>
                        Ratings
                    </div>
                </div>
                <br />
            </div>
            <div className="job-posted-details">
                <div className="profile-button">
                    <div className="profile-photo">
                        <img></img>
                    </div>
                    &nbsp;
                    <a>{listing.name}</a>
                </div>
                <div>
                    <a>{listing.date}</a>
                </div>
            </div>
        </div>
    );
}


export default JobItem;