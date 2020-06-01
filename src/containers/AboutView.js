/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';

function AboutView() {
  return (
    <div id='about-section'>
      <h1>About me</h1>

      <div>
        Hi there! My name is Luke. I mainly write code, but I also try to write
        words. The thing I care about most is human development, so I think a
        lot about freedom of information, building ambitious things and the
        originality that's required to envision the future.
      </div>

      <div>
        Currently, I'm a Computer Science student at the University of Durham,
        where I'm mainly focused on Machine Learning. Aside from my studies, I
        tend to build side projects which can be found at{' '}
        <NavLink to='/projects'>/projects.</NavLink>
      </div>
      <div>
        When I'm not studying or programming, I'm usually trying to find
        interesting things to think about. <br />I usually find these through
        books, and I'll use this site to post about interesting ideas that I
        read about.
      </div>

      <div>
        With the internet making a lot of information accessible to many people,
        a principle belief of mine is that innovation favours originality.{' '}
        <br /> One of the best ways of cultivating originality is reading
        interesting things that other people aren't, and this is something that
        I try to do a lot. <br />
        I'll try to publish some of the weird thoughts and things I come across
        on this blog.
      </div>

      <div>
        I'll update this page sporadically, so at any time parts may be
        outdated.
      </div>

      <div>
        <h3>Opinions</h3>
        <ul className='about-list'>
          <i>
            &lt;I'll update this part very shortly, I need some time to think
            about this&gt;
          </i>
        </ul>
      </div>

      <div>
        <h3>Interests</h3>
        <ul className='about-list'>
          <li>Applications of Deep Learning</li>
          <li>Community/Institution Systems for fostering innovation </li>
          <li>The future of books (reading technology)</li>
          <li>The future of information in general</li>
          <li>Information validation</li>
          <li>Applications of Blockchain (or is it another trend)</li>
          <li>Space exploration</li>
          <li>The future</li>
          <li>Books</li>
        </ul>
      </div>

      <div>
        <h3>What this blog is</h3>
        <div>
          This blog is mainly a tool for me to think more about things that
          matter.
        </div>
        <div>
          For as long as I remember I've kept a notebook of thoughts that come
          to me at any given moment. However, I rarely go back to those thoughts
          and they sit there wasting away in a drawer that I'll not open for
          months at a time.
        </div>
        This blog allows me to explore a subset of my thoughts in a more
        profound way, potentially allowing me to refine my worldviews or develop
        new interesting ideas.
        {/* One benefit of this open form of exploration and learning is the fact that the blog posts could be read and therefore require more effort than the thoughts confined to my dust-lined notebooks.  */}
      </div>
    </div>
  );
}

export default AboutView;
