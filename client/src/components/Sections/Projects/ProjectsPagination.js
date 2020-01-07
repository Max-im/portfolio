import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

export class index extends Component {
  componentDidUpdate(prev) {
    if (!prev.portfolio.projectsNum && this.props.portfolio.projectsNum) {
      this.backToRootIfOverflow();
    }
  }

  backToRootIfOverflow() {
    const itemsOnPage = 3;
    const { projectsNum } = this.props.portfolio;
    const curPage = this.props.match.params.page - 0 || 1;
    const pagesNum = Math.ceil(projectsNum / itemsOnPage);
    if (curPage > pagesNum) this.props.history.push("/portfolio");
  }

  static propTypes = {
    portfolio: PropTypes.object.isRequired
  };

  render() {
    const { projectsNum } = this.props.portfolio;
    let pagesNum, curPage, pages;
    const itemsOnPage = 12;

    if (projectsNum) {
      pagesNum = Math.ceil(projectsNum / itemsOnPage);
      curPage = this.props.match.params.page - 0 || 1;
      const allPages = [];

      for (let i = 1; i <= pagesNum; i++) {
        allPages.push(i);
      }
      let sizelLen = 5;
      const left = allPages.filter(v => v < curPage && v > curPage - sizelLen);

      const right = allPages.filter(v => v > curPage && v < curPage + sizelLen);
      pages = [...left, curPage, ...right];
      if (curPage !== 1 && !pages.includes(1)) {
        if (!pages.includes(2)) pages.unshift(null);
        pages.unshift(1);
      }
      if (curPage !== pagesNum && !pages.includes(pagesNum)) {
        if (!pages.includes(pagesNum - 1)) pages.push(null);
        pages.push(pagesNum);
      }
    }

    return (
      <>
        {projectsNum && pages.length > 1 && (
          <ul className="pagination">
            {pages.map(page => (
              <li key={page}>
                {page && (
                  <Link
                    className={
                      curPage === page
                        ? "pagination__item pagination__item_active"
                        : "pagination__item"
                    }
                    to={`/portfolio/${page}${this.props.history.location.search}`}
                  >
                    {page}
                  </Link>
                )}
                {!page && <p className="pagination__gap"> ...</p>}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps, {})(withRouter(index));
