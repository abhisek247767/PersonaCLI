import { Fragment } from 'preact'

export default function Contact() {
  return (
    <Fragment>
      <h3>Contact</h3>
      <div>
        <span>You can reach me through:</span><br /><br />
        <ul>
          <li>Email: <a href="mailto:abhisekroy169@gmail.com">abhisekroy169@gmail.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">click here</a></li>
          <li>GitHub: <a href="https://github.com/abhisek247767" target="_blank">click here</a></li>
          <li>Twitter: <a href="https://x.com/abhisekroy169" target="_blank">click here</a></li>
        </ul>
      </div>
    </Fragment>
  )
}