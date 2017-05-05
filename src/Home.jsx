import React, { Component } from 'react';
import axios from 'axios';
import { URL_SEARCH_SUGGESTIONS } from './constants';
import Search from './Search';
import $ from 'jquery';

export default class Home extends Component {
    loadListData(text) {
        if (this.query && this.query.abort) {
            this.query.abort();
        }

        const promise = $.Deferred();
        window.getSuggestions = function ([, data]) {
            promise.resolve(data.map((text) => ({ text })));
        };

        this.query = $.get({
            url: URL_SEARCH_SUGGESTIONS,
            dataType: 'jsonp',
            data: {
                q: text,
                fn: 'getSuggestions'
            }
        });

        return promise;

    }

    onChangeSearch(text, process) {
        if (!text.length) {
            process([]);
            return;
        }
        this.loadListData(text).done((data) => {
            process(data);
        })
    }

    onClickSearchButton(text) {
        //route
    }

    render() {
        return (
            <Search
                onChangeSearch={ this.onChangeSearch.bind(this) }
                onClickButton={ this.onClickSearchButton.bind(this) }
            />
        )
    }
}
