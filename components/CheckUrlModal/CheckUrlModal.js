import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '../Dialog'

class CheckUrlModal extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {showModal, closeModal, error} = this.props
    return (
      <React.Fragment>
        <Dialog
          actions={[]}
          close={closeModal}
          open={showModal}
          style={{
            zIndex: '11',
          }}
          styleBackdrop={{zIndex: '10'}}
        >
          {error}
        </Dialog>
      </React.Fragment>
    )
  }
}

CheckUrlModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
}

CheckUrlModal.defaultProps = {}

export default CheckUrlModal
