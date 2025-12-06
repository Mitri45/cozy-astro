<script lang="ts">
  let isOpen = false;

  function togglePopup() {
    isOpen = !isOpen;
  }

  function closePopup() {
    isOpen = false;
  }
</script>

<div class="info-container">
  {#if isOpen}
    <div class="backdrop" on:click={closePopup} on:keydown={(e) => e.key === 'Escape' && closePopup()} role="button" tabindex="0"></div>
    <div class="popup">
      <div class="popup-header">
        <h2>About</h2>
        <button class="close-btn" on:click={closePopup}>X</button>
      </div>
      <div class="popup-content">
        <p>The website is just a fun one evening learning exercise for testing how <a href="https://docs.astro.build/en/concepts/islands/" target="_blank" rel="noopener noreferrer">Astro Islands</a> written in different tech (Svelte, React, Vue, SolidJS) can communicate between each other.</p>
        <ol class="list-decimal">
          <li>Pixel art made in <a href="https://github.com/lllyasviel/Fooocus" target="_blank" rel="noopener noreferrer">Fooocus</a> with <a href="https://civitai.com/models/120096/pixel-art-xl" target="_blank" rel="noopener noreferrer">Pixel Art XL Lora</a> and <a href="https://grok.com/imagine" target="_blank" rel="noopener noreferrer">Grok Imagine</a> with Python post-editing</li>
          <li>Music created with <a href="https://suno.com/playlist/695aae58-9f4a-42d6-adab-67b47c4c6015" target="_blank" rel="noopener noreferrer">Suno</a></li>
          <li>Coding done in <a href="https://antigravity.google.com/" target="_blank" rel="noopener noreferrer">Antigravity IDE</a></li>
          <li>Planning and learning with <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">Gemini</a></li>
        </ol>
      </div>
    </div>
  {/if}

  <button class="info-btn" on:click={togglePopup} aria-label="Info">
    ?
  </button>
</div>

<style>
  .info-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 100;
    font-family: 'Press Start 2P', cursive;
  }

  .info-btn {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border: 3px solid #222;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 3px 3px 0px #222;
    transition: transform 0.1s, box-shadow 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    border-radius: 0; /* Retro style usually sharp corners */
  }

  .info-btn:active {
    transform: translate(3px, 3px);
    box-shadow: 0px 0px 0px #222;
  }

  .info-btn:hover {
    background-color: #f0f0f0;
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 101;
  }

  .popup {
    position: fixed;
    bottom: 6rem; /* Above the button */
    right: 2rem;
    width: 400px;
    max-width: 90vw;
    background-color: #e0e0e0;
    border: 4px solid #222;
    padding: 1rem;
    box-shadow: 6px 6px 0px #222;
    z-index: 102;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #222;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin: 0;
    font-size: 1rem;
    color: #222;
  }

  .close-btn {
    background: transparent;
    border: none;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    color: #222;
    padding: 0;
  }
  
  .close-btn:hover {
    color: #555;
  }

  .popup-content {
    font-size: 0.7rem;
    line-height: 1.6;
    color: #222;
  }

  p {
    margin-bottom: 1rem;
  }

  ol {
    padding-left: 1.5rem;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #222;
    text-decoration: underline;
  }
  
  a:hover {
    text-decoration: none;
  }
</style>
