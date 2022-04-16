---
topicID: "http"
topic: "HTTP"
title: "Resources"
metaDescription: "Resources"
syntaxHighlights: true
---

Resources are things that we can access on the web.

If I want to see what's going on in the world today, I might go onto the BBC website. The address might be `https://bbc.co.uk`.

This address is a URL - a uniform resource locator. It represents a resource on the web.

Each resource on the web has a URL that I can use to fetch it.

## Anatomy of a URL

A URL can be broken down into three parts:

1. `http`, the part before `://`, is called the **URL scheme**. This describes _how_ to access a particular resource. With `http`, we are telling the browser to use the **hypertext transfer protocol**.

Everything after `://` is specific to a particular scheme. A legal HTTP URL may not be a legal `mailto` URL.

2.`bbc.co.uk` is the **host**. The host name tells the browser the name of the computer hosting the resource. Here, the browser uses a Domain Name System - DNS - to translate `bbc.co.uk` into a network address so it will know exactly where to send the request to fetch the resource. You can also specify this using an IP address. The host name is a more human accessible/contextual format.

3. A URL path, for instance `/news` appended to `https://bbc.co.uk` is a specific resource that the bbc.co.uk host should recognise as being requested by the browser. The host will then respond appropriately.

A URL will sometimes point to a file on the host's file system, for instance `https://bbc.co.uk/ball.jpg`. Resources can also be dynamic, for instance `https://bbc.co.uk/news/everything-is-going-to-hell`. This may not refer to a specific file on disk. Instead, an application running on the bbc.co.uk host would take that request and build a resource using content from a datastore. This application would ultimately know how to respond to incoming requests by creating HTML for a browser to display.

## Ports, query strings, fragments

Some URLs sometimes include a colon and number, for instance, `:80`. This number represents the **port number** that the host uses to listen to HTTP requests.

A question mark - `?` - in a URL signifies the start of a **query**. A query is also known as a **query string**. This contains information that can be evaluated server-side. For instance, the query string in the following URL `https://weather.com?location=London,GB`, is `London,GB`. The server can take this value and create a specific resource to serve to the user that includes data about the weather in London, Great Britain. 

The # in a URL signifies the start of a **fragment**. These are different from the query strings and URL paths because fragments aren't processed server-side. Fragments are only used client-side to identify a specific section of a resource. These sections are signified in the HTML itself with an `ID` attribute.

URL paths are case sensitive, this means `https://notes.ravii.dev/panda` is a different resource than `https://notes.ravii.dev/Panda`. Most websites will try to make URLs work as though they are case-insensitive to avoid broken links and ensure a consistent user experience. You can't expect users to know URLs are case-sensitive, so it's mindful design to ensure services aren't built with case-sensitivity in mind.

## URL encoding

URLs should be made as usable and interoperable as possible. With that in mind, the internet standards define **unsafe characters** for URLs.

A space character is unsafe because space characters can appear or disappear by mistake when a URL is printed.

The "#" character is an unsafe character because it's used for fragments, and "^" is inconsistent in its transmittence by network devices.

Unsafe characters must be percent encoded. For instance, "%20" is the encoding for a space character.

If you were requesting a file called "cover letter.docx", the encoded URL would look like: `http://jobsite.com/cover%20letter.docx`

## URLs and resources

So, URLs relate to resources because when we type it into our browser, it means we want to retrieve or view a resource.

Hypertext documents, video, audio, images of various formats, executable applications, Word documents. These are all resources that can be requested via a URL.

As resources can be various file formats, the host returns metadata with the resource that specifies **content type**. HTTP relies on the MIME standards - Multipurpose Internet Mail Extensions.

MIME was originally designed for email, but HTTP uses MIME standards all the same.

When a browser requests an HTML web page, the server can respond to the request with some HTML and a content type specified as "text/html".

An JPG requested by the client can be responded to by the server with the content type of "image/jpeg". This tells the browser how to correctly parse the data that is returned.
