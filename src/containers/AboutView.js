/* eslint-disable prettier/prettier */
import React from 'react';

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
        tend to build side projects which can be found in /projects/.
      </div>
      <div>
        When I'm not studying or building things I'm usually trying to find
        interesting things to think about. I usually find such things in books.
        I'm going to try to publish the weird thoughts I have on this blog.
      </div>

      <div>I'll update this page sporadically, so parts may be outdated.</div>

      <div>
        <h3>Some of my opinions</h3>
        <ul className='about-list'>
          <li>Deep Learning</li>
          <li>Blockchain</li>
        </ul>
      </div>

      <div>
        <h3>Interests</h3>
        <ul className='about-list'>
          <li>Deep Learning applications </li>
          <li>Blockchain</li>
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
        profound way, potentially allowing me to refine my worldviews or come up
        with some new interesting idea.
        {/* One benefit of this open form of exploration and learning is the fact that the blog posts could be read and therefore require more effort than the thoughts confined to my dust-lined notebooks.  */}
      </div>
    </div>
  );
}

export default AboutView;
