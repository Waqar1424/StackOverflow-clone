import React from 'react';
import ToolsImg1 from "../images/tools-img1.png";
import ToolsImg2 from "../images/tools-img2.png";
import ToolsIcon1 from "../images/tool_icon1.svg";

function OtherTools() {
  return (
    <div className='row tools-main-div'>
        <div className='col-sm-4 other-tool'>
            <img className='tools-image' src={ToolsImg1} width="100%" alt=''/>
        </div>
        <div className='col-12 col-sm-4 other-tool-details-div'>
            <h3>Integrates with and improves other tools</h3>
            <p>All plans come with integrations for ChatOps tools Slack & Microsoft Teams in order to cut down on pings, limit distractions and make the tools even more powerful. Business and Enterprise customers get access to Jira, GitHub & Okta integrations.</p>
            <div className='d-flex justify-content-center'>
                <div className='tools-icon-1'><img className='tow' src={ToolsIcon1} alt=''/></div>
                <div className='tools-icon-1'><img className='tow' src={ToolsIcon1} alt=''/></div>
                <div className='tools-icon-1'><img className='tow' src={ToolsIcon1} alt=''/></div>
                <div className='tools-icon-1'><img className='tow' src={ToolsIcon1} alt=''/></div>
                <div className='tools-icon-1'><img className='tow' src={ToolsIcon1} alt=''/></div>
            </div>
            <div><p className='premium-features-p'>Some of the premium features available with paid tiers</p></div>
        </div>
        <div className='col-sm-4'>
        <img className='tools-image' src={ToolsImg2} width="100%" alt=''/>
        </div>
    </div>
  )
}

export default OtherTools;