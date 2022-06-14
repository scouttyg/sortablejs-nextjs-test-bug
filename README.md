## Description

This is a simple app bootstrapped in [Next.js](https://nextjs.org/) to demonstrate a possible bug (or something wrong I've configured) with `sortable-js` and `react-sortablejs`

## Getting Started / Reproducing the issue

- At the command line, run `yarn install` and then `yarn dev` to get the app running
- Open [http://localhost:3000](http://localhost:3000) with your browser
- Test drag and drop -- it should reorder and be sortable correctly.
- Now open the developer console within Chrome, and turn on "Toggle Device toolbar" (it's the icon at the top left of the developer console, that looks like an iPhone and iPad)
- Refresh the page just in case, but now try to drag, drop, and sort the items - while the dragged item will turn blue, it will not reorder or sort.
