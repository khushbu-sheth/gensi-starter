import React from 'react'
import styled from 'styled-components'

export const HPESpinner = styled((props) => (
  <svg
    width="176"
    height="48"
    viewBox="0 0 176 48"
    data-testid="hpe-spinner-svg"
    {...props}
  >
    <path
      d="M 0 5 L 170 5 L 170 43 L 5 43 L 5 0"
      fill="none"
      stroke="#01A982" // Should match the HPE brand color
      strokeWidth="10px"
    />
  </svg>
))`
  & path {
    stroke-dashoffset: 510;
    stroke-dasharray: 420 96;
    animation: dash 5s ease-in-out infinite;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`
