import { Fragment } from 'preact';

export default function Help() {
  return (
    <Fragment>
      <h3>Available Commands</h3>
      <div class="command-list">
        <ul>
          <li><span class="command">about</span> - Shows information about me</li>
          <li><span class="command">experience</span> - My work experience</li>
          {/* <li><span class="command">projects</span> - My personal projects</li> */}
          <li><span class="command">skills</span> - My technical skills</li>
          <li><span class="command">education</span> - My education background</li>
          <li><span class="command">contact</span> - How to contact me</li>
          <li><span class="command">clear</span> - Clears the terminal</li>
        </ul>
      </div>
    </Fragment>
  );
}