import React from 'react'

function RoutesIcon(props) {
    return (
      <span className="flex items-center text-sm" aria-label="Total de rutas desde el municipio" role="img">
        <span className="flex items-center">
          <svg width="25" height="25" style={{'fill': '#6B7280'}} viewBox="0 0 120 120" role="presentation" aria-hidden="true" focusable="false">
            <path d="m85.391 59.834a13.469 13.469 0 0 0 -2.6.257l-1.991-5.944-.364-1.085-2.236-6.662.4-.012c4.285-.137 5.573-3.062 5.656-4.59a1.75 1.75 0 1 0 -3.5-.189c0 .012-.091 1.211-2.274 1.281-1.4.045-2.683.035-2.695.034a1.751 1.751 0 0 0 -1.674 2.307l1.3 3.866-18.793.103-.763-2.488h2.879a1.75 1.75 0 0 0 0-3.5h-9.736a1.75 1.75 0 0 0 0 3.5h3.2l1.231 4.015-5.692 10.094a13.5 13.5 0 1 0 8.33 14.263h6.1a1.749 1.749 0 0 0 1.293-.571l14.969-16.43 1.051 3.133a13.467 13.467 0 1 0 5.911-1.382zm-30.548-4.489 4.979 16.239h-3.753a13.483 13.483 0 0 0 -5.286-9.034zm-2.31 16.239h-6.841l3.361-5.964a10 10 0 0 1 3.48 5.964zm-9.833 11.749a10 10 0 1 1 3.3-19.426l-4.828 8.568a1.75 1.75 0 0 0 1.528 2.609h9.836a10.008 10.008 0 0 1 -9.836 8.249zm20.26-13.465-5.269-17.168 18.893-.11.354 1.054.217.645zm22.431 13.465a10 10 0 0 1 -4.791-18.773l3.13 9.331a1.75 1.75 0 0 0 3.319-1.114l-3.127-9.322a9.866 9.866 0 0 1 1.468-.121 10 10 0 0 1 0 20z"/><path d="m64 17.25a46.75 46.75 0 1 0 46.75 46.75 46.8 46.8 0 0 0 -46.75-46.75zm0 90a43.25 43.25 0 1 1 43.25-43.25 43.3 43.3 0 0 1 -43.25 43.25z"/>
          </svg>
          <p className="secondary_body_regular"><span className="caption_regular ml-1">{props.title || 'Nº de rutas: '}</span>{props.text}</p>
        </span>
      </span>
    )
}

export default RoutesIcon
