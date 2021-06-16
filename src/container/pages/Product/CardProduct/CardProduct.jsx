import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render () {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img 
                        src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" 
                        alt="gambar" 
                    />
                </div>
                <p className="product-title">Celana Jeans</p>
                <p className="product-price">Rp. 34.000</p>
                <Counter 
                    // onCounterChange={(value) => this.props.onCounterChange(value)} 
                />
            </div>
        );
    }
};

export default CardProduct;