import React from 'react';
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push('/');
        }
    }

    render(){
        const { location } = this.props;
        if(location.state){
            return (
            <div className="detail_movie">
                <h1 className="dtail_title">{location.state.title}</h1>
                <div className="detail_year">{location.state.year}</div>
                <hr />
                <li>{location.state.genres}</li>
                <br />
                <img src={location.state.poster} className="detail_img" />
                <hr />
                <div className="content">{location.state.summary}</div>
                <hr />
            </div>
            );
        }
        else{
            return null;
        }
    }
}

export default Detail;