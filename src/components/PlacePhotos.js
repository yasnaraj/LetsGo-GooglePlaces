import React, { Component } from 'react';

class PlacePhotos extends Component{
    constructor(props){
        super(props);
        this.state = {
            photoSrc: []
        }
    }
    
    componentWillReceiveProps(nextProps){
        var photos = nextProps.place.photos;

        var arr = [];
        if(photos){
            photos.forEach(element => {
                var url = element.getUrl({'maxWidth': 400});
                arr.push(url);
            });
            this.setState({photoSrc: arr});
        }else{
            this.setState({photoSrc: []});
        }
        
    }

    render(){
        
        return(
            <div >
               <h2 className="subHeader"> Image Gallery: </h2>
                <div className="gallery">
                {
                    this.state.photoSrc.map(function(data, index){
                        return (
                            <img src = {data} alt="data" key={index} className="rounded mx-auto d-block" />
                        )
                    })
                }
                </div>

            </div>
        )
    }
}

export default PlacePhotos;