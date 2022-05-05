import * as React from "react"
import Button from '@material-ui/core/Button';
import './landing.css'
import twitterLogo from "../images/twitterLogo.png"
import discordLogo from "../images/discordLogo.png"
import {BrowserRouter as Router, Link} from 'react-router-dom';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: "900px",
  width: "100%",
}

// markup
const IndexPage = () => {
  return (
    <div className="landing-background">
      <main style={pageStyles}>
        <div className="TwitterStyles">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img class="TwitterSize" src={twitterLogo} alt="twitterLogo"/>
          </a>
        </div>
        <div className="DiscordStyles">
          <a href="https://discord.com/" target="_blank" rel="noreferrer">
            <img class="DiscordSize" src={discordLogo} alt="discordLogo"/>
          </a>
        </div>
        <div class="h1">
          moonwolvescnft
        </div>
        <div className="BuyOneStyles">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            href="https://google.com">Buy One</Button>  
          
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            size="large"
            href="https://github.com">Parity</Button>  
          </div>
      </main>
    </div>
  )
}

export default IndexPage