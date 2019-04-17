---
title: Sidebar
---

A sidebar hides additional content beside a page.

- A sidebar can be visible on the page: **visible**
- A pusher can be dimmed: **dimmed**
- A sidebar can appear on different sides of the page: **top**, **bottom**, **right**, **left**
- A sidebar can specify its width: **thin**, **very thin**, **wide**, **very wide**

# JS

```js
$(document).ready(function(){
    // All your normal JS code goes in here
    $('.ui.button').popup();

    // shape example 
    $('.shape').shape();
    $('.button').click((e) => {
      const t = e.currentTarget;
      const direction = t.dataset.direction || false;
      const animation = t.dataset.animation || false;
      if (direction && animation) {
        $('.shape').shape(animation + '.' + direction);
      }
    });

    $('.toggle.button').click((e) => {
      $('.ui.sidebar').sidebar('toggle');
    });
});
```