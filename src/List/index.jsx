import React, { Component } from 'react';
import './List.css';

export default class Search extends Component {
    static props = {
        items: [],
        onLineItemClick() {}
    };

    onClick(e) {
        debugger;
    }

    render() {
        debugger;
        let key = 0;
        const itemsTemplate = this.props.items.map(({ text }) => {
            key++;
            return (<li key={key} className="list-item">{text}</li>);
        });
        debugger;
        return <ul className="list" onClick={this.onClick.bind(this)}>{itemsTemplate}</ul>;
    }
}
