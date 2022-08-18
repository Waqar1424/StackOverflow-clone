import { Button } from 'react-bootstrap';
import React from 'react'
import {ReactComponent as SpeakerIcon} from '../images/Svgs/Speaker.svg';
import {ReactComponent as LockIcon} from '../images/Svgs/Lock.svg';
import {ReactComponent as BoxIcon} from '../images/Svgs/Box.svg';
import {ReactComponent as KeyIcon} from '../images/Svgs/Key.svg';
import {ReactComponent as PlusIcon} from '../images/Svgs/Plus.svg';
import {ReactComponent as DocumentIcon} from '../images/Svgs/Document.svg';
import {ReactComponent as LinkIcon} from '../images/Svgs/Link.svg';
import {ReactComponent as CollectionIcon} from '../images/Svgs/Collection.svg';
import {ReactComponent as GraphIcon} from '../images/Svgs/Graph.svg';
import {ReactComponent as HealthIcon} from '../images/Svgs/Health.svg';
import {ReactComponent as ToolIcon} from '../images/Svgs/Tool.svg';
import {ReactComponent as PeopleIcon} from '../images/Svgs/People.svg';
import {ReactComponent as PeakIcon} from '../images/Svgs/Peak.svg';
import {ReactComponent as CodeIcon} from '../images/Svgs/Code.svg';
import {ReactComponent as MessageQuestionIcon} from '../images/Svgs/MessageQuestion.svg';
import {ReactComponent as IndustryIcon} from '../images/Svgs/Industry.svg';

function BillingCards() {
  return (
    <div className='row justify-content-center billing-cards-main-div'>
            <div className='col-11 col-sm-3 col-lg-3 billing-cards justify-content-start text-start'>
                <Button className='btn-u-1' >Free</Button>
                <h3>Free</h3>
                <p>No credit card required</p>
                <hr className='billing-hr'/>
                <ul className='list-unstyled'>
                  <li><SpeakerIcon /> ChatOps integrations - Slack & Microsoft Teams</li>
                  <li><LockIcon /> Your own private space hosted on stackoverflow.com</li>
                  <li><BoxIcon /> Structured and searchable knowledge base</li>
                </ul>
                <Button className='btn-d-1'>Create a free Team</Button>
                <p className='btn-d-1-p'>Always free up to 50 teammates</p>
            </div>
            <div className='col-11 col-sm-3 col-lg-3 billing-cards justify-content-start text-start'>
                <Button className='btn-u-2'>Basic</Button>
                <h3>$6 USD</h3>
                <p>per teammate / month</p>
                <hr className='billing-hr'/>
                <ul className='list-unstyled'>
                  <li><KeyIcon /> Single sign-on (SSO) with SAML + Okta integration</li>
                  <li><SpeakerIcon /> ChatOps integrations - Slack & Microsoft Teams</li>
                  <li><LockIcon />  Your own private space hosted on stackoverflow.come</li>
                  <li><BoxIcon /> Structured and searchable knowledge base</li>
                </ul>
                <Button className='btn-d-2'>Get Started</Button>
                <p className='btn-d-2-p'>Always free up to 50 teammates</p>
            </div>
            <div className='col-11 col-sm-3 col-lg-3 billing-cards  text-start'>
            <div className='billing-card-recommended'>
                  <p>Recommended</p>
                  <span><IndustryIcon /></span>
            </div>
              <div className='justify-content-start'>
                  <Button className='btn-u-3'>Business</Button>
                  <h3>$12 USD</h3>
                  <p>per teammate / month</p>
                  <hr className='billing-hr'/>
                  <ul className='list-unstyled'>
                    <li><PlusIcon /> All the features of Basic plus…</li>
                    <li><DocumentIcon/> Long-form knowledge with Articles</li>
                    <li><LinkIcon /> Additional integrations — ChatOps, Jira, GitHub & Okta</li>
                    <li><CollectionIcon/> content together into Collections</li>
                    <li><GraphIcon /> Usage and adoption metrics</li>
                    <li><HealthIcon /> Priority customer support</li>
                    <li><ToolIcon />Content Health tools</li>
                  </ul>
                  <Button className='btn-d-3'>Get Started</Button>
                  <p className='btn-d-3-p'>Always free up to 50 teammates</p>
                </div>
            </div>
            <div className='col-11 col-sm-3 col-lg-3 billing-cards justify-content-start text-start'>
                <Button className='btn-u-4'>Enterprise</Button>
                <h3>Custom Pricing</h3>
                <p>Let's talk about what you need</p>
                <hr className='billing-hr'/>
                <ul className='list-unstyled'>
                  <li><PlusIcon/> Premium features of Business plus…</li>
                  <li><PeopleIcon /> Unlimited Teams within your instance</li>
                  <li><PeakIcon /> Flexible hosting options — cloud or on-premises</li>
                  <li><CodeIcon /> Robust read and write API</li>
                  <li><MessageQuestionIcon/> Your own customer success and community building representative</li>
                  <li><HealthIcon /> Priority customer support</li>
                </ul>
                <Button className='btn-d-4'>Get Started</Button>
                <p className='btn-d-4-p'>Always free up to 50 teammates</p>
            </div>
    </div>
  )
}

export default BillingCards;