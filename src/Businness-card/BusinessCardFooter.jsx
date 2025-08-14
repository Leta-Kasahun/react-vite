import React, { Component } from 'react'

export default class BusinessCardFooter extends Component {
  render() {
    return (
    <div className="flex">
      <div className="h-2 bg-green-500 flex-1"></div>
      <div className="h-2 bg-yellow-500 flex-1"></div>
      <div className="h-2 bg-red-500 flex-1"></div>
    </div>
  );
  }
}
