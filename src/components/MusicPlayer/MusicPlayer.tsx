import { useState, useEffect } from 'react';
import { Howl } from 'howler';

function MusicPlayer() {
    const [sound, setSound] = useState<Howl | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const newSound = new Howl({
            src: [],
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
            <button onClick={handlePlayPause}></button>
            {/* progress bar and controls */}
        </div>
    );
};

export default MusicPlayer