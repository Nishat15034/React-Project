import React, {Component}  from 'react';
import classes from  './IceCreamBuilder.module.css';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';


export default class IceCreamBuilder extends Component{

    state = {

        items: {
            vanilla : 35,
            chocolate: 60,
            lemon : 30,
            strawberry: 45,
            orange: 30,
        },

        scoops: [],
        totalPrice: 0,

    };

    
    

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
    };


    removeScoop = (scoop) =>{

        const {scoops,items} = this.state;
        const workingScoops = [...scoops];
        const scoopIndex = workingScoops.findIndex((sc)=> sc=== scoop);
       
        workingScoops.splice(scoopIndex,1);

        this.setState((prevState)=>{

            return{

                scoops: workingScoops,
                totalPrice: prevState.totalPrice - items[scoop],

            };

            

        });


    }


    render()
    {
        const {items, totalPrice,scoops} = this.state;
        return(


            <div className={['container',classes.container].join(' ')}>
                <IceCream scoops={scoops}/>
                <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} scoops={scoops}/>

            </div>
        );
    }






}