import React from 'react'

function SearchIcon(props) {
    return (
        <span className="flex justify-center">
            <svg width="18" height="18" style={{'fill': 'white'}} viewBox="0 0 500 500" role="presentation" aria-hidden="true" focusable="false" className="self-end">
            <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
            </svg>
            <p className="text-center">{props.text}</p>
      </span>
    )
}

export default SearchIcon
