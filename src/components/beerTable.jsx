import React from 'react'
import Like from './like';


const BeerTable = (props) => {
    const { beers, onDelete, onLike, onSort } = props;

    return ( 

    <table className="table">
        <thead>
            <tr>
                <th onClick={() => onSort("brewery")}>Brewery</th>
                <th onClick={() => onSort("name")}>Name</th>
                <th onClick={() => onSort("beerType.name")}>Type</th>
                <th onClick={() => onSort("numberInStock")}>In Stock</th>
                <th onClick={() => onSort("price")}>Price</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {beers.map(beer =>
                <tr key={beer._id}>
                    <td>{beer.brewery}</td>
                    <td>{beer.name}</td>
                    <td>{beer.beerType.name}</td>
                    <td>{beer.numberInStock}</td>
                    <td>{beer.price}</td>
                    <td><Like
                        liked={beer.liked}
                        onClick={() => onLike(beer)}
                    /></td>
                    <td>
                        <button
                            onClick={() => onDelete(beer)}
                            className="btn btn-danger  btn-sm">Delete</button> </td>
                </tr>
            )}
        </tbody>
    </table>

     );
}

export default BeerTable;