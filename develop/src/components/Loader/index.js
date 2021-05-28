import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

class Loader extends Component {

    static propTypes = {
        active: PropTypes.bool
    }

    static defaultProps = {
        active: false
    }

    render() {
        const {active} = this.props

        return (
            <div className={`loader__overlay${active ? ' loader__overlay_active' : ''}`}>
                <div className={`loader${active ? ' loader_active' : ''}`}>
                    &#8987;
                </div>
            </div>
        )
    }

}

export default Loader