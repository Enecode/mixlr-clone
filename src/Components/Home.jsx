import React from 'react';
import f1 from '../Components/Assets/f1.png';
import '../Components/NavBar.css';
import f2 from '../Components/Assets/f2.png';
import f3 from '../Components/Assets/f3.png';
import f4 from '../Components/Assets/f4.png';
import f5 from '../Components/Assets/f5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockKeyhole, faUsersLine, faCalendar,faChartSimple, faMicrophoneLines, faTags } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <main className="main-content">
            <section className="intro">
                <h1>Get your audio to your audience</h1>
                <p>Professional tools for audio, made simple</p>
                <button className="main-button">Start free trial</button>
            </section>
            {/* one */}
            <section className="features">
                <div className="feature">
                    <div className="feature-content">
                        <h2>Our broadcast apps with your audio setup</h2>
                        <p>Plug and play your audio into the mobile or desktop broadcast app. Keep it simple with one audio source for mobile. Or use the desktop app for a mix of audio input and a playlist of sounds. Your audio, done your way.</p>
                    </div>
                    <div className="features1-image">
                        <img src={f1} className="image-f1" alt="" />
                    </div>
                </div>
                {/* Add more features as needed */}
            </section>

            {/* two */}
            <section className="features">
                <div className="feature">
                    <div className="features1-image">
                        <img src={f2} className="image-f1" alt="" />
                    </div>
                    
                    <div className="feature-content">
                        <h2>No limits to audience size</h2>
                        <p>Reach an audience as big as you need. Connect, chat and engage with listeners all over the world with the confidence that everyone will be able to connect to your live stream. Mixlr has dedicated servers set aside, allowing you to scale your broadcasts as big as you need without extra costs.</p>
                    </div>
                    
                </div>
                {/* Add more features as needed */}
            </section>

            {/* three */}
            <section className="features">
                <div className="feature">
                    <div className="feature-content">
                        <h2>Your own channel, a custom website for audio</h2>
                        <p>This is where all your audio is hosted. People can listen live while chatting or play back recordings. The custom players are ad-free, feature audio visuals and an immersive full-screen experience. Brand your channel with a logo, custom background and personalized URL. It's your site for your audio.</p>
                    </div>
                    <div className="features1-image">
                        <img src={f3} className="image-f1" alt="" />
                    </div>
                </div>
                {/* Add more features as needed */}
            </section>

            {/* four */}
            <section className="features">
                <div className="feature">
                    <div className="features1-image">
                        <img src={f4} className="image-f1" alt="" />
                    </div>
                    <div className="feature-content">
                        <h2>Showcase your recordings collection</h2>
                        <p>Record your broadcasts and publish them to your channel when you're ready. Listeners can visit your entire archive of past broadcasts and share direct links to their favorites.</p>
                    </div>
                    
                </div>
            </section>

            {/* five */}
            <section className="features">
                <div className="feature">
                    <div className="feature-content">
                        <h2>Custom embeddable player</h2>
                        <p>Make it easier for people to come across your audio. Embed an ad-free player to your other existing sites to promote your audio content. It's as simple as copying and pasting an HTML widget code.</p>
                    </div>
                    <div className="features1-image">
                        <img src={f5} className="image-f1" alt="" />
                    </div>
                </div>
            </section>

            {/* one */}
            <section className="benefits">
                <h3 className="more">And there's more...</h3>
                <div className="section-container">
                    <div className="section">
                        <div className="section-image">
                            <FontAwesomeIcon icon={faCalendar} color={"red"} size={"5x"}/>
                        </div>
                        <div className="section-content">
                            <h2 className="section-title">One link, two functions</h2>
                            <p className="section-description">Your scheduled event automatically turns into a live stream page with chat as soon as you go live. Use only one link to promote your event in advance and during your broadcast.</p>
                        </div>
                    </div>

                    <div className="section">
                        <div className="section-image">
                            <FontAwesomeIcon icon={faChartSimple} color={"red"} size={"5x"} />
                            {/* <FontAwesomeIcon icon={faUsersLine} color={"red"} size={"5x"} /> */}
                        </div>
                        <div className="section-content">
                            <h2 className="section-title">Top level listener stats</h2>
                            <p className="section-description">Keep informed on how well your broadcasts are performing with end-of-broadcast and weekly stats emails. Get numbers on your unique listeners, chat messages and hearts.</p>
                        </div>
                    </div>
                </div>

                {/* two */}
                <div className="section-container">
                    <div className="section">
                        <div className="section-image">
                            <FontAwesomeIcon icon={faUnlockKeyhole} color={"red"} size={"5x"} />
                        </div>
                        <div className="section-content">
                            <h2 className="section-title">Private access to your channel</h2>
                            <p className="section-description">Decide who can access your channel with access settings enabled. Remain private indefinitely or create one-off exclusive audio content for select listeners only.</p>
                        </div>
                    </div>
                    
                    <div className="section">
                        <div className="section-image">
                            <FontAwesomeIcon icon={faUsersLine} color={"red"} size={"5x"} />
                        </div>
                        <div className="section-content">
                            <h2 className="section-title">Detailed listener metrics</h2>
                            <p className="section-description">See how many unique listeners connected, how long for, and which countries or cities they tuned in from. View your listener stats over any selectable time period, and export the most relevant data as an easy to use spreadsheet file.</p>
                        </div>
                    </div>
                </div>
                {/* three */}
                <div className="section-container">
                    <div className="section">
                        <div className="section-image">
                            <FontAwesomeIcon icon={faMicrophoneLines} color={"red"} size={"5x"} />
                        </div>
                        <div className="section-content">
                            <h2 className="section-title">Private access to your channel</h2>
                            <p className="section-description">Decide who can access your channel with access settings enabled. Remain private indefinitely or create one-off exclusive audio content for select listeners only.</p>
                        </div>
                    </div>
                    
                    <div className="section">
                        <div className="section-image">
                            <FontAwesomeIcon icon={faTags} color={"red"} size={"5x"}/>
                        </div>
                        <div className="section-content">
                            <h2 className="section-title">Detailed listener metrics</h2>
                            <p className="section-description">See how many unique listeners connected, how long for, and which countries or cities they tuned in from. View your listener stats over any selectable time period, and export the most relevant data as an easy to use spreadsheet file.</p>
                        </div>
                    </div>
                </div>
            </section>
        

        </main>
    );
};

export default Home;
