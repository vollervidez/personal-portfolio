import React from 'react'

const About = (props) => (
    <section id="about">
        <div className="inner">
            <div className="grid-wrapper">
                <div className="col-6">
                    <header className="major">
                        <h2>About Me</h2>
                    </header>
                    <div className="content">
                        <p>Hey! I’m just a regular dude that likes building good looking and functional websites that are easy to use. I also enjoy the occasional hike around one of the local Austin, Tx green belts or a cold pint at a local brewery.</p>
                        <p>For over 3 years I have been working as a web developer in professional fast paced environments helping companies both small and large get their brand and identity across the internet to their users. My professional career has been mainly focused around building websites using the WordPress CMS to allow clients to easily take over the site at any point after development was completed.</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="inner-content">

                        <div id="code">
                            <div className="terminalTop">
                                <div className="red circle"></div>
                                <div className="yellow circle"></div>
                                <div className="green circle"></div>
                            </div>
                            <div id="console">
                                &gt; <span className="text-yellow">Victor</span>.skillSet
                                <br />
                                <span className="answer">=&gt; </span><span className="text-blue">HTML / HTML5</span>
                                <br />
                                <span className="answer">=&gt; </span><span className="text-blue">CSS / CSS3</span>
                                <br />
                                <span className="answer">=&gt; </span><span className="text-blue">SCSS / SASS</span>
                                <br />
                                <span className="answer">=&gt; </span><span className="text-blue">JavaScript</span>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About