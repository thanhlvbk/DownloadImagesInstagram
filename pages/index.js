import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Router from 'next/router'
import Textfield from '../components/Textfield'
import CheckUrlModal from '../components/CheckUrlModal'
import Button from '../components/Button'

const FileSaver = require('file-saver')

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      error: '',
      showCheckUrlModal: false,
      image: null,
    }
  }
  onChangeUrl = (value) => {
    this.setState(prevState => ({
      ...prevState,
      url: value,
    }))
    this.checkUrl(value)
  }

  checkUrl = value => {
    const pattern = new RegExp('^(?:[a-z]+:)?//', 'i')

    if (!pattern.test(value) && value.length > 0) {
      this.setState(prevState => ({
        ...prevState,
        showCheckUrlModal: true,
        error: 'Invalid URL',
      }))
    } else if (value.indexOf("instagram.com") < 0) {
      this.setState(prevState => ({
        ...prevState,
        showCheckUrlModal: true,
        error: 'Entered URL is not an instagram.com URL.',
      }))
    } else {
      this.getImageFromUrl(value)
    }
  }

  getImageFromUrl = (value) => {
    axios.get(`${window.location.href}get-image/${value.split("/").toString()}`)
    .then(response => {
      this.setState({
        url: '',
        image: response.data.img
      })
    })
  }

  downloadImage = () => {
    const {image} = this.state
    axios({
      method:'get',
      url:image,
      responseType:'blob'
    }).then((response) => {
      const blob = new Blob([response.data], {type: `${response.headers['content-type']}`})
      const imageName = `${response.headers.expires}.${response.headers['content-type'].split('/')[1]}`
      
      FileSaver.saveAs(blob, imageName)
    })
  }

  closeCheckUrlModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showCheckUrlModal: false,
    }))
  }

  render() {
    const {url, error, showCheckUrlModal, image} = this.state
    return (
      <div className="dii-main">
        <h1 className="dii-app-name">Download Instagram</h1>
        <span className="dii-slogan">Instagram images preview and download </span>
        <Textfield
          onChangeValue={this.onChangeUrl}
          label={'Add link instagram ...'}
          value={url}
          className="dii-input"
        />
        <CheckUrlModal
          showModal={showCheckUrlModal}
          closeModal={this.closeCheckUrlModal}
          error={error}
        />
        {image &&
          <React.Fragment>
            <img src={image} className="dii-image"/>
            <Button raised ripple color="accent" onClick={this.downloadImage} className="dii-button">
              Download
            </Button>
          </ React.Fragment>
        }
        <style jsx global>{`
          .dii-main {
            text-align: center;
            padding: 0 20px;
          }
          .dii-app-name {
            font-size: 35px;
            font-weight: bold;
            margin-bottom: 0px
          }
          .dii-slogan {
            font-size: 14px;
            opacity: 0.75;
            margin: 0 0 0.75em;
          }
          .dii-input {
            width: 87% !important
          }
          .dii-image {
            display: block;
            width: 95%;
            margin: 0 auto;
          }
          .dii-button {
            margin: 15px 0px !important
            text-transform: none !important;
          }
          .mdl-dialog {
            z-index: 11;
            padding: 0px;
          }
          .mdl-dialog__content {
            padding: 20px
            font-size: 14px;
            color: #000 !important;
          }
          @media screen and (min-width: 480px) {
            .dii-main {
              padding: 0 40px;
            }
            .dii-app-name {
              font-size: 56px;
            }
            .dii-slogan {
              font-size: 21px;
            }
            .dii-input {
              width: 63% !important
            }
            .dii-image {
              width: 68%;
            }
          }
          @media screen and (min-width: 840px) {
            .dii-input {
              width: 46% !important
            }
            .dii-image {
              width: 50%;
            }
          }
        `}</style>
      </div>
    )
  }
}

Index.propTypes = {}

Index.defaultProps = {}

export default Index