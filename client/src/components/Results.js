import React, { Component } from 'react';

export default class Results extends Component {
    getPair() {
        return this.props.pair || [];
    }

    getVotes(entry) {
        const { tally } = this.props;

        if (tally && tally.has(entry)) {
            return tally.get(entry);
        }

        return 0;
    }

    render() {
        return <div className="results">
            {this.getPair().map(entry =>
                <div key={entry} className="entry">
                    <h1>{entry}</h1>
                    <div className="voteCount">
                        {this.getVotes(entry)}
                    </div>
                </div>
            )}
        </div>;
    }
}