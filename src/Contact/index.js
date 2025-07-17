import { Fragment } from 'preact'

export default function Contact() {
  return (
    <Fragment>
      <h3>Contact</h3>
      <div>
        <span>You can reach me through:</span><br /><br />
        <ul>
          <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></li>
          <li>GitHub: <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></li>
          <li>Twitter: <a href="https://twitter.com/yourhandle" target="_blank">@yourhandle</a></li>
        </ul>
      </div>
    </Fragment>
  )
}