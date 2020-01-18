import Popup from './svelte/Popup.svelte';

new Popup({
  target: document.body,
  props: {
    greeting: 'Hello there'
  }
});
