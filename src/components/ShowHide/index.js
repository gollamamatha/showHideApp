import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {IsClickedFirstName: false, IsClickedLastName: false}

  onclickFirstName = () => {
    this.setState(prevState => ({
      IsClickedFirstName: !prevState.IsClickedFirstName,
    }))
  }

  onclickLastName = () => {
    this.setState(prevState => ({
      IsClickedLastName: !prevState.IsClickedLastName,
    }))
  }

  render() {
    const {IsClickedFirstName, IsClickedLastName} = this.state
    return (
      <div className="bg_container">
        <h1 className="heading">Show/Hide</h1>
        <div className="main_container">
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onclickFirstName}
            >
              Show/Hide Firstname
            </button>

            <div>
              {IsClickedFirstName && <p className="content_container">Joe</p>}
            </div>
          </div>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onclickLastName}
            >
              Show/Hide Lastname
            </button>
            <div>
              {IsClickedLastName && <p className="content_container">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
