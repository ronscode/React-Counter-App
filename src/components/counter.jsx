import React, { Component } from "react";

class Counter extends Component {
  // Old state with images and tags
  //   state = {
  //     value: this.props.counter.value,
  //     imageUrl: "https://picsum.photos/220",
  //     tags: []
  //   };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // Old method before making this a controlled component
  //   handleIncrement = product => {
  //     // console.log("Increment Clicked");
  //     console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };
  //temp function
  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    console.log(this.props);

    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
        <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
