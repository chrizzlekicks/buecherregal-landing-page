import React from "react"
import styled from "styled-components"

const Wavy = () => {
  return (
    <WaveContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#b00055"
        fillOpacity="1"
        d="M0,64L60,80C120,96,240,128,360,149.3C480,171,600,181,720,154.7C840,128,960,64,1080,64C1200,64,1320,128,1380,160L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </WaveContainer>
  )
}

const WaveContainer = styled.svg`
  margin: 0;
  position: relative;
  display: block;
  width: 100%;
`

export default Wavy
