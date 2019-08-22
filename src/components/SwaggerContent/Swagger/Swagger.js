import React from 'react'

import Definition from './Definition'
import ResponseTable from './ResponseTable'
import ParameterTable from './ParameterTable'

import { Tag } from 'antd';
import classes from './Swagger.module.scss'

const colors = {
  'get': '#4caf50',
  'put': '#2db7f5',
  'post': '#ff9800',
  'delete': '#e51c23'
}

class Swagger extends React.Component {
  state = {}
  links = []

  ref = React.createRef()

  componentDidUpdate = () => {
    this.ref.current && this.ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  findRelatedObjects(definition) {
    for (var key in definition) {
      if (typeof definition[key] === "object") {
        this.findRelatedObjects(definition[key]);
      } else {
        if (definition[key].toString().includes('#/definitions')) {
          this.links.push(definition[key])
        }
      }
    }

    return this.links
  }

  handleClick = (definition) => {
    this.links = []
    this.setState({definition})
  }

  render () {
    const { definitions, documentation } = this.props;


    const definition = definitions[this.state.definition];

    const relatedObjects = this.findRelatedObjects(definition);

    return (
      <div>
        {
          documentation.map(api => Object.entries(api.value).map(v => (
            <div key={v[0] + api.key} className={classes.container}>
              <Tag className={classes.tag} color={colors[v[0]]}>{v[0]}</Tag>

              <span className={classes.url}>{this.props.prefix + api.key}</span>

              {v[1].summary && (<p>{v[1].summary}</p>)}

              <ParameterTable apiKey={api.key} value={v} onClick={this.handleClick} />

              <ResponseTable apiKey={api.key} value={v} onClick={this.handleClick} />
            </div>
          )))
        }
        {
          this.state.definition &&
          (
            <div ref={this.ref}>
              <Definition
                value={definition}
                relatedObjects={relatedObjects}
                title={this.state.definition}
                onClick={this.handleClick}
              />
            </div>
          )

        }
      </div>
    )
  }
}

export default Swagger
