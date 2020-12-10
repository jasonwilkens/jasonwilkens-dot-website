<template>
  <div class="reset">
    <nuxt/>
  </div>
</template>

<style>
/* Unset regular site styles */
.reset {
  margin: -1rem;
  padding: unset;
  font-family: unset;
  font-size: unset;
  font-weight: unset;
  font-variant-ligatures: unset;
  font-feature-settings: unset;
  color: unset;
}

.reset a {
  color: unset;
  background-color: unset;
  text-decoration: unset;
  transition: unset;
}

.reset a:hover, .reset a:focus {
  background-color: unset;
  text-decoration: unset;
  outline: unset;
}

.reset button {
  background-color: unset;
  padding: unset;
  border: unset;
  color: unset;
  transition: unset;
}

.reset button:hover, .reset a.button:hover {
  background-color: unset;
  color: unset;
}

.reset h1, .reset h2, .reset h3, .reset h4, .reset h5 { font-weight: unset; }

.reset main {
  max-width: unset;
  margin: unset;
  padding-bottom: unset;
}

.reset main * + div, .reset main * + section, .reset main * + article { margin-top: unset; }

.reset li + li { margin-top: unset; }

.reset * { line-height: unset; }

.reset p, .reset li, .reset blockquote { max-width: unset; }

.reset ul {
  list-style-type: unset;
  list-style-position: unset;
  padding-left: unset;
}

.reset a { font-weight: unset; }

.reset h1, .reset h2, .reset h3 {
  display: block;
  position: unset;
  padding-top: unset;
  letter-spacing: unset;
}

.reset h1 {
  margin: unset;
  line-height: unset;
}

.reset h1::before, .reset h2::before, .reset h3::before {
  content: unset;
  position: unset;
  top: unset;
  left: unset;
  min-width: unset;
  min-height: unset;
  background: unset;
}

.reset header nav, .reset header nav + h1 {
  display: unset;
  position: unset;
  top: unset;
}

@media screen and (min-width: 700px) {
  .reset header { padding: unset; }

  .reset main { padding: unset; }
}

@media screen and (min-width: 1150px) {
  .reset header { padding: unset; }

  .reset main {
    padding: unset;
    max-width: unset;
  }
}
</style>