import React, { Component } from 'react'
import Like from './like';


const BeerTable = (props) => {
    const { beers } = props;

    return ( 

    <table className="table">
        <thead>
            <tr>
                <th>Brewery</th>
                <th>Name</th>
                <th>Type</th>
                <th>In Stock</th>
                <th>Price</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {beers.map(beer =>
                <tr key={beer._id}>
                    <td>{beer.brewery}</td>
                    <td>{beer.name}</td>
                    <td>{beer.type}</td>
                    <td>{beer.numberInStock}</td>
                    <td>{beer.price}</td>
                    <td><Like
                        liked={beer.liked}
                        onClick={() => this.handleLike(beer)}
                    /></td>
                    <td>
                        <button
                            onClick={() => this.handleDelete(beer)}
                            className="btn btn-danger  btn-sm">Delete</button> </td>
                </tr>
            )}
        </tbody>
    </table>

     );
}

export default BeerTable;