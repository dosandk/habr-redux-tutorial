import React, { Component } from 'react';

export default class Winner extends Component {

    render() {
        return (
            <div ref="winner">Winner is {this.props.winner}!</div>
        )
    }
}