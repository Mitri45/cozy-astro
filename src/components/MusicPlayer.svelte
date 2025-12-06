<script lang="ts">
  import { isPlaying, currentTrackIndex, tracks, togglePlay, nextTrack, prevTrack } from '../stores/musicStore';

  let audio: HTMLAudioElement;

  $: currentTrack = tracks[$currentTrackIndex];

  // Reactively handle play/pause based on store state and track changes
  $: if (audio && currentTrack) {
    // Manually update src to ensure it's set before playing
    // audio.src is absolute, so we check if it ends with our relative path
    if (!audio.src.endsWith(currentTrack.src)) {
      audio.src = currentTrack.src;
    }

    if ($isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Playback prevented:", error);
          // Only reset playing state if it's a real error, not just an interruption
          if (error.name !== 'AbortError') {
             isPlaying.set(false);
          }
        });
      }
    } else {
      audio.pause();
    }
  }
</script>

<div class="music-player-container">
  <div class="music-player">
    <!-- svelte-ignore a11y-media-has-caption -->
    <audio 
      bind:this={audio} 
      on:ended={nextTrack}
    ></audio>

    <div class="display-screen">
      <div class="track-title">
        {currentTrack.title}
      </div>
    </div>

    <div class="controls">
      <button on:click={prevTrack} aria-label="Previous Track">
        ⏮
      </button>
      
      <button on:click={togglePlay} aria-label={$isPlaying ? "Pause" : "Play"}>
        {$isPlaying ? '⏸' : '▶'}
      </button>

      <button on:click={nextTrack} aria-label="Next Track">
        ⏭
      </button>
    </div>
  </div>
</div>

<style>
  .music-player-container {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    display: flex;
    justify-content: center;
    width: auto;
  }

  .music-player {
    background-color: #e0e0e0;
    border: 4px solid #222;
    padding: 1rem;
    width: 300px;
    box-shadow: 6px 6px 0px #222;
    font-family: 'Press Start 2P', cursive;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .display-screen {
    background-color: #9ea792; /* Retro LCD color */
    border: 3px solid #222;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    box-shadow: inset 2px 2px 4px rgba(0,0,0,0.2);
  }

  .track-title {
    font-size: 0.8rem;
    color: #222;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    background-color: #fff;
    border: 3px solid #222;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 3px 3px 0px #222;
    transition: transform 0.1s, box-shadow 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    font-family: inherit;
  }

  button:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px 0px #222;
  }

  button:hover {
    background-color: #f0f0f0;
  }
</style>
