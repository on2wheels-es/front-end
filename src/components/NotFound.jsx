import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
    render() {
        return (
            <>
            <main>
                <div>
                        Not found, sorry
                    <Link to="/" >Go to homepage </Link>
                 </div>
            </main>
           </>
        )
    }
}

export default NotFound
