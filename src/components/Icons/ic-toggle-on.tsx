import * as React from 'react'

export const IconToggleOn = () => (
  <svg
    width="75px"
    height="41px"
    viewBox="0 0 75 41"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>toggle_on</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <circle id="path-1" cx="55.5" cy="19.5" r="10.5"></circle>
      <filter
        x="-64.3%"
        y="-50.0%"
        width="228.6%"
        height="228.6%"
        filterUnits="objectBoundingBox"
        id="filter-2"
      >
        <feOffset
          dx="0"
          dy="3"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="4"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0.881029212   0 0 0 0 0   0 0 0 0 0  0 0 0 0.603747815 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Guide" transform="translate(-80.000000, -1126.000000)">
        <g id="toggle_on" transform="translate(80.000000, 1126.000000)">
          <rect
            id="Rectangle"
            fill="#E4E5E9"
            x="0"
            y="0"
            width="75"
            height="39"
            rx="19.5"
          ></rect>
          <g id="Oval">
            <use
              fill="black"
              fill-opacity="1"
              filter="url(#filter-2)"
              xlinkHref="#path-1"
            ></use>
            <use fill="#FF0000" fill-rule="evenodd" xlinkHref="#path-1"></use>
          </g>
        </g>
      </g>
    </g>
  </svg>
)
