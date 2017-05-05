import React, { Component } from 'react';
import Button from '../Button';
import List from '../List';
import './Search.css';

export default class Search extends Component {
    static props = {
        onChangeSearch() {},
        onClickButton() {}
    };

    state = {
        listData: []
    };

    onChange(e) {
        const { value } = e.target;
        const self = this;
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            self.props.onChangeSearch(value, this.setListData.bind(self));
        }, 300)
    }

    onClickButton() {
        const { value } = this.refs.searchInput;
        this.props.onClickButton(value);
    }

    setListData(listData) {
        this.setState({ listData });
    }

    render() {
        const { listData } = this.state;
        const listTemplate = (listData.length) ? <List items={ listData }/> : '';
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
