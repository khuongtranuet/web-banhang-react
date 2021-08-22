import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accFetchProductsRequest } from '../../actions/index';

class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : []
        };
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        var { products } = this.props;
        // var { products } = this.state;
        
        return (
            <div className="container">
                <h1>Đây là giỏ hàng</h1>
                <div>{this.showProducts(products)}</div>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <h1 key={index}>{product.title}</h1>
                );
            });
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(accFetchProductsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
