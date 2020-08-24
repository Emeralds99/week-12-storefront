import React from 'react'

class Variations extends React.Component {
    constructor () {
        super ()
        this.state = {
            response: []
        }
    }

    componentDidMount () {
        this.callApi()
        .then((response) => {
            this.setState({ response: response.length + 'items found' })
        })
        .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/Variations')
        const body = await response.json();
        if (response.status !== 200) throw Error (body.message);

        return body
    }

    render () {
        return (
            <div>
                <div>Setup for Variations integration</div>
                <div>{this.state.response}</div>
            </div>
        )
    }
}

export default Variations