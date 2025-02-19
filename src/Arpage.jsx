import "aframe";
import { useEffect } from "react";
import './arpage.css';

const Arpage = () => {
    useEffect(() => {
        const setView = (view) => {
            let cameraRig = document.getElementById("cameraRig");
            if (view === "top") {
                cameraRig.setAttribute("position", "0 50 0");
                cameraRig.setAttribute("rotation", "-90 0 0");
            } else {
                cameraRig.setAttribute("position", "0 0 30"); // Move closer from 40 to 20
                cameraRig.setAttribute("rotation", "0 0 0");
            }
        };

        const toggleFullscreen = () => {
            let scene = document.querySelector("a-scene");
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                scene.requestFullscreen();
            }
        };

        window.setView = setView;
        window.toggleFullscreen = toggleFullscreen;
    }, []);

    return (
        <div>
            <div id="controls" style={styles.controls}>
                <button onClick={() => window.setView("top")} style={styles.button}>
                    Top View
                </button>
                <button onClick={() => window.setView("normal")} style={styles.button}>
                    Normal View
                </button>
                <button onClick={() => window.toggleFullscreen()} style={styles.button}>
                    Fullscreen
                </button>
                <button onClick={() => window.location.href='/'} style={styles.button}>Back to Home</button>
            </div>
            <div className="ar">
                <h1>Augmented Reality</h1>
                <figure>
                    <a href="/solar-system" target="_blank" rel="noopener noreferrer">
                        <iframe
                            src="/solar-system"
                            title="Solar System Preview"
                            width="400"
                            height="300"
                            style={{ border: "none" }}
                        ></iframe>
                    </a>
                    <figcaption>Visit the space at your locality</figcaption>
                </figure>
            </div>
            <a-scene vr-mode-ui="enabled: false">
                <a-entity id="cameraRig" position="0 0 30">
                    <a-camera id="mainCamera" wasd-controls="acceleration: 50" zoom="1"></a-camera>
                </a-entity>

                {/* Sky background */}
                <a-sky material="src: https://cdn.glitch.com/4cfbcd0a-1382-44f1-b55c-1f16f20ea425%2FSolarsystemscope_texture_8k_stars_milky_way.jpg?v=1624110041528"></a-sky>

                {/* Sun */}
                <a-sphere position="0 0 0" radius="5.25" material="src: https://cdn.glitch.com/4cfbcd0a-1382-44f1-b55c-1f16f20ea425%2Fmaterial_1_baseColor.jpg?v=1624106708644" shadow></a-sphere>

                {/* Mercury */}
                <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 8800; easing: linear">
                    <a-sphere position="4 0 0" radius="0.38" material="color: #A0522D"></a-sphere>
                </a-entity>

                {/* Venus */}
                <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 22500; easing: linear">
                    <a-sphere position="6 0 0" radius="0.95" material="color: #DEB887"></a-sphere>
                </a-entity>

                {/* Earth */}
                <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 36500; easing: linear">
                    <a-sphere position="8 0 0" radius="1" material="src: https://cdn.glitch.com/4cfbcd0a-1382-44f1-b55c-1f16f20ea425%2F8081_earthmap2k.jpg?v=1624107209665"></a-sphere>
                </a-entity>

                {/* Mars */}
                <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 68700; easing: linear">
                    <a-sphere position="10 0 0" radius="0.53" material="color: #CD5C5C"></a-sphere>
                </a-entity>

                {/* Jupiter */}
                <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 433200; easing: linear">
                    <a-sphere position="13 0 0" radius="2.5" material="color: #DEB887"></a-sphere>
                </a-entity>

                {/* Saturn */}
                <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 1075200; easing: linear">
                    <a-sphere position="17 0 0" radius="2.1" material="color: #F4A460"></a-sphere>
                    <a-torus position="17 0 0" radius="3" radius-tubular="0.1" rotation="90 0 0" material="color: #DAA520"></a-torus>
                </a-entity>

                {/* Uranus */}
                <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 3066000; easing: linear">
                    <a-sphere position="20 0 0" radius="1.8" material="color: #87CEEB"></a-sphere>
                </a-entity>

                {/* Neptune */}
                <a-entity animation="property: rotation; to: 0 360 0; loop: true; dur: 6019200; easing: linear">
                    <a-sphere position="23 0 0" radius="1.7" material="color: #4169E1"></a-sphere>
                </a-entity>
            </a-scene>
        </div>
    );
};

const styles = {
    controls: {
        position: "absolute",
        top: "15px",
        left: "15px",
        zIndex: 1000,
        background: "rgba(0,0,0,0.5)",
        padding: "10px",
        borderRadius: "8px",
    },
    button: {
        padding: "10px 15px",
        margin: "5px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        transition: "background-color 0.3s",
    },
};

export default Arpage;