import React, { Component } from 'react';
import Button from '../Button';
import List from '../List';
import './Search.css';

export default class Search extends Component {
    static props = {
        onChangeSearch() {},
        onSearchFor() {}
    };

    state = {
        listData: []
    };

    /**
     * Process changing input.
     * @param {object} e
     */
    onChange(e) {
        const { value } = e.target;
        let timeout;
        clearTimeout(timeout);
        const self = this;
        timeout = setTimeout(() => {
            self.props.onChangeSearch(value, this.setListData.bind(self));
        }, 300)
    }

    /**
     * Process clicking button.
     */
    onClickButton() {
        const { value } = this.refs.searchInput;
        this.props.onSearchFor(value);
    }

    /**
     * Process clicking line item
     * @param {string} text
     */
    onLineItemClick(text) {
        this.props.onSearchFor(text);
    }

    /**
     * Set list data
     * @param {array} listData
     */
    setListData(listData) {
        this.setState({ listData });
    }

    render() {
        const { listData } = this.state;
        const listTemplate = (listData.length)
            ? <List items={ listData } onLineItemClick={this.onLineItemClick.bind(this)}/>
            : '';

        return (
            <div className="content">
                <div className="search-component">
                    <div className="search-input">
                        <input ref="searchInput" type="search" onChange={this.onChange.bind(this)}/>
                        <Button text={'Go'} onClick={this.onClickButton.bind(this)}/>
                    </div>
                    {listTemplate}
                </div>
            </div>
        );
    }
}
