import React, { Component } from 'react';
import Pockemon from '../Pockemon/Pockemon';
import { data } from './data';

class PockemonList extends Component {
    
    constructor () {
        super();
        this.state = { 
            pockemon1 : [],              
            pageIndex : 0,
            pageSize: 3,
            pageinationStart:0,
            paginationEnd:3
        }  
    }
        
    componentDidMount () {  
        this.setState({
            pockemon1 : data
        })
    }
    
    //Next Record
    nextRecord = () => {   
        let {pageIndex, pageSize, pockemon1, pageinationStart, paginationEnd} = this.state       
        console.log('Page Index', pageIndex)
            if(pageIndex <= pockemon1.length/pageSize) 
            
            {
                console.log(pockemon1.length/pageSize);
                console.log('Done', pageIndex)
                pageIndex = pageIndex + pageSize; 
            }
            else{
                alert('End of Pokemon')
            }
        
            pageinationStart = pageIndex ;    
            console.log("nextStart",pageinationStart)  ; 
            paginationEnd = pageinationStart + pageSize; 
            console.log("nextEnd",paginationEnd)  ; 

            this.setState({
                pageIndex,
                pageSize,
                pageinationStart,
                paginationEnd
            })        
    }

    //PRevious REcord
    PrevRecord = () => {
        let {pageIndex, pageSize, pageinationStart, paginationEnd} = this.state        
        if(pageIndex !== 0) {
            pageIndex = pageIndex - pageSize
            paginationEnd  = paginationEnd - pageSize
            pageinationStart = pageinationStart - pageSize
        }
        else {
            alert('No Previous Pokemon')
        }   
        this.setState({
            pageIndex,
            paginationEnd,
            pageinationStart
        })
    }

    render() {
        const {pockemon1,pageinationStart, paginationEnd}  = this.state; 
        console.log("renderPagination", pageinationStart, paginationEnd);
        const current = pockemon1.slice(pageinationStart, paginationEnd);

        return (
            <div className="jumbotron">
                 <div className="container">                
                    <div className="row">
                        {current.map(pockemon=> {                   
                        return <Pockemon key={pockemon.id} pockemon={pockemon} />
                        })}                        
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-left">
                            <button className="pock-button" onClick ={this.PrevRecord}>Prev</button>
                        </div>
                        <div className="col-md-6 text-right">
                            <button className="pock-button" onClick={this.nextRecord}>Next</button>
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

export default PockemonList;