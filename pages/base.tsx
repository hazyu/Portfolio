import { JSX } from "hono/jsx/jsx-runtime";
import Navigation from "../components/navigation.tsx";

type BaseProps = {
    title: string,
    children: JSX.Element
}
function Base({title="Hazyu", children} : BaseProps)  : JSX.Element {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>{title}</title>
                <link rel="stylesheet" href="index.css" />
            </head>
            <body>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    )
}

export default Base