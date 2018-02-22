import React, { Component } from 'react';

import {withGoogleMap, GoogleMap, DirectionsRenderer, Marker } from 'react-google-maps';

class MapWithDirectionRenderer extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            showDirectionMap: false,
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `400px` }} />,
            mapElement: <div style={{ height: `100%` }} />,
            directions: undefined,
            defaultCenter: undefined,
            distance: undefined,
            duration: undefined
        }
    }

    componentWillReceiveProps(nextProps){
        const _google = window.google;
        const DirectionsService = new _google.maps.DirectionsService();
        var _this = this;
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                DirectionsService.route({
                    origin: new _google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                    destination: new _google.maps.LatLng(_this.props.lat, _this.props.lng),
                    travelMode: _google.maps.TravelMode.DRIVING,
                  }, (result, status) => {
                    if (status === _google.maps.DirectionsStatus.OK) {
                        var distance = result.routes[0].legs[0].distance.text;
                        var duration = result.routes[0].legs[0].duration.text;
                      _this.setState({
                        showDirectionMap: true,
                        loading: false,
                        directions: result,
                        defaultCenter: {lat:_this.props.lat, lng:_this.props.lng},
                        distance: distance,
                        duration: duration
                      });
                    } else {
                        _this.setState({showDirectionMap: false, loading: false });
                      console.error(`error fetching directions ${result}`, result);
                    }
                  });
            },
            function() {
                alert("geolocation not supported!!");
            }
    );
    }

    componentDidMount(){
        const _google = window.google;
        const DirectionsService = new _google.maps.DirectionsService();
        var _this = this;
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                DirectionsService.route({
                    origin: new _google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                    destination: new _google.maps.LatLng(_this.props.lat, _this.props.lng),
                    travelMode: _google.maps.TravelMode.DRIVING,
                  }, (result, status) => {
                    if (status === _google.maps.DirectionsStatus.OK) {
                        var distance = result.routes[0].legs[0].distance.text;
                        var duration = result.routes[0].legs[0].duration.text;
                      _this.setState({
                        showDirectionMap: true,
                        loading: false,
                        directions: result,
                        defaultCenter: {lat:_this.props.lat, lng:_this.props.lng},
                        distance: distance,
                        duration: duration
                      });
                    } else {
                        _this.setState({showDirectionMap: false, loading: false });
                      console.error(`error fetching directions ${result}`, result);
                    }
                  });
            },
            function() {
                alert("geolocation not supported!!");
            }
    );
    }

    render(){
        const DirectionComponent = withGoogleMap((props) =>
        <GoogleMap
                defaultZoom={7}
                defaultCenter={props.defaultCenter}>
                {props.directions && <DirectionsRenderer directions={props.directions} />}
            </GoogleMap>
    );

    const LocationComponent = withGoogleMap((props) =>
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        >
        {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng  }} />}
        </GoogleMap>
    );
        return(
            <div>
                {this.state.loading ?
                <div><img src={require('../images/loading.gif')} alt="loading"/><br/> Loading...</div>
                :
                this.state.showDirectionMap ? 
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                        <DirectionComponent 
                        googleMapURL={this.state.googleMapURL}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        defaultCenter = {this.state.defaultCenter}
                        directions = {this.state.directions}
                        />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6 alignLeft">
                        <span> <i className="fa fa-map-signs"></i> Total Distance from your place: {this.state.distance} </span>
                        <br/>
                        <span><i className="fa fa-clock-o"></i> Total Duration: {this.state.duration} </span>
                        </div>
                    </div>
                    : 
                    <LocationComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    lat={this.props.lat}
                    lng={this.props.lng}
                    />
                }
                
        </div>
        )
    }
}

export default MapWithDirectionRenderer;