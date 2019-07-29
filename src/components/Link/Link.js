import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import {withTranslation} from 'react-i18next'

const LinkWrapper = ({t, to, tReady, i18n, defaultNS, ...props}) => {
  if (!i18n.language || typeof to !== 'string') {
    return <a {...props} />
  }

  if (to.startsWith(`/${i18n.language}`)) {
    return <Link to={to} {...props} />
  }

  return <Link to={`/${i18n.language}${to}`} {...props} />
}

LinkWrapper.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
  to: PropTypes.string,
  tReady: PropTypes.bool
}

export default withTranslation()(LinkWrapper)
