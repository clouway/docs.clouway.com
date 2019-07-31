import React from 'react'
import PropTypes from 'prop-types'

import i18next from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {I18nextProvider, initReactI18next} from 'react-i18next'

const i18n = i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

i18n.init({
  react: {useSuspense: false},
  backend: {loadPath: '/locales/{{lng}}/{{ns}}.json'},
  detection: {order: ['path', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'subdomain']},
  whitelist: ['en', 'bg'],
  fallbackLng: 'en',
  interpolation: {escapeValue: false}
})

class I18N extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    navigate: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  }

  handleLanguageChanged = lng => {
    const {navigate, location} = this.props

    if (location.pathname.startsWith(`/${lng}`)) {
      return
    }

    const parts = location.pathname.split('/')

    parts[1] = lng

    navigate(parts.join('/'))
  }

  componentDidMount() {
    i18n.on('languageChanged', this.handleLanguageChanged)
  }

  componentWillUnmount() {
    i18n.off('languageChanged', this.handleLanguageChanged)
  }

  render () {
    const {children} = this.props

    return (
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    )
  }
}

export default I18N
