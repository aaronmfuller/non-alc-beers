import React, { Component } from 'react'
import { getBeers } from '../services/fakeBeerService'
import Like from './like';
import Pagination from './common/pagination'
import { paginate } from '../utils/paginate';
import BeerTable from './beerTable';
import ListGroup from './common/listGroup';
import { getBeerTypes } from '../services/fakeBeerTypeService';


export class Beers extends Component {

    state = {
        beers: [],
        pageSize: 3,
        currentPage: 1,
        beerTypes: []
    }

    componentDidMount() {
        const beerTypes = [{ _id: '', name: "All Beer Types" }, ...getBeerTypes()]
        this.setState({ beers: getBeers(), beerTypes: getBeerTypes() })
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

    handleBeerTypeSelect = beerType => {
        this.setState({ selectedBeerType: beerType });
    }

    render() {

        const { length: count } = this.state.beers
        const { pageSize, currentPage, beers: allBeers, selectedBeerType, beerTypes } = this.state;

        // const beerCount = this.state.beers.length;

        if (count === 0) { return <p>There are {count} beers in the database</p> }

        const filtered = 
        const beers = paginate(allBeers, currentPage, pageSize);

        return (
            <div className='row'>
                <div className="col-2">
                    <ListGroup
                        items={beerTypes}
                        onItemSelect={this.handleBeerTypeSelect}
                        selectedItem={selectedBeerType}
                    />

                </div>
                <div className="col">
                    <p>There are {count} beers in the database</p>
                    <BeerTable
                        beers={beers}
                    />

                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />

                </div>
            </div>
        )
    }
}

export default Beers
