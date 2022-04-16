---
topicID: "http"
topic: "HTTP"
title: "Connections"
metaDescription: "Connections"
syntaxHighlights: true
---

Network communication consists of layers. Each layer in what we call a **communication stack** is responsible for a specific and limited number of things.

HTTP is known as an **application layer protocol**. This is because HTTP allows two applications to communicate over the network. One such application is a web browser, while the other is a web server.

Transmission of HTTP messages is the concern of a lower layer protocol. Messages from web browsers have to traverse down through multiple network layers. When these messages arrive at the web server, they then travel up through the network layers to reach the **web service process**.

## Transport and Network Layers

The layers both client and server navigate with HTPT requests are:

- Application (HTTP)
- Transport (TCP)
- Network (IP)
- Data Link (Ethernet)

### TCP (Transmission Control Protocol)

TCP is a networking protocol that allows two computers to communicate.

Nearly all HTTP traffic travels over TCP, although this is not a **requirement**. A browser extracts the host name from the URL (and any port numbers), and opens a **TCP socket** by specifying the server address and port.

Once an application has an open socket, it can begin writing data into the socket. The browser just needs to concern itself with writing a properly formatted HTTP request message into the socket.

The TCP layer can then accept the data and guarantees delivery of the message to the server. Because TCP will resend any information that could get lost in transit, it is known as a **reliable protocol**.

TCP also provides flow control algorithms to ensure the send does not send data faster than the receiver can process the data.

### IP (Internet Protocol)

Where TCP is responsible for pre-flight checks and subsequent facilitation of the HTTP request, IP is concerned with navigating the data through network devices (routers, gateways etc.) to ensure that data is delivered to the intended destination. With that said, IP can't guarantee delivery because guaranteed delivery is TCP's concern.

IP requires every device to have an address. An IP address looks like, e.g., `192.168.1.1`. IP is also resposnible for segmenting data into **packets**.

### Data Link Layer

Eventually, the IP packets must travel from one computer to another. This is where the **data link layer** comes into play. An **ethernet** would be an example of a data link layer. Protocols like ethernet are low-level; they concern themselves with the bytes and physical transfer of data through electromagnetic signals.

### The network layer on the server-side

- The data link layer delivers packets to the IP layer
- The IP layer configures this raw information to hand the data to TCP
- TCP then translates the data into the original HTTP message sent by the client
- This is pushed into the web server process because the web server listens for messages on a TCP socket for a given port

## Parallel Connections

Web browsers can open multiple, parallel connections to a server, as opposed to making requests serially. This is because an HTTP request can spawn multiple other requests (e.g. for CSS, JS files, images, videos etc.), and each of these introduces delays into a signal transfer process that already has latency because of the physical transfer needed between client and server. The server could be on the other side of the world, for instance, and the data consequently has to traverse an incredibly long distance.

> "A single-user client SHOULD NOT maintain more than two connections with any server or proxy." - Original HTTP 1.1 specification

Most browsers today, however, will open at least six concurrenct connections.

Parallel connections obey the law of diminishing returns. Too many connections can saturate and congest the network. A single server can also only accept a finite number of connections. There are other ways, however, to optimise connections.

## Persistent Connections

HTTP 1.1 suggests that clients and servers should implement **persistent connections**.

A persistent connection stays open after the completion of a transaction. This means that a browser can reuse the already open socket ot make future requests, and thus remove the overhead of opening a new socket.

Persistent connections consequently reduce resource usage (memory/CPU), network congestion and latency.

However, many servers have a default maximum number of concurrent connections. This is a security measure to help prevent denial of service (DoS) attacks. If this wasn't in place, a malicious actor could open thousands of persistent connections and overwhelm the server with connections. This can cause the server to crash - preventing other users from using the service.

How long should a persistent connection stay open for? Most web servers will close a connection if it is idle for a period of time. Default Apache configuration says to close a persistent connection if it has been idle for 5 seconds.

Web servers also allow you to disable persistent connections. This is common practice with shared servers offered by inexpensive webhosts.

Shared servers sacrifice performance to allow for as many connections as possible. A server that prohibits persistent connections must include a `Connection` header in every HTTP response.

Example:

```text
HTTP/1.1 200 OK

Content-Type: text/html; charset=utf-8

Connection: close

Content-Length: 18495
```

The `Connection: close` header informs the browser that the connection will not be persistent and that it should close the connection immediately.
