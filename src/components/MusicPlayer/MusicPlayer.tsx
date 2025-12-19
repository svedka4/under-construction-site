import { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

function MusicPlayer() {
    const [sound, setSound] = useState<Howl | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const newSound = new Howl({
            src: ['https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%3Aplaylists%3A2155966862%3Fsecret_token%3Ds-HGFGf0qI3JX&color=%23000000&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true'],
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
        </div>
    );
};

export default MusicPlayer