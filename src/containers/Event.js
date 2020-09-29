import React from 'react';
// import { connect } from 'react-redux';

const Event = ({events}) => {
    
    return (
        events.map(event => {
            return (
                <>
                <div>{event.title}</div>
                <div>{event.description}</div>
                <div>{event.startDate}</div>
                <div>{event.endDate}</div>
                </>
            )
        })
    );
};

export default Event;

// const mapStateToProps = (state) => {
//     return state;
// }

// connect(mapStateToProps, null)(Event);