import pic_about_me_1 from "../assets/wesley_1.JPG"
import pic_about_me_2 from "../assets/wesley_2.jpg"
import pic_about_me_3 from "../assets/wesley_3.jpg"

function AboutMe(){
    return (<>
        <div className="page-content">
            <div className="container">
                <div className="path">
                    <h1 className="h1 path__name">about-me</h1>
                    <p className="path__description">Quick information about me.</p>
                </div>

                <div className="about-me-contents">
                    <div className="about-me" id="about-1">
                        <div className="about-me-details">
                            <h2 className="h2">wesleyaldrich</h2>
                            <div class="about__text">
                                <p class="about__description">
                                    Wesley Aldrich is a Computer Science student from Indonesia, in BINUS University, taking the scholarship of PPTI BCA 2023. When he was a high school student, he was competitively active in Math, Informatics, Astronomy, and Astrophysics. His proudest win is the National Award in International Astronomy and Astrophysics Competition (IAAC) 2022.
                                </p>
                                <p class="about__description">
                                    For hobby, he loves song-writing and producing music. So whenever he's not studying for competitions, he use all of his free times to learn music production skills. Now, he has few songs released on Spotify, while most of his works are unreleased since he's not confident of his own voice, thus still looking for people to sing the songs he wrote.
                                </p>

                                <a target="_blank" href="https://github.com/wesleyaldrich" className="button">GitHub -&gt;</a>
                            </div>
                        </div>
                        <div className="about-me-img-container wesleyaldrich-info">
                            <img className="about-me-img" src={ pic_about_me_1 }/>
                        </div>
                    </div>

                    <div className="about-me" id="about-2">
                        <div className="about-me-img-container producer-info">
                            <img className="about-me-img" src={ pic_about_me_2 }/>
                        </div>
                        <div className="about-me-details">
                            <h2 className="h2">producer</h2>
                            <div className="about__text">
                                <p className="about__description">
                                    He considers himself as an audiophile. Whenever he listens to music, he despise sounds that are 'poorly mixed'. He has been this way such that he takes music too seriously to the point that he feels happy listening to good music. As the result of this behavior, he is now a self-taught music producer, and is serious with this professional side job.
                                </p>
                                <p className="about__description">
                                    By the name of PD Seul, usually known as PD, he is a sound engineer, music producer, song-writer, and a rapper, mainly responsible for managing the mix and master for projects assigned to him.
                                </p>

                                <a target="_blank" href="https://www.instagram.com/pd.wesley/" className="button">Instagram -&gt;</a>
                            </div>
                        </div>
                    </div>

                    <div className="about-me about-me-facts">
                        <div className="about-me-details">
                            <h2 className="h2">fun-facts</h2>
                            <div className="about__text facts-container">
                                <div className="fact">massive K-Pop fanboy</div>
                                <div className="fact">watches streamers every day</div>
                                <div className="fact">likes anything with Oreo</div>
                                <div className="fact">listens to K-RNB & K-HH</div>
                                <div className="fact">loves Monster Hunter</div>
                                <div className="fact">baptized as "Crescentius"</div>
                                <div className="fact">huge nerd about MCU</div>
                                <div className="fact">likes cold rooms</div>
                                <div className="fact">plays chess</div>
                                <div className="fact">lactose intolerant</div>
                                <div className="fact">TEKKEN 8 Yoshimitsu Player</div>
                                <div className="fact">caffeine-sensitive</div>
                                <div className="fact">picky eater</div>
                                <div className="fact">hate bugs</div>
                                <div className="fact">Subnautica lover</div>
                                <div className="fact">favorite streamer: Insym</div>
                                <div className="fact">can read Korean Hangul</div>
                                <div className="fact">loves modded Terraria</div>
                                <div className="fact">mech keyboard enthusiast</div>
                                <div className="fact">hates sour things</div>
                                <div className="fact">loves deep sea horror</div>
                                <div className="fact">cat and dog person</div>
                                <div className="fact">wanted to be Ethical Hacker</div>
                                <div className="fact">still thinking...</div>
                            </div>
                        </div>
                        <div className="about-me-img-container fact-img-container">
                            <img className="about-me-img" src={ pic_about_me_3 }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default AboutMe;