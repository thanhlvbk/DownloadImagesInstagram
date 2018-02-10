import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Router from 'next/router'
import Textfield from '../components/Textfield'
import CheckUrlModal from '../components/CheckUrlModal'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      error: '',
      showCheckUrlModal: false,
      image: null,
      postId: null,
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
      this.getImageFromUrl(value.substring(28 ,39).trim())
    }
  }

  getImageFromUrl = (value) => {
    axios.get(`${window.location.href}get-image/${value}`)
    .then(response => {
      this.setState({
        url: '',
        image: response.data.img,
        postId: value,
      })
    })
  }

  closeCheckUrlModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showCheckUrlModal: false,
    }))
  }

  render() {
    const {url, error, showCheckUrlModal, image, postId} = this.state
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
            <a className="dii-button" href={`/download-image/${postId}`} download>
              Download
            </a>
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
            margin: 15px 0px
            border: none;
            border-radius: 2px;
            position: relative;
            height: 36px;
            min-width: 64px;
            padding: 0 16px;
            display: inline-block;
            font-family: "Roboto","Helvetica","Arial",sans-serif;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0;
            overflow: hidden;
            outline: none;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            line-height: 36px;
            vertical-align: middle;
            color: rgb(66,66,66);
            background-color: rgb(105,240,174)
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