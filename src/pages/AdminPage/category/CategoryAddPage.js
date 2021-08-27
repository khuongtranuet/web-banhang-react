import React, {Component} from 'react';
import CategoryAdd from "../../../components/Admin/category/CategoryAdd";

class CategoryAddPage extends Component {
    render() {
        return (
            <div>
                <CategoryAdd  history={this.props.history}/>
            </div>
        );
    }
}

export default CategoryAddPage;