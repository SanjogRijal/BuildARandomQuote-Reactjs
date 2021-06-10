import React, {componentWillMount, componentDidMount} from 'react';
import {getallQuotes} from '../actions/getQuote';
import {connect} from 'react-redux'
import './Wrapper.css';
class Wrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			quote: {
				quote: "You can’t use up creativity. The more you use, the more you have.",
                author: "Maya Angelou",
            }
		}
		this.componentWillMount = this.componentWillMount.bind(this);
		this.randomQuote = this.randomQuote.bind(this);
		// this.componentDidMount = this.componentDidMount.bind(this);
		this.props.getallQuotes();
	
	}

	componentWillMount(){
		
		}
		randomQuote(){
				let index = Math.floor(Math.random() * this.props.quote.quotes.length);  
			console.log("Index is", index);
			this.setState({ quote: this.props.quote.quotes[index]});
	
		}

	render(){
		console.log(this.props.quote);

		// this.setState({quote: this.props.quote.quotes[Math.floor(Math.random())]})
		return (
			<div className = "wrapper" id="quote-box">
				<div id = "text"><p>{this.state.quote.quote}</p></div>
				<div id = "author"><p>{this.state.quote.author}</p></div>
				<div id = "quote">
					<a id = "tweet-quote" href = "twitter.com/intent/tweet" target = "_top"></a>
					</div>
				<div id = "button">
					<button type = "submit" onClick = {this.randomQuote}>New Quote</button>
				</div>
			</div>
		); 
	}
}

const mapStateToProps = (state) => {
	return {
		quote: state.getQuote
	}
}

export default connect(mapStateToProps,{getallQuotes})(Wrapper);