import React from "react"

import "./index.scss"

class SkeletonContainer extends React.Component {
  constructor() {
    super()

    // Set the initial state to false. This allows the :empty psuedo selector as defined in https://css-tricks.com/building-skeleton-screens-css-custom-properties/ to do it's magic
    this.state = {
      cardContent: false,
    }
  }

  render() {
    return (
      <div>
        <div className="card">{this.props.children}</div>
      </div>
    )
  }
}

export default SkeletonContainer
