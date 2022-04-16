---
topicID: "http"
topic: "HTTP"
title: "Proxies"
metaDescription: "Proxies"
syntaxHighlights: true
---

A **proxy server** is a system that sits in the middle of a client and server that is usually hidden to end-users. It is an implementation detail in the context of an HTTP message transaction.

Where proxy servers are set up, HTTP messages go to the proxy instead of the server. The proxy accepts HTTP request messages and then forwards them to the relevant server. The proxy then takes the server response and forwards it back to the client.

Due to proxies being an intermediary step, systems can be set up where the proxy server can inspect any messages and perform additional actions. One such example is having a proxy server through which HTTP response messages are inspected to remove confidential data, such as referrer headers that point to internal resources on a company network.

Access control proxies can also log HTTP messages, ensuring that audit trails are available to view who accessed data at a given time. Access control proxies require user authentication to ensure only authorised users have external network access. 

Access control proxies is an example of a **forward proxy**. These usually reside closer to the client than the server. Forward proxies usually require configuration in the client software to work.

A **reverse proxy** is a proxy server that is closer to the server than the client. It is completely transparent to the client, meaning that users will never know that their HTTP request messages are being proxied.

A common use case for reverse proxies is to compress response messages (e.g., gzip compression) to take the load off web servers and decouple the web application from the delivery mechanism. The layered approach to HTTP enables this architecturally.

Other proxy examples:

**Load balancing** proxies can take a message and forward it to one of several web servers.

**SSL acceleration** proxies decrypt and encrypt HTTP messages, decoupling any encryption needs being required by the web server.

Proxies also provide an additional layer of security by filtering out potentially dangerous HTTP messages - specifically those messages that look like they could be cross-site-scripting attempts or SQL injection attacks.

**Caching proxies** will cache frequently accessed resources. This means that the proxy can respond without requiring an interaction with the web server to request the resource.

Proxies are a great example of how HTTP can influence the architecture of a web application. You can layer services into the network without changing the underlying business logic of the application.
