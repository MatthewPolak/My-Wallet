/**
 * Project: My-Wallet
 * File: ${FILE_NAME}
 * Author: Matej Polák <polakmatko@gmail.com>
 * Date: 16.2.2015
 * Time: 19:48
 */

var React = require('react');

var Value = require('./value.jsx');

module.exports = React.createClass({
    getInitialState: function(){
        return {values: [14.7, 15.7, -15, -257.23, 125, -250]};
    },
    render: function(){
        var values = this.state.values.map(function(value, key){
            return (<Value key={key} value={value}/>);
        });

        return (<ul className="list-group">{values}</ul>);
    }
});