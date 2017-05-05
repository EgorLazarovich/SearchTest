import React, { Component } from 'react';

export default class Button extends Component {

    static props = {
        text: '',
        className: '',
        onClick() {}
    };

    render() {
        const { text, className, onClick } = this.props;
        return (
            <button className={className} onClick={onClick}>{text}</button>
        );
    }
}
