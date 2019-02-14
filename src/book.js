import React, { Component} from 'react';

class Book extends Component {
state = {
    hide : 'hidden'
}
hideInfo = () => {
    if (this.state.hide === 'false'){
        this.setState({hide: 'hidden'})
    } else {
        this.setState({hide: 'false'})
    }
}
    render(){

        return (
    <div>

<h1 onClick={this.hideInfo}>{this.props.book.title}</h1>

        <div className={this.state.hide}>

        <a href={this.props.book.website}  > go to website</a>
        <h4>{this.props.book.author}</h4>
        <p>{this.props.book.description}</p>
        <h5>{this.props.book.pages} pages </h5>
        <p>subtitle : {this.props.book.subtitle}</p>
        <p>publisher : {this.props.book.publisher}</p>
        <p>published : {this.props.book.published}</p>
        <p>isbn : {this.props.book.isbn}</p>
        </div>

    </div>
        )
    }

}

export default Book;