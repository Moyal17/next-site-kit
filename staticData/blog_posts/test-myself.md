---
title: 'test myself to see of I got the picture'
date: '2023-03-22'
---

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at aliquam quam, sed luctus turpis. Praesent a volutpat arcu. Praesent quis est et leo malesuada maximus nec et nibh. Phasellus consequat ac dui eget elementum. Aenean sit amet dolor sed enim egestas condimentum. Duis risus nulla, rutrum id nunc eu, consequat pulvinar velit. Integer augue turpis, aliquet id magna id, ultricies aliquam neque. Integer tempor sodales libero, mollis consequat eros lobortis a. Proin vel sagittis ante, eu elementum nibh. Donec sollicitudin pharetra elit, quis rutrum sem laoreet a. Suspendisse sed rutrum lectus. Vestibulum imperdiet, arcu ut euismod facilisis, lectus leo commodo leo, et gravida risus nunc in leo. Ut in quam quam.

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.