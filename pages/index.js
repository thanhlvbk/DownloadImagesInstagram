import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Textfield from '../components/Textfield'
import CheckUrlModal from '../components/CheckUrlModal'

const cheerio = require('cheerio')
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
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ) // fragment locator
    if (!pattern.test(value)) {
      this.setState(prevState => ({
        ...prevState,
        showCheckUrlModal: true,
        error: 'String is not url',
      }))
    } else if (value.indexOf("instagram.com") < 0) {
      this.setState(prevState => ({
        ...prevState,
        showCheckUrlModal: true,
        error: 'Url is not instagram',
      }))
    } else {
      this.getImageFromUrl(value)
    }
  }

  getImageFromUrl = (value) => {
    axios.get(value)
    .then( (response) => {
      const $ = cheerio.load(response.data)
      this.setState({
        image: $('meta[property="og:image"]').attr('content')
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
      
      // response.data.pipe(FileSaver.saveAs(blob, imageName))
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
        <h1>Download Instagram</h1>
        <span>Instagram images download and preview</span>
        <Textfield
          onChangeValue={this.onChangeUrl}
          label={'Add link instagram ...'}
          value={url}
          // style={{width: '100%'}}
        />
        <CheckUrlModal
          showModal={showCheckUrlModal}
          closeModal={this.closeCheckUrlModal}
          error={error}
        />
        {image &&
          <React.Fragment>
            <img src={image} />
            <button onClick={this.downloadImage}>Download</button>
          </React.Fragment>
        }
        <style jsx global>{`
          .dii-main {
            text-align: center
          }
        `}</style>
      </div>
    )
  }
}

Index.propTypes = {}

Index.defaultProps = {}

export default Index