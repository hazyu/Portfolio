import { JSX } from "hono/jsx/jsx-runtime";
import Navigation from "../components/navigation.tsx";

type BaseProps = {
    title: string,
    css: string,
    children: JSX.Element
}
function Base({title="Hazyu", css, children} : BaseProps)  : JSX.Element {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>{title}</title>
                <link rel="stylesheet" href="index.css" />
                { css && <link rel="stylesheet" href={css} /> }
                <script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.8/dist/htmx.min.js"></script>
            </head>
            <body>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    )
}

export default Base
