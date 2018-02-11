import React from 'react'
import PropTypes from 'prop-types'
import List, {ListItem} from '../Lists'

class GuideLines extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <List className="dii-guidelines">
          <h4 className="dii-guidelines__title">How to download instagram photos?</h4>
          <ListItem 
            primaryContent={
              <span>1. Go to instagram.com, find instagram image which you want to download.</span>
            }
            secondaryText={
              <img className="dii-image" src="/public/step01.jpg" alt="step-01" />
            }
          />
          <ListItem 
            primaryContent={
              <span>2. Get the url/link of the instagram photo.</span>
            }
            secondaryText={
              <img className="dii-image" src="/public/step02.jpg" alt="step-02" />
            }
          />
          <ListItem 
            primaryContent={
              <span>3. Paste the instagram image url/link in input box and wait a few seconds for the image to be downloaded.</span>
            }
            secondaryText={
              <img className="dii-image" src="/public/step03.jpg" alt="step-03" />
            }
          />
          <ListItem 
            primaryContent={
              <span>4. Download Image.</span>
            }
            secondaryText={
              <img className="dii-image" src="/public/step04.jpg" alt="step-04" />
            }
          />
        </List>

        <style jsx global>{`
          .dii-guidelines__title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 0px !important;
          }
          .mdl-list__item--three-line,
          .mdl-list__item-primary-content,
          .mdl-list__item-text-body {
            height: auto !important;
            font-size: 14px !important;
          }
          .mdl-list__item-text-body {
            margin-top: 15px;
          }

          @media screen and (min-width: 480px) {
            .dii-guidelines__title {
              font-size: 21px;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}

GuideLines.propTypes = {}

GuideLines.defaultProps = {}

export default GuideLines
