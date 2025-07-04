import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#0b0c10" } },
        fpsLimit: 60,
        particles: {
          number: { value: 70 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.4,
            outMode: "bounce",
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
