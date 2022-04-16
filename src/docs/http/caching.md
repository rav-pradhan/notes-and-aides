---
topicID: "http"
topic: "HTTP"
title: "Caching"
metaDescription: "Caching"
syntaxHighlights: true
---

Caching is a performance and scalability optimisation. When certain resource representations are commonly requested (e.g., CSS or JS files), a proxy server or client can cache these files locally to reduce bandwidth required.

Caching can reduce latency and mitigate bottlenecks.

## Public Cache

Generally residing on proxy servers, public caches are those shared among multiple users.

On a forward proxy, public caches usually cache the resources that are popularly accessed by users.

On a reverse proxy, cached resources tend to be things that are popular on a specific website, such as popular product pages on an ecommerce site.

## Private Cache

These are caches for one user. A web browser, for instance, has a private cache of resources on the user's device (stored on disk).

## How cache permission can be set

In HTTP 1.1, any response message with a 200 (OK) status code for an HTTP GET request is cacheable by default. We can modify this default by using the `Cache-control` or `Expires` header.

{% collapsible "Cache-Control" %}
This is a header sent by an HTTP response, and can have any of these values:

**public**: public proxy servers can cache the response.
**private**: only the user's browser can cache the response.
**no-cache**: no one can cache the response.

A server can also specify a **max-age** value in the `Cache-control` header. This value corresponds to the number of seconds the response should be cached for.

Example:

```text
Cache-Control: max-age=315360000,public
```

This line included in an HTTP response means that the response can be publicly or privately cached for 10 years (315 million seconds).
{% endcollapsible %}

{% collapsible "Last-Modified and If-Modified-Since" %}
The `Last-Modified` header indicates when the resource representation last changed. Caching systems can use this value to validate whether or not the cached representation is still valid.

Example:

```text
Last-Modified: Fri, 15 Apr 2022 18:04:14 GMT
```

`If-Modified-Since` tells the server the client only needs the full response if the resource has changed. If the resource has not changed, then the server can respond with a `304 - Not Modified` message.

Example:

```text
HTTP request message:
If-Modified-Since: Thur, 14 Apr 2022 18:01:01

HTTP Response message:
HTTP/1.1 304 Not Modified
```

{% endcollapsible %}

The ability to layer caching and other services between the server and client is a core principle of HTTP and the web.
