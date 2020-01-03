import React, { Component } from 'react';
import './Pockemon.css'
class Pockemon extends Component {
    render() {
        const {id,img,name}=this.props.pockemon;
        console.log(id,name,img);
        return (
                <div className="col-md-4 ">
                    <div className="row mx-3 pock-cardTitle_bg">
                        <div className="col-sm-9 col-md-9 text-left">
                            {name}
                        </div>
                        <div className="col-sm-3 col-md-3 text-right">
                            ID: {id}
                        </div>
                    </div>
                    <div className="col-md-12 pock-card_bg text-center">
                        <img src={img} alt="" />   
                    </div>               
                </div>
                );
    }
}

export default Pockemon;