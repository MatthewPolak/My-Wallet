/**
 * Project: My-Wallet
 * File: ${FILE_NAME}
 * Author: Matej Polák <polakmatko@gmail.com>
 * Date: 16.2.2015
 * Time: 19:48
 */

var React = require('react');

var Input = require('./input.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {value: this.props.value, isInput: false};
    },
    onClick: function() { 
        this.setState({isInput: true}); 
    },
    render: function() {
        var value = this.state.value;
        var cssClass = 'list-group-item';
        var content = this.state.isInput ? (<Input value={value}/>) : value;
        
        if (value > 0) {
            cssClass += ' list-group-item-success';
        } else if (value < 0) {
            cssClass += ' list-group-item-danger';
        }

        return (<li className={cssClass} onClick={this.onClick}>{content}</li>);
    }
});