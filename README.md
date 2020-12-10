# jasonwilkens.website

> Personal website of Jason Wilkens, a web designer based in Seattle.

### Building the site

I prerender the site with [Nuxt](https://nuxtjs.org) and host it on [Netlify](https://netlify.com).

### APIs

#### Contact form

I use the [Mailgun API](https://documentation.mailgun.com/en/latest/api_reference.html) along with a
[Netlify function](https://functions.netlify.com/) to send myself emails from the contact form without putting my email address
on the repo or setting up a server. This is an example of development using the [Jamstack](https://jamstack.org/).

#### Weather

I get the weather on the homepage from the [Here API](https://developer.here.com/), also using Jamstack techniques.

#### Content

The article content comes from the [Pocket API](https://getpocket.com/developer/) and tweet data from
[Twitter's API](https://developer.twitter.com/ja/docs). Because the site is pregenerated I only need to get this data once
during the build process, I don't need to connect to these APIs every time the site loads.

### Typography

I set up responsive typography based on a modified version of [Utopia](https://utopia.fyi/) set up to work with server-side
rendering. I set type in the [Manrope](https://manropefont.com/) font, a variable font that lets me make the `font-weight`s
fluid with the screen size in addition to the `font-size`s.
