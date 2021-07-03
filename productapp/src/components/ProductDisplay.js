import { Component } from "react";
import { ProductEditor } from "./ProductEditor";
import ProductTable from "./ProductTable";

export default class ProductDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showEditor: false,
            selectedProduct: null
        }
    }

    startEditing = p => {
        this.setState({showEditor: true, selectedProduct: p})
    }

    createProduct = () => {
        this.setState({showEditor: true, selectedProduct: {}})
    }

    cancelEditing = () => {
        this.setState({showEditor: false, selectedProduct: null})
    }

    saveProduct = p => {
        this.props.saveCallback(p)
        this.setState({showEditor: false, selectedProduct: null})
    }

    render() {
        if (this.state.showEditor) {
            return <ProductEditor key={this.state.selectedProduct.id}
                product={this.state.selectedProduct}
                saveCallback={this.saveProduct}
                cancelCallback={this.cancelEditing}
            />
        }

        return <div className="m-2">
            <ProductTable products={this.props.products} 
                editCallback={this.startEditing}
                deleteCallback={this.props.deleteCallback}
            />
            <div className="text-center">
                <button className="btn btn-primary m-1"
                    onClick={this.createProduct}
                >
                    Create product
                </button>
            </div>
        </div>
    }
}