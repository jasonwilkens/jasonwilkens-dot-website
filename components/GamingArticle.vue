<template>
  <main>
    <article>
      <slot></slot>
    </article>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  background-color: #F9F9FA;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23EDEEF0' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1rem;
  line-height: 1.2;
  min-height: 100vh;
}

article {
  max-width: 50rem;
  box-sizing: content-box;
  margin: auto;
  background-color: rgba(255, 255, 255, .4);
  border-top-width: .2rem;
  border-top-style: solid;
  border-top-color: #1E2327;
  padding: 0 2rem 2rem;
  color: #1E2327;
}

section {
  display: flex;
}

section + section {
  margin-top: 2rem;
}

h1, h2, h3, h4, h5 {
  font-family: Grenze, serif;
  font-weight: 500;
}

strong {
  font-weight: 700;
}

h1 {
  font-size: 1.5rem;
  margin: .75em auto;
}

h2 {
  margin: 0;
  font-size: 1.25rem;
}

ul {
  padding-left: 1.25rem;
}

a {
  color: inherit;
  text-decoration-line: underline;
  text-decoration-color: #848c95;
}

img {
  max-width: 2.5rem;
  margin-top: .25rem;
}

table {
  border-spacing: 1.5rem 0;
  margin: 1rem 0 1rem -1.5rem;
  white-space: nowrap;
}

caption {
  text-align: left;
  margin-left: 1.5rem;
}

td,th {
  text-align: right;
}

td:first-child, th:first-child {
  text-align: left;
}

td.left, th.left {
  text-align: left;
}

td.right, th.right {
  text-align: right;
}

.content {
  overflow: hidden;
}

.table-wrapper {
  overflow-x: auto;
	background-image:
		linear-gradient(90deg, rgba(249,249,250,1) 30%, rgba(255,255,255,0)),
		linear-gradient(90deg, rgba(255,255,255,0), rgba(249,249,250,1) 70%),
    linear-gradient(90deg, rgba(30,35,39,1) 30%, rgba(0,0,0,0)),
		linear-gradient(90deg, rgba(0,0,0,0), rgba(30,35, 9,1) 100%);
  background-position: 0, right, 0, right;
	background-repeat: no-repeat;
	background-color: transparent;
	background-size: 4px 100%, 4px 100%, 2px 100%, 2px 100%;
	background-attachment: local, local, scroll, scroll;
  border-left: 1px solid rgba(249,249,250,1);
  border-right: .5px solid rgba(249,249,250,1);
}

.image {
  min-width: 3.125rem;
}

@media screen and (min-width:600px) {
  main {
    padding: 4em;
    font-size: 1.125rem;
  }

  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  img {
    max-width: 5rem;
    margin-top: .5rem;
  }
  
  .image {
    min-width: 6.25rem;
  }
}
</style>