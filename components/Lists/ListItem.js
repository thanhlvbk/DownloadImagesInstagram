import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

function ListItem(props) {
  let {secondaryText} = props
  const {className, primaryContent, type: Type, onClick} = props
  let classes = ClassNames('mdl-list__item', className)

  if (secondaryText) {
    secondaryText = React.cloneElement(<span>{secondaryText}</span>, {
      className: ClassNames('mdl-list__item-text-body'),
    })
    classes = ClassNames('mdl-list__item--three-line', classes)
  }

  return (
    <Type className={classes} onClick={onClick}>
      <span className="mdl-list__item-primary-content">
        {primaryContent}
        {secondaryText}
      </span>
    </Type>
  )
}

ListItem.propTypes = {
  className: PropTypes.node,
  primaryContent: PropTypes.node,
  secondaryText: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

// Specifies the default values for props:
ListItem.defaultProps = {
  className: null,
  type: 'li',
  primaryContent: null,
  secondaryText: null,
  onClick: () => {},
}

export default ListItem
