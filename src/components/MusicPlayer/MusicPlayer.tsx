import { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import mix from '../../assets/mix.wav'

function MusicPlayer() {
    const [sound, setSound] = useState<Howl | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const newSound = new Howl({
            src: [mix],
            html5: true,
            autoplay: true,
            loop: true,
            volume: 0.5,
            onend: () => {
                setIsPlaying(false);
            },
        });

        setSound(newSound);

        return () => {
            if(newSound) {
                newSound.unload();
            }
        };
    }, []);

    const handlePlayPause = () => {
        if (sound) {
            if (isPlaying) {
                sound.pause();
            } else {
                sound.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <button onClick={handlePlayPause}>ICON</button>
            {/* progress bar and controls */}
        </div>
    );
};

export default MusicPlayer