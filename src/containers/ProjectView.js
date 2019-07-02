import React from 'react';

import { Grid, Image, Embed, Segment } from 'semantic-ui-react';

import Newsletter from '../components/Newsletter';
import SocialBar from '../components/SocialBar';

import journeyPlannerLogo from '../images/journey-planner-logo.png';
import journeyPlannerView1 from '../images/journey-planner-view.png';
import journeyPlannerView2 from '../images/journey-planner-view-2.png';
import journeyPlannerView3 from '../images/journey-planner-view-1.png';

import cryptoXLogo from '../images/cryptox-logo.png';
import cryptoXView1 from '../images/cryptox-view.png';
import cryptoXView2 from '../images/cryptox-view-1.png';

import shubotThumbnail from '../images/yt-thumbnail.jpg';

function ProjectView() {
  window.scrollTo(0, 0);
  return (
    <div id="projectContent" className="ui container left aligned">
      <h1>Projects</h1>
      <p id="aboutText">
        The majority of my projects can be found on my{' '}
        <a className="underlineHeaderText" href="https://github.com/lukezsmith">
          GitHub
        </a>
        .
        <br />
        <br />
        Some of my favourite projects that I have worked on recently include the following:
        <br />
        <br />
      </p>
      <Segment raised className="projectSegments">
        <p id="aboutText" />
        <Image id="" src={journeyPlannerLogo} className="ui small centered image" rounded alt="" />
        <br />
        <a href="https://github.com/lukezsmith/JourneyPlanner">
          <h1 className="underlineHeaderText">JourneyPlanner</h1>
        </a>
        <br />
        <br />
        An Android London-based journey app that offers journey planning functionality as well as
        live bus-arrival data gathering using the TFL API.
        <br />
        <br />
        <Grid className="projectPadding" columns={3}>
          <Grid.Column>
            <Image
              className="ui medium centered image projectPadding projectPaddingBottom"
              src={journeyPlannerView1}
              rounded
              alt=""
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="ui medium centered image projectPadding projectPaddingBottom"
              src={journeyPlannerView2}
              rounded
              alt=""
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              className="ui medium centered image projectPadding projectPaddingBottom"
              src={journeyPlannerView3}
              rounded
              alt=""
            />
          </Grid.Column>
        </Grid>
        <br />
      </Segment>
      <Segment raised className="projectSegments">
        <p id="aboutText">
          <Image id="" src={cryptoXLogo} className="ui small centered image" rounded alt="" />
          <br />
          <a href="https://github.com/lukezsmith/CryptoX">
            <h1 className="underlineHeaderText">CryptoX</h1>
          </a>
          <br />
          <br />
          A site dedicated to displaying the top Cryptocurrencies ranked by marketcap. The site
          shows statistics for each coin as well as a price graph. The search feature allows you to
          search for any coin with a marketcap inside the top fifty coins.
          <Image
            className="ui large centered image projectPadding"
            src={cryptoXView2}
            rounded
            alt=""
          />
          <br />
          <Image className="ui large centered image" src={cryptoXView1} rounded alt="" />
          <br />
        </p>
      </Segment>

      <Segment raised className="projectSegments">
        <p id="aboutText">
          <a href="https://github.com/lukezsmith/shubot">
            <h1 className="underlineHeaderText">ShuBot</h1>
          </a>
          <br />
          <br />
          An automated tool to purchase limited items faster by automation. The tool supports the
          following sites: SneakersNStuff.com, Offspring.com, SlamJamSocialism.com and Titolo.ch.
          <Embed
            className="projectPadding"
            id="QFLiK1zl7VY"
            placeholder={shubotThumbnail}
            source="youtube"
          />
          <br />
        </p>
      </Segment>
      <Newsletter />
      <SocialBar />
    </div>
  );
}

export default ProjectView;
