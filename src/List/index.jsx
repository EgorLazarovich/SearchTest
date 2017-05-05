import React, { Component } from 'react';
import './List.css';

export default class Search extends Component {
    static props = {
        items: [],
        onLineItemClick() {}
    };

    /**
     * Process clicking list items
     * @param {object} e
     */
    onClick(e) {
        const element = e.target;
        const text = element.textContent || element.innerText
        this.props.onLineItemClick(text)
    }

    render() {
        let key = 0;
        const itemsTemplate = this.props.items.map((data) => {
            key++;
            const { text } = data;
            return (<li key={key}  className="list-item">{text}</li>);
        });
        return <ul className="list" onClick={this.onClick.bind(this)}>{itemsTemplate}</ul>;
    }
}
