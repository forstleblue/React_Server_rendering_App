import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Home extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return(
            <h1>Hello World</h1>
        )        
    }
}
export default Home