import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import DestinationComponent from './destinationComponent';

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            randomState: undefined
        }
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    onRadioChange(e){
        //alert(e.target.value);
        var query =  e.target.value + '+in+usa';
        this.props.dispatch(actions.GetPlacesList(query));
        
        setTimeout(function(){
            var element = document.getElementById("destinationComp");
            document.getElementById("destinationComp").offsetTop + 10;
            element.scrollIntoView({behavior: "smooth", block: "start"});
            }, 20);
    }


  render() {
    return (
      <div className="bodyContainer">
      
        <h2 className="mainHeader"> What excites you? </h2>
        <div className="placeSelection">
            <div className="form-group individualPlaces">
            <img src={require('../images/city.jpg')} className="rounded mx-auto d-block"  alt="cities" width="350" height="auto"/>
            <input name="group100" type="radio" value="landmarks" onClick={this.onRadioChange}/>
            <label>Landmarks</label>
            </div>
            <div className="form-group individualPlaces">
            <img src={require('../images/beach.jpeg')} className="rounded mx-auto d-block"  alt="beaches" width="350" height="auto"/>
                <input name="group100" type="radio" value="beaches" onClick={this.onRadioChange}/>
                <label>Beaches</label>
            </div>

            <div className="form-group individualPlaces">
                <img src={require('../images/mountain.jpg')} className="rounded mx-auto d-block"  alt="mountains" width="350" height="auto"/>
                <input name="group100" type="radio" value="states+with+mountains" onClick={this.onRadioChange}/>
                <label>Mountains</label>
            </div>
            <div className="form-group individualPlaces">
                <img src={require('../images/nationalpark.jpg')} className="rounded mx-auto d-block"  alt="national parks" width="350" height="auto"/>
                <input name="group100" type="radio" value="national+parks" onClick={this.onRadioChange}/>
                <label>National Parks</label>
            </div>
            <div className="form-group individualPlaces">
                <img src={require('../images/hiking.jpg')} className="rounded mx-auto d-block"  alt="hiking" width="350" height="auto"/>
                <input name="group100" type="radio" value="hiking+destinations" onClick={this.onRadioChange}/>
                <label>Hiking</label>
            </div>
            <div className="form-group individualPlaces">
                <img src={require('../images/historicalplace.jpg')} className="rounded mx-auto d-block"  alt="historical places" width="350" height="auto"/>
                <input name="group100" type="radio" value="historical+places" onClick={this.onRadioChange}/>
                <label>Historical Places</label>
            </div>
            <div className="form-group individualPlaces">
                <img src={require('../images/surprise.png')} className="rounded mx-auto d-block"  alt="historical places" width="350" height="auto"/>
                <input name="group100" type="radio" value="popular+destinations" onClick={this.onRadioChange}/>
                <label>Surprise Me</label>
            </div>
        </div>

        <div id="destinationComp">
        {this.props.places.randomPlace ? 
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
