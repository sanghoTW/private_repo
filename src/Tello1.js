import React from 'react';
import Board from 'react-trello';
import data from './jsonData.json';
import './App.css';

function CustomHeader(data) {
    console.log('CustomHeader : ', data);
    return (
        <div style={{ height: 100 }}>
            CustomHeader
        </div>
    );
}

function CustomFooter(data) {
    console.log('CustomFooter : ', data);
    return (
        <div style={{ height: 100 }}>
            CustomFooter
        </div>
    );
}

function CustomCard({onCardClick, data}) {
    return (
        <div style={{ height: 100, background: 'red' }}>
            customCard
       </div>
    );
}

function Trello1() {

    const onCardClick = (cardId, metadata, laneId) => {
        console.log("cardId, metadata, laneId :: ", cardId, metadata, laneId);
    };

    const onLaneClick = laneId => {
        console.log("laneId : ", laneId);
    };

    return (
        <div>
            <Board
                data={data}
                draggable={true}
                onCardClick={onCardClick}
                onLaneClick={onLaneClick}
                editable={true}
                canAddLanes={true}
                editLaneTitle={true}
                cardDragClass="draggingCard"
                laneDragClass="draggingLane"
                components={{
                    Card: CustomCard,
                    // NewCardForm: CustomCard,
                    LaneHeader: CustomHeader,
                }}
            />
        </div>
    );
}

export default Trello1;
