London Layout
=============
Alternative tube map for london

## Technology
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
