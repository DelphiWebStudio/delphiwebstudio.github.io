Delphi Web Studio Pro product website
Local review copy - November 20, 2026

Open the site
Double-click Open Website.cmd or open index.html in a browser. All core pages,
screenshots, installer downloads and guides work from this folder. JavaScript
enhances the menu, workflow tabs, screenshot viewer, guide search and fingerprint
copying. No application build tools or account are needed to review the site.

Contents
index.html       Product overview
features.html    Capabilities and actual editor screenshots
download.html    Local Win64 and Win32 installers, fingerprints and requirements
guides.html      All seven PDF and DOCX guide pairs
about.html       Open-source foundation, credits and license
updates.html     Build 4, 3 and 2 release notes
privacy.html     Website data and online translation disclosure
assets/          Shared styles, scripts, safe screenshots and product graphics
downloads/       The actual installers, checksum files, guides and license notices
release-manifest.json  Version, relative paths, byte sizes and SHA-256 fingerprints

Downloads are real copies of version 1.0.0.4, not redirects to GitHub.
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
This folder has not been published, registered with hosting or pushed to GitHub.
It is excluded locally from the application repository. Its separate local Git
repository has no remote. Choose a domain/host before publication, then add the
live canonical URLs and absolute social-preview image URL. No analytics or
contact form is configured. Nothing in this folder sends email.

Illustrations
Screenshots show a safe illustrative community project. The product icon is the
existing Delphi Web Studio Pro mark. Other decorative illustrations are SVG/CSS.
The application remains based on Federico De Ponte's MIT-licensed OpenPage project;
full licensing notices are in downloads/notices.
