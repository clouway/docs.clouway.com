import React from 'react'
import PropTypes from 'prop-types'

import {withTranslation} from 'react-i18next'
import { navigate} from "@reach/router"

const InternalLink = ({to, i18n, name}) => {
return <a onClick={() => navigate(`/${i18n.language}${to}/`)} >{name}</a>
}

InternalLink.propTypes = {
    to: PropTypes.string.isRequired,
    i18n: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
}

export default withTranslation()(InternalLink)