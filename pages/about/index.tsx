import Head from "next/head"
import Link from "next/link";

const About = () => {
    return (
        <div>
            <Head>
                <title>About Todo</title>
            </Head>
            <main>
                <h1>About this</h1>
                <div>Back <Link href="/">home</Link></div>
            </main>
            <footer>
                by Pello
            </footer>
        </div>
    )
}

export default About;