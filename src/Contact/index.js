import { Fragment } from 'preact'
import './Contact.css' // Create this CSS file for styling

export default function Contact() {
  return (
    <Fragment>
      <h3>Contact</h3>
      <div class="contact-container">
        <p>You can reach me through:</p>
        <ul class="contact-list">
          <li>
            <span class="contact-label">Email:</span>
            <a href="mailto:abhisekroy169@gmail.com" class="contact-link">
              abhisekroy169@gmail.com
            </a>
          </li>
        
        </ul>
      </div>
    </Fragment>
  )
}