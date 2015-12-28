London Layout
=============
Alternative tube map for london

## Priorities
1. minimise HTML
1. Splash screen
1. Click off splash screen event (start time change to time zero)
1. Send load time and click off time to keen as datapoints
1. minimise JS
1. minimise CSS
1. Page speed index as build step
1. About page
1. 404 page
1. log level from query params
1. back button works to update app state
1. error tracking
1. inline actual map
1. click and drag map
1. search for station
1. comparison to existing tube map

## Technology
### Page Analytics
Uses Google Analytics to track interactions on the page.
Look at [piwik](http://piwik.org/) for similar analytics in the future.
Or look at [Keen](keen.io) when moving to an app and needed to better record page events.

### Loading duration
The very first rendering of the page will set the start time within the times object which can then be used as reference for later events.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script>window.times = {start: Date.now()};</script>
  <!-- other headers -->
</head>
```
*code from Ampersand tool, [loading stats](https://www.npmjs.com/package/loading-stats)*

For IE 9+ there are no cross browser issues with checking for DOMContentLoaded.
This is dom setup before the loading of included resources is completed.
To check that an individual item is loaded can be done by setting an `onload` function.
This works on the `window` object and `element` objects.
```js
function time() {
  console.log(Date.now() - window.times.start);
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

$img = document.querySelector('img');
$img.onload = time
ready(time);
```
