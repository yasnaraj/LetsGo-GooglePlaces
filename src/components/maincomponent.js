import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import DestinationComponent from './destinationComponent';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            randomState: undefined,
            showPlace: false
        }

        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(val){
        //alert(e.target.value);
        var _this = this;
        var query =  val + '+in+usa';
        this.setState({showPlace: false});
        this.props.dispatch(actions.GetPlacesList(query)).then((resp) => {
            

            setTimeout(function(){
                _this.setState({showPlace: true});

                var element = document.getElementById("destinationComp");
                document.getElementById("destinationComp").offsetTop + 20;
                element.scrollIntoView({behavior: "smooth", block: "start"});
                }, 500);
        });
        
        
    }


  render() {
    return (
      <div className="bodyContainer">
      
        <h2 className="mainHeader"> What excites you? </h2>
        <div id="placesComp" className="placeSelection">
            <button className="form-group individualPlaces" onClick={() => this.onBtnClick("national+landmarks")}>
            <img src={require('../images/city.jpg')} className="rounded mx-auto d-block"  alt="cities" width="250" height="auto"/>
            <label>Landmarks</label>
            </button>
            <button className="form-group individualPlaces" onClick={() => this.onBtnClick("beaches")}>
            <img src={require('../images/beach.jpeg')} className="rounded mx-auto d-block"  alt="beaches" width="250" height="auto"/>
                <label>Beaches</label>
            </button>

            <button className="form-group individualPlaces" onClick={() => this.onBtnClick("states+with+mountains")}>
                <img src={require('../images/mountain.jpg')} className="rounded mx-auto d-block"  alt="mountains" width="250" height="auto"/>
                <label>Mountains</label>
            </button>
            <button className="form-group individualPlaces" onClick={() => this.onBtnClick("national+parks")}>
                <img src={require('../images/nationalpark.jpg')} className="rounded mx-auto d-block"  alt="national parks" width="250" height="auto"/>
                <label>National Parks</label>
            </button>
            <button className="form-group individualPlaces" onClick={() => this.onBtnClick("hiking+destinations")}>
                <img src={require('../images/hiking.jpg')} className="rounded mx-auto d-block"  alt="hiking" width="250" height="auto"/>
                <label>Hiking</label>
            </button>
            <button className="form-group individualPlaces" onClick={() => this.onBtnClick("historical+places")}>
                <img src={require('../images/historicalplace.jpg')} className="rounded mx-auto d-block"  alt="historical places" width="250" height="auto"/>
                <label>Historical Places</label>
            </button>
            <button className="form-group individualPlaces" onClick={() => this.onBtnClick("popular+destinations")}>
                <img src={require('../images/surprise.png')} className="rounded mx-auto d-block"  alt="historical places" width="250" height="auto"/>
                <label>Surprise Me</label>
            </button>
        </div>

        <div id="destinationComp">
        {this.props.places.randomPlace && this.state.showPlace ? 
            <DestinationComponent  randomPlace={this.props.places.randomPlace}/>
            : null}
        </div>
        

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

export default connect(mapStateToProps)(MainComponent);
