import React from "react";
import { Component } from "react";
import ProductDisplay from "./ProductDisplay";
import { Selector } from "./Selector";
import SupplierDisplay from "./SupplierDisplay";

export default class ProductsAndSuppliers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id:1,
                    name: "Kayak",
                    category: "Watersports",
                    price: 48.95
                },
                {
                    id:2,
                    name: "Lifejacket",
                    category: "Watersports",
                    price: 48.95
                },
                {
                    id:3,
                    name: "Soccer ball",
                    category: "Soccer",
                    price: 19.50
                }
            ],

            suppliers: [
                {
                    id: 1, name: "Surf dudes", city: "San Jose", products: [1,2]
                },
                {
                    id:2, name: "Field suppliers", city: "New York", products: [3]
                }
            ]
        }

        this.idCounter = 100
    } // end constructor

    saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++
            this.setState(s => s[collection] = s[collection].concant(item))
        } else {
            this.setState(s => s[collection] = s[collection].map(stored => stored.id === item.id ? item : stored))
        }
    }

    deleteData = (collection, item) => {
        this.setState(s => s[collection] = s[collection].filter(stored => stored.id !== item.id))
    }

    render() {
        return <div>
            <Selector>
                <ProductDisplay 
                    name="Products"
                    products={this.state.products}
                    saveCallback={p => this.saveData("products", p)}
                    deleteCallback={p => this.deleteData("products", p)}
                />

                <SupplierDisplay 
                    name="Suppliers"
                    suppliers={this.state.suppliers}
                    saveCallback={s => this.saveData("suppliers", s)}
                    deleteCallback={s => this.deleteData("suppliers", s)}
                />
            </Selector>
        </div>
    }
}