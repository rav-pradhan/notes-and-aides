---
topicID: "http"
topic: "HTTP"
title: "Messages"
metaDescription: "Messages"
syntaxHighlights: true
---

Messages in HTTP are how data is exchanged between server and client.

Messages are composed of textual information that is encoded in ASCII, and spans over multiple lines.

## Requests and Responses

The client, such as a browser, needs a resource from the server. The resource is a web page. The **request** is made to the server using a language and vocabulary that the server understands.

If the server acknowledges the **request**, and the resource is available, then the server can **respond** with the relevant web page.

If the server acknoweldges the **request**, but _doesn't_ have the resource, then the server can still respond to the client to inform that there was a problem.

HTTP is a **request-and-response protocol**.

Clients send **HTTP requests** to a server using a message. This message is formatted in such a way that the server will understand.

Servers respond by sending an **HTTP response** that the client can understand.

Requests and responses are **two types of messages**. These are exchanged in what is known as an **HTTP transaction**.

The HTTP standard defines the parameters of request and response messages to ensure systems can follow the protocol to communicate with each other and exchange resources.

## HTTP Request Methods

"GET" is one of the primary **HTTP methods**.

{% warning 'Every request message must include an HTTP method.' %}

HTTP methods describe the **purpose** of the request.

With an HTTP GET request, the purpose is to read or fetch a resource. You can GET a document, such as a PDF; you can also GET an image.

Other common HTTP methods include...

| Method | Description |
|------|---------------|
| GET  | Retrieve a resource |
| POST  | Store a resource  |
| PUT | Update a resource |
| DELETE | Remove a resource |
| HEAD | Retrieve the headers - or metadata - for a resource |

GET is also known as a **safe method**. As the name implies, safe methods do not do anything potentially untoward, such as delete a resource or submit a payment transaction.

POST, on the other hand, is _not_ a safe method. A POST changes something on the server; it signifies a request that could create a user, submit an order or transfer funds between bank accounts.

As such, web browsers treat GET and POST differently due to the potential risk of something untoward happening. For instance, we can refresh a web page retrieved via a GET request. If we try to refresh a page served as the response to an HTTP POST, we receive a warning from the browser that we may re-submit data as a result of this action.

Web apps tend to try and leave the client viewing the response to a GET request to reduce the risk of form resubmission negatively impacting the user. After the client POSTs data to a server, the server can process the information and respond with an HTTP redirect. This redirect can then tell the browser to GET another resource that, typically, would display information contextual to the previous POST operation.

An example of this would be submitting an order and having the server redirect you to an order confirmation page. With this page, the user can refresh the page safely.

This is a common web design pattern known as the POST/Redirect/GET (PRG) pattern.

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
