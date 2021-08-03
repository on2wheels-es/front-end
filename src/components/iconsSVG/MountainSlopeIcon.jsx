import React from 'react'

function MountainSlopeIcon(props) {
    return (
        <span className="flex items-center text-sm" aria-label="Desnivel del paso de montaña" role="img">
        <span className="flex items-center">
          <svg width="17" height="17" style={{'fill': '#6B7280'}} viewBox="0 0 500 500" role="presentation" aria-hidden="true" focusable="false">
            <path d="m441.624 425.969c.938-4.67-1.548-9.354-5.942-11.193l-286.641-120c-4.732-1.984-10.208-.056-12.654 4.461l-65 120c-1.679 3.099-1.602 6.852.201 9.88 1.804 3.028 5.067 4.883 8.592 4.883h351.64c4.764 0 8.867-3.36 9.804-8.031zm-344.655-11.969 52.694-97.282 232.375 97.282z"/><circle cx="256" cy="484" r="10"/><path d="m304.385 46.84c-9.628-17.789-28.168-28.84-48.385-28.84s-38.757 11.051-48.355 28.787l-201.025 366.045c-4.331 7.983-6.62 17.032-6.62 26.168 0 30.327 24.673 55 55 55h156c5.522 0 10-4.477 10-10s-4.478-10-10-10h-156c-19.299 0-35-15.701-35-35 0-5.815 1.452-11.566 4.176-16.586l201.029-366.054c6.129-11.325 17.929-18.36 30.795-18.36s24.666 7.035 30.824 18.414l200.976 365.955c2.748 5.065 4.2 10.816 4.2 16.631 0 19.299-15.701 35-35 35h-156c-5.522 0-10 4.477-10 10s4.478 10 10 10h156c30.327 0 55-24.673 55-55 0-9.136-2.289-18.185-6.645-26.213z"/>
          </svg>
          <p className="secondary_body_regular"><span className="caption_regular ml-1">Pendiente:</span> {props.text}%</p>
        </span>
      </span>
    )
}

export default MountainSlopeIcon