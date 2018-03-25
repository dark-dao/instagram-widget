import React, { Component } from 'react';

const NotFound = {};

class Page extends Component {
  render() {
    return (
      <div className="_not-found-page">
        <span>Страница не найдена</span>
      </div>
    );
  }
};

NotFound.Page = Page;
export default NotFound;
