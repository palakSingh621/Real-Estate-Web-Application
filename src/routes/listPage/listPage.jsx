import React from 'react'
import './listPage.scss';
import { listData } from '../../lib/dummyData';
import Filter from '../../components/filter/filter';

function ListPage() {

    const data=listData;
    return (
    <div className="listPage">
        <div className="listContainer">
            <div className="wrapper">
                <Filter/>
            </div>
        </div>
        <div className="mapContainer">Map</div>
    </div>
    );
}

export default ListPage;