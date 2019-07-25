/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import {renderToString} from 'react-dom/server'

import i18next from 'i18next'
import Backend from 'i18next-sync-fs-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

import wrapWithProvider from './wrap-with-provider'

export const replaceRenderer = ({bodyComponent, replaceBodyHTMLString}) => {
  const i18n = i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)

  i18n.init({
    react: {wait: true},
    backend: {loadPath: '/src/locales/{{lng}}/{{ns}}.json'},
    fallbackLng: 'en',
    initImmediate: false
  })

  i18n.loadNamespaces(['translation'], () => {
    replaceBodyHTMLString(renderToString(bodyComponent))
  })
}

export const wrapRootElement = wrapWithProvider
