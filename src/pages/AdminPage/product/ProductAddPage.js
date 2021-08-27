import React, {Component} from 'react';
import ProductAdd from "../../../components/Admin/product/ProductAdd";

class ProductAddPage extends Component {
    render() {
        return (
            <div>
                <ProductAdd history={this.props.history}/>
            </div>
        );
    }
}

export default ProductAddPage;