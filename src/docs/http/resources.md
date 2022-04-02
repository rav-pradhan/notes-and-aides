---
topicID: "http"
topic: "HTTP"
title: "Resources"
metaDescription: "Resources"
syntaxHighlights: true
---

Resources are exactly that - something that we can access on the web.

If I want to see what's going on in the world today, I might go onto the BBC website. The address might be `https://bbc.co.uk`.

This address is a URL - a uniform resource locator. It represents a resource on the web.

Each resource on the web has a URL that I can use to fetch it.

A URL can be broken down into three parts:

1. `http`, the part before `://`, is called the **URL scheme**. This describes _how_ to access a particular resource. With `http`, we are telling the browser to use the **hypertext transfer protocol**.

Everything after `://` is specific to a particular scheme. A legal HTTP URL may not be a legal `mailto` URL.

2. `bbc.co.uk` is the **host**. The host name tells the browser the name of the computer hosting the resource. Here, the browser uses a Domain Name System - DNS - to translate `bbc.co.uk` into a network address so it will know exactly where to send the request to fetch the resource.

You can also specify this using an IP address. The host name is a more human accessible/contextual format.

3. A URL path, for instance `/news` appended to `https://bbc.co.uk` is a specific resource that the bbc.co.uk host should recognise as being requested by the browser. The host will then respond appropriately.

A URL will sometimes point to a file on the host's file system, for instance `https://bbc.co.uk/ball.jpg`. Resources can also be dynamic, for instance `https://bbc.co.uk/news/everything-is-going-to-hell`. This may not refer to a specific file on disk. Instead, an application running on the bbc.co.uk host would take that request and build a resource using content from a datastore. This application would ultimately know how to respond to incoming requests by creating HTML for a browser to display.
