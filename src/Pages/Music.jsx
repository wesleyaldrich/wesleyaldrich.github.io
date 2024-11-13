import { useRef, useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { FaPlay, FaPause } from 'react-icons/fa';

function Music() {
    const songs = [
        {   title: 'Bition Freestyle',
            src: '/audio/BITION FREESTYLE.mp3' },
        {   title: 'Christmas Cosong',
            src: '/audio/COSONG.mp3' },
        {   title: 'Empty Store',
            src: '/audio/EMPTY STORE.mp3' },
        {   title: 'Evelyn',
            src: '/audio/EVELYN.mp3' },
        {   title: 'Flame',
            src: '/audio/FLAME.mp3' },
        {   title: 'Heaven or Hills',
            src: '/audio/HEAVEN OR HILLS.mp3' },
        {   title: 'Little Boy',
            src: '/audio/LITTLE BOY.mp3' },
        {   title: 'Sunny Side',
            src: '/audio/SUNNYSIDE.mp3' },
        {   title: 'Inst: 70 Dream',
            src: '/audio/70 DREAM.mp3' },
        {   title: 'Inst: ANP',
            src: '/audio/ANP.mp3' },
        {   title: 'Inst: Lonely',
            src: '/audio/LONELY.mp3' },
        {   title: 'Inst: No Villain',
            src: '/audio/NO VILLAIN.mp3' },
        {   title: 'Inst: Staircase',
            src: '/audio/STAIRCASE.mp3' },
        {   title: 'Cover: Shouldn\'t Be',
            src: '/audio/SHOULDNT BE.mp3' },
        {   title: 'Cover: Soft Spot',
            src: '/audio/SOFT SPOT.mp3' },
    ];

    const [activePlayer, setActivePlayer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState([]);
    const [volumes, setVolumes] = useState(Array(songs.length).fill(0.75));
    const audioRefs = useRef([]);


    const handlePlayPause = (index) => {
        const currentAudio = audioRefs.current[index].audioEl.current;

        if (activePlayer !== index) {
            if (activePlayer !== null) { // pause other playing track
                audioRefs.current[activePlayer].audioEl.current.pause();
                setIsPlaying(false);
            }
            // play the clicked track
            setActivePlayer(index);
            setIsPlaying(true);
            currentAudio.play();
        } else {
            if (isPlaying) { // pause
                currentAudio.pause();
                setIsPlaying(false);
            } else { // resume
                currentAudio.play();
                setIsPlaying(true);
            }
        }
    };

    const handleProgress = () => {
        const currentAudio = audioRefs.current[activePlayer]?.audioEl.current;
        if (currentAudio) {
            const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
            setProgress((prevProgress) => {
                const updatedProgress = [...prevProgress];
                updatedProgress[activePlayer] = progress;
                return updatedProgress;
            });
        }
    };

    const handleSeek = (event) => {
        const currentAudio = audioRefs.current[activePlayer]?.audioEl.current;
        if (currentAudio) {
            const seekTime = (event.target.value / 100) * currentAudio.duration;
            currentAudio.currentTime = seekTime;
        }
    };

    const handleVolumeChange = (index, event) => {
        const newVolume = event.target.value / 100;
        setVolumes((prevVolumes) => {
            const updatedVolumes = [...prevVolumes];
            updatedVolumes[index] = newVolume;
            return updatedVolumes;
        });
        if (audioRefs.current[index]?.audioEl.current) {
            audioRefs.current[index].audioEl.current.volume = newVolume;
        }
    };

    useEffect(() => {
        const currentAudio = audioRefs.current[activePlayer]?.audioEl.current;
        if (currentAudio) {
            currentAudio.addEventListener('timeupdate', handleProgress);
            return () => {
                currentAudio.removeEventListener('timeupdate', handleProgress);
            };
        }
    }, [activePlayer]);

    return (
        <div className="page-content">
            <div className="container">
                <div className="path">
                    <h1 className="h1 path__name">music</h1>
                    <p className="path__description">All of my music works</p>
                </div>

                <div>
                    {songs.map((track, index) => (
                        <div className="audio-card" key={index}>
                            <h3>{track.title}</h3>
                            <ReactAudioPlayer
                                className="audio-player"
                                src={track.src}
                                ref={(el) => (audioRefs.current[index] = el)}
                                style={{ display: 'none' }}
                                volume={volumes[index]}
                                onPlay={() => (audioRefs.current[index].audioEl.current.volume = volumes[index])}
                                controls
                            />
                            <div className="progress-bar">
                                <input
                                    className="input-progress-bar"
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={progress[index] || 0}
                                    onChange={handleSeek}
                                />
                            </div>
                            <div className="volume-bar">
                                <label htmlFor={`volume-${index}`}>Volume: </label>
                                <input
                                    className="input-volume-bar"
                                    id={`volume-${index}`}
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={volumes[index] * 100}
                                    onChange={(e) => handleVolumeChange(index, e)}
                                />
                            </div>
                            <div className="play-pause-btn-container">
                                <button className="play-pause-btn" onClick={() => handlePlayPause(index)} >
                                    {isPlaying && activePlayer === index ? <FaPause /> : <FaPlay />}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Music;
