Delphi Web Studio Pro product website
Website publication - November 20, 2026

Open the site
Double-click Open Website.cmd or open index.html in a browser. All core pages,
screenshots, installer downloads and guides work from this folder. JavaScript
enhances the menu, workflow tabs, screenshot viewer, guide search and fingerprint
copying. No application build tools or account are needed to review the site.

Contents
index.html       Product overview
features.html    Six concise groups covering the essential capabilities
download.html    Win64/Win32 installers, developer source ZIP and fingerprints
guides.html      All seven PDF and DOCX guide pairs
about.html       Open-source foundation, credits and license
updates.html     Build 4, 3 and 2 release notes
privacy.html     Website data and online translation disclosure
404.html         Helpful missing-page response with links back to the website
assets/          Shared styles, scripts, illustrative screenshots and product graphics
downloads/       Installers, developer source, checksums, guides and license notices
release-manifest.json  Version, relative paths, byte sizes and SHA-256 fingerprints

Downloads are real copies of version 1.0.0.4, served directly by this website.
The developer source ZIP uses the exact tracked application source at commit
ef298c4d1dfb2636947b9a1e28f1016fbb6df6f2; private/untracked files and Git history are excluded.
All source product installers, application files, saved projects and draft
storage outside this Website folder remain unchanged.

Editing
Edit the HTML files directly. Styling is in assets/site.css and interactions are
in assets/site.js. Navigation and footers are static in each page so they remain
available without JavaScript. Keep their links consistent when adding pages.
Product names use class="notranslate" and translate="no".

Translation
The site uses the Atlas-style floating GTranslate website widget and the local
assets/translation-selector.js helper. It needs internet access and follows the
visitor's browser language. This does not translate the editor application.
Read privacy.html and the linked provider terms before eventual publication.

Future release updates
Replace the installers, original .sha256 sidecars and guide files with the tested
release copies. Update download.html and guides.html filenames, fingerprints,
sizes and version/date labels together with release-manifest.json and updates.html.
The manifest is verification metadata; pages do not fetch it at runtime.

Publication
Website address: https://delphiwebstudio.github.io/
Website repository: https://github.com/DelphiWebStudio/delphiwebstudio.github.io
The dedicated repository contains only these product website files. It is
separate from the editor source repository, saved projects, drafts and backups.
GitHub Pages publishes the repository's main branch from its root. The .nojekyll
file preserves the static files without Jekyll processing. HTTPS is required.
Canonical addresses, social-preview URLs, sitemap.xml and robots.txt use the
public website address. No analytics or contact form is configured, and nothing
in this website sends email. The privacy page describes GitHub hosting and the
online translation service.

Keep publication limited to the reviewed website files. Never copy application
project folders, local credentials, backups, browser profiles or test evidence
into this directory or its repository. Changes should be reviewed and verified
before committing and pushing. The robots.txt file lists the public sitemap
and asks search engines not to crawl administrative files.

Illustrations
Screenshots show a safe illustrative community project. The product icon is the
existing Delphi Web Studio Pro mark. Other decorative illustrations are SVG/CSS.
The application remains based on Federico De Ponte's MIT-licensed OpenPage project;
full licensing notices are in downloads/notices.
