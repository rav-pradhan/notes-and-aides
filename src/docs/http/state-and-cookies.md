---
topicID: "http"
topic: "HTTP"
title: "State and Cookies"
metaDescription: "State and Cookies"
syntaxHighlights: true
---

HTTP is a stateless protocol. This means every request-response is an independent transaction that has no knowledge of transactions from the past or those in coming in the future.

HTTP does not require a server to retain data about requests. All of the information a server needs to generate a response is encapsulated in the HTTP request message.

Because every HTTP message contains all the information required for processing, there is no tight coupling between the different service layers of a given web architecture.

## Managing state with cookies

Websites often use cookies to track users.

Cookies are defined by RFC6265 - _HTTP State Management Mechanism_. When a user visits a website, the site can give the user's browser a cookie using an HTTP header. Through this, the browser can then send the cookie in the headers of every subsequent request it sends to the site. The web application on the server can then use that cookie to differentiate requests from one user to another.

Many websites only put a unique identifier for a user, such as a GUID. A server can never trust data on the client unless the server encrypts and signs it. It's usually easy to give the client an ID and retain session data on the server.

Example:

```text
HTTP/1.1 200 OK

Set-Cookie:
GUID=00a48cm35fd03jcma9355fjamceid;
```

When the server receives the ID, it can use it to look up associated data from a datastore (in-memory, database, distributed cache). Web frameworks often abstract away cookie and session state management.

{% warning "It is important to use long, random character strings as session cookie values. Using easily identifiable session identifiers (e.g. sequential numbers) opens up the possibility of someone hijacking another user's session." %}

### HttpOnly Cookies

Cookies are vulnerable to cross-site scripting attacks (XSS). Here, malicious users can inject malevolent JavaScript code into a website. These malicious scripts can modify, inspect, and steal cookie information.

To mitigate this vulnerability, we can use the `HttpOnly` flag. This flag tells the browser to prevent access to the cookie from JavaScript. Browsers that implement `HttpOnly` will not allow JavaScript to read or write the cookie on the client.

## Cookie Scope

A web application can change the scope of a cookie and restrict them to hosts, domains, and specific resource paths.

Example:

```text
HTTP/1.1 200 OK

Set-Cookie: name=test; domain=.ravii.dev; path=/test

...
```

You can't use the domain attribute to span multiple domains. The browser would reject the cookie, if this happened.

Path attributes can restrict cookies to a specific resource path. This can help organise cookies when multiple teams are building web apps in different paths.

## Cons of Cookies

- Vulnerable to XSS attacks and poor implementation, particularly with advertising sites, means third-party cookies track users across the internet.
- Cookies interfere with caching in how they transmit data with every request.
  - Any response with a Set-Cookie header should not be cached, because caching can interfere with user identification and create security problems.
- Cookies should never store sensitive information because there are multiple network layers through which such information can be intercepted or listened to.
