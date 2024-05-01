import "../../public/App.css";

export const metadata = {
    metadataBase: new URL("https://www.minhchau.me"),
    title: "Chau Nguyen | Personal Portfolio", 
    description: "A Computer Science student with interests in AI/ML and Full Stack Web and Mobile Development!",
    keywords: [
        "Software Engineer",
        "Full Stack Developer",
        "Software Developer",
        "Mobile Developer",
      ],
      creator: "Chau Nguyen",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir="ltr">
            <head>
                <meta charset="UTF-8" />

                {/* <!-- Viewport Meta--> */}
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

                {/* <!-- Template Favicon & Icons Start --> */}
                <link rel="icon" href="img/favicon/favicon.ico" sizes="any" />
                <link rel="icon" href="img/favicon/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png" />
                <link rel="manifest" href="img/favicon/manifest.webmanifest" />

                {/* <!-- Template Styles Start --> */}
                <link rel="stylesheet" href="/App.css" />
                <link rel="stylesheet" href="css/loaders/loader.css" />
                <link rel="stylesheet" type="text/css" href="css/plugins.css" />

                {/* <!-- Custom Browser Color Start --> */}
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#dcdce7" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111111" />
                <meta name="msapplication-navbutton-color" content="#111111" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                
                {/* <!-- Load Scripts Start --> */}
                <script src="/js/libs.min.js"></script>
                <script src="/js/gallery-init.js"></script>
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}