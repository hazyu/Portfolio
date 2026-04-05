import { Fragment } from "hono/jsx/jsx-runtime";
import Profile from "../components/profile.tsx";
import Base from "./base.tsx";

function Home() {
    return (
        <Base title="Hazyu - Home" css="home.css">
            <Fragment>
            <div>
                <section class="welcome-container">
                <div id="status" hx-get="/status" hx-trigger="load">
                <Profile status="offline"/>
                </div>
                <div>
                <h1>Welcome!</h1>
                 <p>
                    Hello. I go by Hazy. I am a full time programmer mainly focusing on high level web development and low level
                    game development.

                    My main languages of choice are python for backend web development and c++ for low level game development.
                </p>
                <p>
                    I spend my time mostly programming but you will ocassionaly find me either playing video games or
                    taking notes. I spend far too much time in obsidian.
                </p>
                    </div>
                </section>
                <section>
                <h1>About Me</h1>
                <p>
                    I am 25 year old with a bachelors in application development. I mainly focus on programming games 
                    because I grew up playing a bunch of classics on the PS2. To this day, ratchet and clank is still
                    one of my favorite franchises.

                </p>
                <p>
                    I am also a huge gunpla enjoyer and love spending my time building gunpla really poorly to piss off
                    people who take the hobby far too seiriously. I don't even use an execato knife, I just rip the part
                    out of the runner and use it as is. Dents and marks and all.
                </p>
                <article>
                <h2>How I spend my time</h2>
                <p>
                    I spend a bunch of my time also working on other kind of programming projects such as a website
                    for daily shiny hunting and a whole front end for emulation made specifically for the steam deck.
                    Any and all of my coding projects can be found on my Github page. Along with that, all of the
                    games i've worked on can be found on my itch.io page.
                </p>
                </article>
                <article>
                <h2>I... yap?</h2>
                <p>
                    I don't know if you can tell from this page but I am a yapper. I love typing out my thoughts to make 
                    things make sense in my very wrinkly brain (im old). You can find a bunch of my yapping on my blog
                    where I write about everything from my daily thoughts to my writings about programming topics.
                </p>
                </article>
                <article>
                <h2>Wait... I write more?</h2>
                <p>
                    I in fact do. I also spend my time writing game guides for games I am currently playing. I do this for
                    a couple of different reasons. One of them being that I somehow enjoy a game much more when I know and
                    research all of its secrets. It also helps in 100% completing a game. All of my guides can be found in
                    the guides tab on this website.
                </p>
                </article>
                </section>
            </div>
            </Fragment>
        </Base>
    )
}

export default Home;
