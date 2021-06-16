import React, { Component } from 'react';
import { GlobalConsumer } from '../../../context/context';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';
// import { connect } from 'react-redux';
// import { RootContext } from '../../Home/Home';

class Product extends Component {
    // state = {
    //     order: 4
    // };

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     });
    // };

    render () {
        return (         
            <>
            <p>Halaman Produk</p>
            <hr />
                <div className="header">
                    <div className="troley">
                        <div className="count">{ this.props.state.totalOrder }</div>
                    </div>
                </div>
            <CardProduct 
                    // onCounterChange={(value) => this.handleCounterChange(value)} 
                />
            </>       
        );
    }
};

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps) (Product);
export default GlobalConsumer (Product);