import React, { Component } from 'react';
import axios from 'axios';
import { URL_SEARCH_SUGGESTIONS, URL_SEARCH_FOR } from './constants';
import Search from './Search';
import $ from 'jquery';

const MAX_COUNT_SUGGESTIONS = 5;

export default class Home extends Component {
    /**
     * Load list data.
     * @param {string} text
     * @returns Promise
     */
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

    /**
     * Process searching data.
     * @param {string} text
     * @param {callback} process
     */
    onChangeSearch(text, process) {
        if (!text.length) {
            process([]);
            return;
        }
        this.loadListData(text).done((data) => {
            //Limit doesn't work on server.
            process(data.slice(0, MAX_COUNT_SUGGESTIONS));
        })
    }

    /**
     * Process redirect to external page.
     * @param {string} search
     */
    onSearchFor(search) {
        //Open full search in new tab.
        if (search.length) {
            const path = `${URL_SEARCH_FOR}?searchfor=${search}`;
            window.open(path)
        }
    }

    render() {
        return (
            <Search
                onChangeSearch={ this.onChangeSearch.bind(this) }
                onSearchFor={ this.onSearchFor.bind(this) }
            />
        )
    }
}
