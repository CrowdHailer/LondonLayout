/* jshint esnext: true */

import { ready } from "./anon/dom";

function time() {
  console.log("ready", Date.now() - window.times.zero);
}

ready(time);
