/**
 * Project: My-Wallet
 * File: ${FILE_NAME}
 * Author: Matej Polák <polakmatko@gmail.com>
 * Date: 16.2.2015
 * Time: 19:48
 */

var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {value: this.props.value}
    },
    componentDidMount: function(){
        var input = this.refs.input.getDOMNode();
        input.focus();
        input.setSelectionRange(0, input.value.length);
    },
    onChange: function(event){
        var newValue = event.target.value;
        
        // -?(0|[1-9][0-9]*)?([.,][0-9]*)?
        // valid number formats
        // - . , 
        // 0. 0, 
        // -,125 -.125
        // 0.0000
        // ,2541 .2415
        if (newValue.match(/^\-?(0|[1-9]\d*)?([\.|,]\d*)?$/)) {
            newValue = newValue.replace(',', '.');
            this.setState({value: newValue});
        }
    },
    render: function(){
        return (<input ref="input" type="text" onChange={this.onChange} value={this.state.value}/>);
    }
});