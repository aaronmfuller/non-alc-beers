import React, { Component } from 'react'
import { getBeers } from '../services/fakeBeerService'
import Pagination from './common/pagination'
import { paginate } from '../utils/paginate';
import BeerTable from './beerTable';
import ListGroup from './common/listGroup';
import { getBeerTypes } from '../services/fakeBeerTypeService';
import _ from 'lodash';


export class Beers extends Component {

    state = {
        beers: [],
        pageSize: 3,
        currentPage: 1,
        beerTypes: [],
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        const beerTypes = [{ _id: '', name: "All Beer Types" }, ...getBeerTypes()];
        this.setState({ beers: getBeers(), beerTypes });
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
        this.setState({ beers });

    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleBeerTypeSelect = beerType => {
        this.setState({ selectedBeerType: beerType, currentPage: 1 });
    }

    handleSort = path => {
        // const sorted = _.orderBy() this.setState({ path, order: 'asc' });
        console.log("handle sort called");
    }

    render() {

        const { length: count } = this.state.beers
        const { pageSize, currentPage, beers: allBeers, selectedBeerType, beerTypes, sortColumn } = this.state;

        const filtered = selectedBeerType && selectedBeerType._id ? allBeers.filter(b => b.beerType._id === selectedBeerType._id) :
            allBeers;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        console.log(sorted);
        const beers = paginate(sorted, currentPage, pageSize);

        if (count === 0) { return <p>There are no beers in the database</p> }

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
                    <p>There are {filtered.length} beers in the database</p>
                    <BeerTable
                        beers={beers}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />

                    <Pagination
                        itemsCount={filtered.length}
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
