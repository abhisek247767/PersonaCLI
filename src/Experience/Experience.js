import { Fragment } from 'preact'

export default function Experience() {
  return (
    <Fragment>
      <h3>Professional Experience</h3>
      <div class="experience-container">
        <div class="experience-item">
          <h4>Software Engineer</h4>
          <div class="company">Radiant Sage Ventures</div>
          <div class="duration">May 2025 - Present</div>
          <ul class="responsibilities">
            <li>Developing scalable web applications using modern JavaScript frameworks</li>
            <li>Leading frontend architecture decisions and implementation</li>
            <li>Mentoring junior developers and conducting code reviews</li>
          </ul>
        </div>

        <div class="experience-item">
          <h4>Consultant Software Engineer</h4>
          <div class="company">SproutsAI</div>
          <div class="duration">July 2024 - April 2025</div>
          <ul class="responsibilities">
            <li>Implemented AI-powered features for enterprise SaaS platform</li>
            <li>Optimized application performance reducing load times by 40%</li>
            <li>Collaborated with cross-functional teams to deliver new product features</li>
          </ul>
        </div>

        <div class="experience-item">
          <h4>MTS-L4</h4>
          <div class="company">Interra Information Technology (Kolkata)</div>
          <div class="duration">July 2023 - July 2024</div>
          <ul class="responsibilities">
            <li>Developed and maintained enterprise-level applications</li>
            <li>Integrated third-party APIs and services</li>
            <li>Participated in agile development processes</li>
          </ul>
        </div>

        <div class="experience-item">
          <h4>Software Developer Trainee</h4>
          <div class="company">Interra Information Technology (Kolkata)</div>
          <div class="duration">Jan 2023 - July 2023</div>
          <ul class="responsibilities">
            <li>Completed intensive training in full-stack development</li>
            <li>Assisted in building internal tools and utilities</li>
            <li>Learned industry best practices and coding standards</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}