---
topicID: "http"
topic: "HTTP"
title: "Headers"
metaDescription: "Headers"
syntaxHighlights: true
---

## HTTP Request Headers

A full HTTP request message consists of the following parts:

```text
[method] [URL] [version]

[request headers]

[request body]
```

An HTTP message is always in ASCII. The start line always contains the method, the URL and the HTTP version.

The body section can contain data, such as form fields, that the server can then access.

The middle section contains HTTP headers. In HTTP 1.1, `Host` is the only required header, but there are many optional headers you can include in a request.

Internationalisation is one such reason to include an optional header. The `Accept-Language` header is defined by the HTTP specification that the server can read to render a page in the requested language, if the backend system has that implemented.

Other popular request headers include...

| Header | Description |
|------|---------------|
| `Referrer` | Client can send the URL of the referring page in this header |
| `User-Agent` | Information about the software making the request. Apps can use this to work out which browser is making the request |
| `Accept` | Describes the media types the user-agent (browser) is willing to accept. |
| `Accept-Language` | Describes the language the user-agent prefers |
| `Cookie` | Contains cookie information which generally helps servers track of ID a user |
| `If-Modified-Since` | Contains a date of when the user-agent last retrieved and cached the resource. The server only has to send back the entire resource if it's been modified since that time |

An example HTTP request could look like...

```text
GET https://notes.ravii.dev/ HTTP/1.1

Host: ravii.dev

Connection: keep-alive

User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36

Accept: text/html,application/xhtml+xml

Referer: http://www.google.com/url?&q=ravii.dev

Accept-Encoding: gzip,deflate

Accept-Language: en-GB,en;q=0.8
```

Some points to note:

- Some headers contain comma separated values.
- The "q" in the `Accept-Language` header corresponds to a **quality value**. Default is 1.0. Higher numbers indicate a higher preference for a value. If `en-GB` is not possible, any type of English will work, although preference is a lower value of 0.8
- The `Accept` header specifies the MIME types the user-agent prefers. HTML is the primary type, but equally XHTML works too.

## Response Status Codes

The status code is a number as defined by the HTTP spec. These are an important part of the HTTP response because they inform the client as to what has happened server-side.

There are five categories:

| Range | Category |
|-------|----------|
| 100-199 | Informational |
| 200-299 | Successful |
| 300-399 | Redirection |
| 400-499 | Client error |
| 500-599 | Server error |

Some of the most common codes include...

| Code | Reason | Description |
| ---- | ------ | ----------- |
| 200 | OK    | This means everything worked |
| 301 | Moved permanently | The resource has moved to the URL specified in the `Location` header and the client never needs to request the original URL again |
| 302 | Moved temporarily | The resource has moved to the URL specified in the `Location` header on a temporary basis |
| 304 | Not modified | The server is telling the client that the resource hasn't changed since the last time the client requested the resource |
| 400 | Bad request | Server could not understand the request (e.g. due to invalid data sent) |
| 403 | Forbidden | Server refused access to the resource, e.g., because of user permissions |
| 404 | Not found | Server could not find the resource, e.g., because of a typo in the URL |
| 500 | Internal server error | The server errored when processing the request. This could be due to a bug in the backend system that isn't handled, so the request could not fail gracefully |
| 503 | Service unavailable | The server won't service this request, e.g., due to throttling under heavy load |

{% collapsible 'HTTP status codes and web app messaging' %}
HTTP status codes indicate what is happening at the **HTTP level**.

This means it doesn't necessarily reflect what happens in the web app itself.

E.g., if the user inputs incorrect data in the context of the web app, but the server could still successfully process the request and respond, then the application should return a 200 (OK) status instead of, for instance, a 400 error.

From an app perspective, the request failed, but from an HTTP perspective, the transcation was successful.
{% endcollapsible %}

## Response Headers

Responses include header information that gives the user-agent additional data that can be used to process the response client-side. With MIME types, for instance, the user-agent can discern the content-type and parse accordingly.

When the content type is HTML, the character set used to encode HTML is UTF-8. Headers can also contain information about the server, such as type and version of software used to create the website.

An example response...

```text
HTTP/1.1 200 OK

Cache-Control: private

Content-Type: text/html; charset=utf-8

Server: Apache/2.4.1 (Unix)

Date: Fri, 15 Apr 2022 23:00:08 GMT

Connection: close

Content-Length: 18359

[HTML document here]
```

Response headers are contingent on the type of response. A redirection response has to include the `Location` header to inform the client of where to go, for instance.
