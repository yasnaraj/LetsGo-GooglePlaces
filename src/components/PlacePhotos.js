import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';

class PlacePhotos extends Component{
    constructor(props){
        super(props);
        this.state = {
            photoSrc: [],
            reviews: [],
            index: 0,
            direction: null
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    componentWillReceiveProps(nextProps){
        var photos = nextProps.place.photos;
        var reviews = nextProps.place.reviews;

        var arr = [];
        var arr2 = [];
        if(photos){
            photos.forEach(element => {
                var url = element.getUrl({'maxWidth': 400});
                arr.push(url);
            });
            this.setState({photoSrc: arr});
        }else{
            this.setState({photoSrc: []});
        }

        
        if(reviews){
            reviews.forEach(element => {
                arr2.push(element);
            });
            this.setState({reviews: arr2});
        }else{
            this.setState({reviews: []});
        }
        
    }

    handleSelect(selectedIndex, e) {
        //alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
          index: selectedIndex,
          direction: e.direction
        });
      }

    render(){
        var _this = this;
        const n = 5; 
        return(
            <div className="gallery">
            {this.state.photoSrc.length > 0 ? <div className="col-sm-6 col-md-6 col-lg-6">  
                <h2 className="subHeader"> Image Gallery: </h2>
               <br/>
            
               <Carousel  
               activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
               {
                    this.state.photoSrc.map(function(data, index){
                        return (
                            <Carousel.Item key={index}>
                                    <img className="fitCover" src = {data} alt="data" key={index} />
                                    <Carousel.Caption>
                                        <h3>{_this.props.name}</h3>
                                    </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
                </Carousel>
                <br/>

            </div> : null}

            {this.state.reviews.length > 0 ? <div className="col-sm-6 col-md-6 col-lg-6" style={{height: '600px', overflowY: 'auto'}}>
                <h2 className="subHeader"> Google Reviews: </h2>
               <br/>
                    {this.state.reviews.map(function(data, index){
                        return(
                            <div key={index}>
                                <div >
                                    <img src={data.profile_photo_url} className="avatar" alt={data.author_name} />
                                    <strong style={{fontSize: '1.5rem', marginLeft: '10px', float: 'left'}}>
                                    {data.author_name}
                                    <br/>
                                    <span style={{color: 'orange', float:'left'}}>{data.rating} {
                                            [...Array(data.rating)].map((ele, j) => <i className="fa fa-star" key={j}></i>)
                                    }{
                                            [...Array(5-data.rating)].map((ele, j) => <i className="fa fa-star-o" key={j}></i>)
                                    }
                                    </span>
                                    </strong>
                                    
                                </div>
                            <div className="row" style={{width: '100%', textAlign: 'left', fontSize: '14px'}}>
                            {data.text}
                            </div>
                            <hr/>
                            
                            </div>
                        )
                    })}

                </div> : null
            }
               

            </div>
        )
    }
}

export default PlacePhotos;