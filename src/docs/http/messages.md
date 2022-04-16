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
