import { useState } from 'react';

const Teste: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
    const audio = new Audio("C:/Users/luizf/Documents/NextTest/next_test/public/uepa.mp3");
    audio.play();
    audio.onended = () => setIsPlaying(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="C:/Users/luizf/Documents/NextTest/next_test/public/uepa.jpeg"
        alt="Centered Image"
        onClick={handleClick}
        className={`cursor-pointer ${isPlaying ? 'animate-pulse' : ''}`}
      />
    </div>
  );
};

export default Teste;
