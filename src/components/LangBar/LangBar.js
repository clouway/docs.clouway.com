import React from 'react'

import {withTranslation} from 'react-i18next'

import LangBarItem from './LangBarItem'

class LangBar extends React.Component {
  languages = [
    {code: 'en', label: 'English'},
    {code: 'bg', label: 'Български'}
  ]

  handleClick = (code) => {
    this.props.i18n.changeLanguage(code);
  }

  render() {
    return (
      <div>
        {
          this.languages.map(l => (
            <LangBarItem
              key={l.code}
              code={l.code}
              label={l.label}
              active={l.code === this.props.i18n.language}
              onClick={this.handleClick}
            />
          ))
        }
      </div>
    )
  }
}

export default withTranslation()(LangBar)
