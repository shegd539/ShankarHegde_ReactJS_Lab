import { Component } from "react";

class ExpenseTracker extends Component{

    constructor(props){
        super(props)
        this.state ={
            payeeName:"",
            product:"",
            price:0,
            setDate:this.setDefaultDate(),

        };


        //this.setPayeeName=this.setPayeeName.bind(this);
    }
    

    setDefaultDate = () =>{
        const defaultTodayDate=new Date();
        return(
            defaultTodayDate.getFullYear
        );
    }




    render(){

        return(
            <>
            <section>
                <header>
                <h1>Add New Item</h1>
                    <p>
                    Read below instructions before proceding
                    <br/> Make sure you fill all the fields where * provided
                    </p>

                </header>
                <form>
                <article>
                <p> Name  </p>
                    <select name="payeeName" id="district" required 
                    value={this.state.payeeName} onChange={this.setPayeeName} >
                        <option value="" defaultChecked>Choose</option>
                        <option value="Rahul">Rahul</option>
                        <option value="Ramesh" >Ramesh</option>
                        <option value="ShankarHegde" >ShankarHegde</option>
                    </select>

                </article>

            

                <article>
                <p> Product Purchased </p>
                <input type="text" required value={this.state.setProduct}  name="product"
                    onChange={this.setProduct}
                ></input>

                </article>

                <article>
                <p> Price </p>
                <input type="number" required value={this.state.setPrice} 
                    onChange={this.setPrice}
                ></input>

                </article>

                <article>
                <p> Date </p>
                <input type="date" required value={this.state.setDate} 
                    onChange={this.loggedDate}
                ></input>

                </article>
                <button type="submit" >Submit </button>
                <button type="close" >Close </button>
                </form>
            </section>
            
            </>
    
            );


    }



}
export default ExpenseTracker;