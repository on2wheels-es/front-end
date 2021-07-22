import React, { Component } from 'react'

export class MunicipalityCardContent extends Component {
  render() {
    const { municipality, province, routes_number: routesNumber } = this.props.data;
    return (
      <div className="inline-block">
      <div className="flex flex-col w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl">
        <div className="md:flex-shrink-0">
          <img className="w-full object-cover" src="https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" styles={{"height": "320px", "width": "420px"}} alt="default image" />
        </div>
        <div className="flex justify-between items-end py-2 px-6">
          <div>
            <p className="text-md font-bold">{municipality}</p>
            <span className="flex items-center text-sm" aria-label="Provincia del municipio" role="img">
              <span className="flex items-center mt-1">
                <svg width="18" height="18" viewBox="0 0 500 500" role="presentation" aria-hidden="true" focusable="false" className="self-end">
                  <path d="M184.08,0c-74.992,0-136,61.008-136,136c0,24.688,11.072,51.24,11.536,52.36c3.576,8.488,10.632,21.672,15.72,29.4
                  l93.248,141.288c3.816,5.792,9.464,9.112,15.496,9.112s11.68-3.32,15.496-9.104l93.256-141.296
                  c5.096-7.728,12.144-20.912,15.72-29.4c0.464-1.112,11.528-27.664,11.528-52.36C320.08,61.008,259.072,0,184.08,0z
                  M293.8,182.152c-3.192,7.608-9.76,19.872-14.328,26.8l-93.256,141.296c-1.84,2.792-2.424,2.792-4.264,0L88.696,208.952
                  c-4.568-6.928-11.136-19.2-14.328-26.808C74.232,181.816,64.08,157.376,64.08,136c0-66.168,53.832-120,120-120
                  c66.168,0,120,53.832,120,120C304.08,157.408,293.904,181.912,293.8,182.152z"></path>
                  <path d="M184.08,64.008c-39.704,0-72,32.304-72,72c0,39.696,32.296,72,72,72c39.704,0,72-32.304,72-72
                  C256.08,96.312,223.784,64.008,184.08,64.008z M184.08,192.008c-30.872,0-56-25.12-56-56s25.128-56,56-56s56,25.12,56,56
                  S214.952,192.008,184.08,192.008z"></path>
                </svg>
                <span className="subtitle" aria-hidden="true">{province}</span>
              </span>
            </span>
          </div>
          <div className="card-content-details">
            <span className="flex items-center text-sm" aria-label="Total de rutas desde el municipio" role="img">
              <span className="flex items-end mt-1">
                <svg width="50" height="25" viewBox="0 0 60 120" role="presentation" aria-hidden="true" focusable="false" className="self-end">
                  <path d="m85.391 59.834a13.469 13.469 0 0 0 -2.6.257l-1.991-5.944-.364-1.085-2.236-6.662.4-.012c4.285-.137 5.573-3.062 5.656-4.59a1.75 1.75 0 1 0 -3.5-.189c0 .012-.091 1.211-2.274 1.281-1.4.045-2.683.035-2.695.034a1.751 1.751 0 0 0 -1.674 2.307l1.3 3.866-18.793.103-.763-2.488h2.879a1.75 1.75 0 0 0 0-3.5h-9.736a1.75 1.75 0 0 0 0 3.5h3.2l1.231 4.015-5.692 10.094a13.5 13.5 0 1 0 8.33 14.263h6.1a1.749 1.749 0 0 0 1.293-.571l14.969-16.43 1.051 3.133a13.467 13.467 0 1 0 5.911-1.382zm-30.548-4.489 4.979 16.239h-3.753a13.483 13.483 0 0 0 -5.286-9.034zm-2.31 16.239h-6.841l3.361-5.964a10 10 0 0 1 3.48 5.964zm-9.833 11.749a10 10 0 1 1 3.3-19.426l-4.828 8.568a1.75 1.75 0 0 0 1.528 2.609h9.836a10.008 10.008 0 0 1 -9.836 8.249zm20.26-13.465-5.269-17.168 18.893-.11.354 1.054.217.645zm22.431 13.465a10 10 0 0 1 -4.791-18.773l3.13 9.331a1.75 1.75 0 0 0 3.319-1.114l-3.127-9.322a9.866 9.866 0 0 1 1.468-.121 10 10 0 0 1 0 20z"/><path d="m64 17.25a46.75 46.75 0 1 0 46.75 46.75 46.8 46.8 0 0 0 -46.75-46.75zm0 90a43.25 43.25 0 1 1 43.25-43.25 43.3 43.3 0 0 1 -43.25 43.25z"/>
                </svg>
                <span className="subtitle" aria-hidden="true">{routesNumber} rutas</span>
              </span>
            </span>
            <span className="flex items-center text-sm" aria-label="Desnivel del municipio" role="img">
              <span className="flex items-center mt-1 ml-5">
                <svg width="18" height="18" viewBox="0 0 500 500" role="presentation" aria-hidden="true" focusable="false" className="self-center">
                  <path d="m210.864 0v161.838l-210.521 350.162h511.313l-165.552-290.753-35.195 59.561-70.045-118.898v-41.91h99.271l-22.5-45 22.5-45h-99.271v-30zm0 220.061v99.48l26.77 53.54-108.02 108.919h-76.23zm134.76 60.971 114.429 200.968h-30.617l-101.13-171.662zm48.994 200.968h-222.753l102.229-103.081-33.23-66.46v-91.446zm-103.025-422-7.5 15 7.5 15h-50.729v-30z"/>
                </svg>
                <span className="subtitle ml-2" aria-hidden="true">Nº puertos</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MunicipalityCardContent