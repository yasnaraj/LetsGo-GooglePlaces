import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import * as reducer from '../store/reducer';

import MapWithDirectionRenderer from './MapWithDirectionRenderer';
import PlacePhotos from './PlacePhotos';

class DestinationComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomPlace: props.randomPlace,
      lat:  props.randomPlace.geometry.location.lat(),
      lng:  props.randomPlace.geometry.location.lng()
    }

    this.checkCurrentProp = this.checkCurrentProp.bind(this);
  }

    componentDidMount(){
        var placeId = this.props.randomPlace.place_id;
        this.props.dispatch(actions.GetPlaceDetail(placeId));
    }

    componentDidUpdate(prevProps, prevState){
        this.checkCurrentProp(prevProps.places.randomPlace);
    }

    checkCurrentProp(randomPlace){
      if(randomPlace.place_id !== this.props.randomPlace.place_id){
        var placeId = this.props.randomPlace.place_id;
        this.props.dispatch(actions.GetPlaceDetail(placeId));
      }
    }
    
  render() {
    return (
      <div className="bodyContainer individualPlaces">
        <h2 className="mainHeader"> You should check out - <span style={{color: 'purple'}}>{this.props.randomPlace ? this.props.randomPlace.name : null} </span></h2>

        <MapWithDirectionRenderer 
        lat={this.state.lat}
        lng={this.state.lng}/>

        <PlacePhotos place = {this.props.places.placeDetail} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  var { places }  = state;
  return {
      places
  };
}

export default connect(mapStateToProps)(DestinationComponent);
