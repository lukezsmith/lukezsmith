import React from 'react';

import { Link } from 'react-router-dom';

import me from '../images/lukezsmith.jpg';
import Newsletter from '../components/Newsletter';

function AboutView(props) {
  console.log(`about props: ${JSON.stringify(props)}`);
  console.log(`about params: ${JSON.stringify(props.match.params)}`);
  console.log(`about url: ${JSON.stringify(props.location)}`);
  return (
    <div className="ui container left aligned ">
      <img id="aboutImg" src={me} className="ui medium centered image" alt="" />
      <h1>Hi there!</h1>
      <p id="aboutText">
        I&apos;m Luke, a Computer Science student currently studying at Durham University. I&apos;m
        based in London/Durham, UK and I love to design and create software.
        <br />
        <br />
        I am experienced with Python, Java, C# and Javascript. I also have a lot of web (including
        this site!), mobile and desktop development experience. I enjoy working on open source
        projects as well as my own ideas.
        <br />
        <br />
        My main interests lie in Computer Science with a preference for robotics and artificial
        intelligence and a heavy slant towards anything aerospace-related. My dream is to make
        serious contributions towards space exploration within the aerospace industry.
        <br />
        <br />
        The purpose of this site is to showcase the{' '}
        <Link className="underlineHeaderText" to="/projects">
          projects
        </Link>{' '}
        I have been working on and also for me to document the things I learn throughout my studies
        and career. I will also be offering my thoughts on topics/concepts that I come across every
        day. Hopefully you will find some of my thoughts and experiences interesting or useful.
        <br />
        <br />
      </p>
      <Newsletter />
    </div>
  );
}

export default AboutView;
