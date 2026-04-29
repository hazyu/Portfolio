---
title: How I made this website
date: 2026-04-11
completed: true
---


You might be wondering what technology went into making the website you are currently reading this on. Well, A lot of work has been put in to make sure I am running as little javascript as possible on users machines.As a matter of fact, the only page that has any javascript is the home page with the status checker. I wanted this website to be accessible for anyone who wanted to check it out, even if you are using a 3DS.

# Self host?

Thats right. This website is completely self hosted. Through a combination of docker containers and cloudflare tunnels. The reason I even did this was because I wanted the tech stack behind the scenes to be as minimal as possible along with just generally wanting to learn how to self host a website.

## Why not just use html and css then?

The reason I didn't just go with a bunch of html and css files is because I wanted to just write a simple markdown file for my blog posts and have them generated into html by the server. This way I can have dynamic content served using the files on my computer. This is known as server side rendering (SSR). The great part about server side rendering is that to the user, its still just html and css files. 

# So whats the tech stack

## Web server

Some of you might be coming to the conclusion that I used astro to make this website. WELL YOU ARE WRONG! While astro is great, so i've heard, I don't particularly want to deal with having to learn a whole new technology to make this website. Also at the end of it all, while astro will generate HTML files for you to serve to users, you still need to use a web server to make those HTML files reachable. 

As such, I decided to use Deno and Hono for web server. I was originally going to just use Deno since it comes with a built in web server but I decided to add Hono to my tech stack as it has a small overhead and supports JSX files.

![650](https://ucarecdn.com/e1a190c2-8c15-4e50-8d13-b290f69805a6/-/preview/1000x635/)

## Styling

For styling, I am using sass to create all the style sheets. I think the css syntax is fine but lacks in many areas such as ease of development. Sass covers all of css's downfalls by not only simplifying the syntax but also allowing for easier readability and quicker development. I genuinely think that you should always be using sass in any context where you need css files.

![650](https://ucarecdn.com/4b20de80-bc85-43a5-887f-10c66be02f8b/-/preview/1000x635/)

## Containerization

Docker is fantastic. Enough said. I am running a cloudflare container tunneling the web server port to the domain you are currently using to read this on. I set up a docker compose of both of these containers to ease upkeep and customization. If you haven't before, please learn and use docker containers. They can make something that seems complex become so easy.

# Conclusion

There you go, thats how I made this website. I plan to continue using this tech stack to not only extend this website in the future but also for any new websites going forward.

