import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'

const strings = [
  "Hello",
  "Salut",
  "Hola",
  "안녕",
  "Hej",
  "Merhaba",
  "Bonjour",
  "Hallo",
  "Salam",
  "Sucuk",
  "Ciao",
  "Sveiki",
  "Γειά σου",
  "Pozdrav",
  "你好呀",
  "こんにちは",
  "Olá",
  "ဟယ်လို",
  "Pershendetje atje",
  "Привет",
  "Բարև այնտեղ",
  "Здравей",
  "Привіт",
  "नमस्ते",
  "Hej där",
  "Salve ibi",
  "Привіт",
  "Hei der"
];

function randomLanguage() {
  return strings[Math.floor(Math.random() * strings.length)];
}


export default function Home() {
  const [hello, setHello] = React.useState(strings[0]);
  

  const [style, trigger] = useWiggle({ x: 5, y: 5, scale: 1 });

  const handleChangeHello = () => {
    
    const newHello = randomLanguage();
    
    setHello(newHello);
  };
  return (
    <>
      <div className="navigation">
      <animated.div onMouseEnter={trigger} style={style}>
      <h1 className="hello-react btn--click-me" onClick={handleChangeHello}>{hello} World!</h1>
      </animated.div>
      </div>
      <div class="allDivs padding">
      <div className="page">
      <h1 className="about-up-wel">
        Hey, I'm Eleven.
      </h1>
      <p className="about">
        Hi there my name is Eleven, I'm a Student & Full-stack developer. I'm a Currently doing projects under name of <a className="a" href="https://github.com/aventursas" target="_blank">Aventur SAS</a>. If you are curious about the music I listen to while working, you can check out my <a className="a" href="https://open.spotify.com/user/yo55g26ffwx83q0smizx52yuf" target="_blank">Spotify playlists</a>. I also share all my open source projects on <a className="a" href="https://github.com/elevenvac" target="_blank">Github</a>, including this website.
      </p>
      <p className="about">
        <i className="far fa-trophy about-icon-mr"></i> 5 Years Experience
        <br />
        <i className="far fa-envelope about-icon-mr"></i> 11@apptime.tech
        <br />
        <i className="far fa-globe-asia about-icon-mr"></i> Turkey
      </p>
      <p className="about">
        <Tooltip theme="ws" title="Eleven's Base" position="bottom"><span className="about-icon-s-size"><a className="about-icon-a" href="https://discord.com/invite/HWjPAAs9d3" target="_blank"><i className="far fa-user-headset about-icon-mr"></i></a></span></Tooltip>
        <Tooltip theme="ws" title="Eleven" position="bottom"><span className="about-icon-s-size"><a className="about-icon-a" href="https://discord.com/users/354343248698802187" target="_blank"><i className="fab fa-discord about-icon-mr"></i></a></span></Tooltip>
        <Tooltip theme="ws" title="elevenvac" position="bottom"><span className="about-icon-s-size"><a className="about-icon-a" href="https://github.com/elevenvac" target="_blank"><i className="fab fa-github about-icon-mr"></i></a></span></Tooltip>
        <Tooltip theme="ws" title="@elevenvac" position="bottom"><span className="about-icon-s-size"><a className="about-icon-a" href="https://twitter.com/elevenvac" target="_blank"><i className="fab fa-twitter about-icon-mr"></i></a></span></Tooltip>
        <Tooltip theme="ws" title="Eleven" position="bottom"><span className="about-icon-s-size"><a className="about-icon-a" href="https://www.youtube.com/c/Elevenvac" target="_blank"><i className="fab fa-youtube about-icon-mr"></i></a></span></Tooltip>
        <Tooltip theme="ws" title="Eleven" position="bottom"><span className="about-icon-s-size"><a className="about-icon-a" href="https://open.spotify.com/user/yo55g26ffwx83q0smizx52yuf" target="_blank"><i className="fab fa-spotify about-icon-mr"></i></a></span></Tooltip>
      </p>
      <p className="footer">
        <span className="footer-text">Made with React</span>
        <a className="btn--remix" target="_blank" href="https://github.com/elevenvac/website-react">
          <i className="fab fa-github footer-icon-mr"></i> Open Source
        </a>
      </p>
      </div>
      </div>
    </>
  );
}
