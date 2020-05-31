import React from 'react';

function ProjectView() {
  return (
    <div id='project-section'>
      <h1>Projects</h1>
      <div>
        The majority of my projects can be found on my{' '}
        <a
          style={{ fontWeight: 'bold', color: '#385e94' }}
          href='https://github.com/lukezsmith'
        >
          GitHub
        </a>
        .
      </div>
      <div>
        I'm currently working on some exciting projects which I'll post here
        soon.
      </div>
    </div>
  );
}

export default ProjectView;
