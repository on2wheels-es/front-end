import React from 'react'

export default function MountainPassesIcon(props) {
    return (
      <span className="flex items-center text-sm" aria-label="Nº de puertos de montaña" role="img">
        <span className="flex items-center">
          <svg width="18" height="18" style={{'fill': '#6B7280'}} viewBox="0 0 500 500" role="presentation" aria-hidden="true" focusable="false" className="self-center">
            <path d="m210.864 0v161.838l-210.521 350.162h511.313l-165.552-290.753-35.195 59.561-70.045-118.898v-41.91h99.271l-22.5-45 22.5-45h-99.271v-30zm0 220.061v99.48l26.77 53.54-108.02 108.919h-76.23zm134.76 60.971 114.429 200.968h-30.617l-101.13-171.662zm48.994 200.968h-222.753l102.229-103.081-33.23-66.46v-91.446zm-103.025-422-7.5 15 7.5 15h-50.729v-30z"/>
          </svg>
          <p className="secondary_body_regular"><span className="caption_regular ml-1">{props.title || 'Nº de Puertos: '}</span> {props.text}</p>
        </span>
      </span>
    )
}
