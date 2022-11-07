import React, { Component } from 'react'
import { getBeers } from '../services/fakeBeerService'
import Like from './like';
import Pagination from './common/pagination'
import { paginate } from '../utils/paginate';


export class Beers extends Component {

    state = {
        beers: getBeers(),
        pageSize: 4,
        currentPage: 1
    }

    handleDelete = beer => {
        const beers = this.state.beers.filter(b => b._id !== beer._id);
        this.setState({ beers });
    }

    handleLike = beer => {
        const beers = [...this.state.beers];
        const index = beers.indexOf(beer);
        beers[index] = { ...beers[index] };
        beers[index].liked = !beers[index].liked;
        this.setState({ beers })

    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    render() {
        
        const { count } = this.state.beers.length
        const { pageSize, currentPage, beers: allBeers } = this.state;
       
       // const beerCount = this.state.beers.length;

        if (count === 0) { return <p>There are {count} beers in the database</p> }

        const  beers = paginate(allBeers, currentPage, pageSize);
      
        return (
            <React.Fragment>
                <p>There are {count} beers in the database</p>
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
                        { beers.map(beer =>


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
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}

                />


                <div>

                </div>
            </React.Fragment>
        )
    }
}

export default Beers
