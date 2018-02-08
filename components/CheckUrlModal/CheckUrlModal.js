import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '../Dialog'
import Button from '../Button'

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
          actions={[
            <Button key={0} onClick={closeModal} color="accent" ripple>
              Ok
            </Button>,
          ]}
          close={closeModal}
          open={showModal}
          styleBackdrop={{zIndex: '10', height: '100%', position: 'fixed'}}
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
