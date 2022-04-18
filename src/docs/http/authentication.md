---
topicID: "http"
topic: "HTTP"
title: "Authentication"
metaDescription: "Authentication"
syntaxHighlights: true
---

Authentication requires a user to prove their identity by way of username and password, or other credentials.

Authentication usually follows a challenge / response format. The client requests a secure resource, and the server challenges the client to authenticate. The client then needs to send another request which includes the authentication credentials that the server will then validate.

HTTP supports various authentication protocols. The top five are:

- basic
- digest
- forms
- OpenID

## Basic Authentication

The client requests a resource with a normal HTTP message.

```text
GET http://localhost/html5/ HTTP/1.1

Host: localhost
```

The server issues an authentication challenge.

```text
HTTP/1.1 401 Unauthorized

WWW-Authenticate: Basic realm="localhost"
```

The 401 status code tells the client that the reuqest was unauthorised. `WWW-Authenticate` is a header that tells the client to collect user credentials to try again. The `realm` attribute provides the client with context for the area that the request was unauthorised for.

From here, the UI can be updated to ensure the user knows what has happened.

With correct credentials, browsers can send another request that includes an `Authorization` header:

```text
GET http://localhost/html5/ HTTP/1.1 

Authorization: Basic bm86aXdvdWxkbnRkb3RoYXQh
```

The `Authorization` header value is the inputted user name and password encoded in base 64.

{% warning "Base 64 is unsecure by default because anyone with a base 64 decoder can view the message and steal a user's password. Due to this, basic authentication is rarely used without HTTPS" %}

The server can then perform validation; if the credentials match, the server can respond with a success state. If they don't match, the server will respond with a 401 status.

## Digest Authentication

Digest authentication does not transmit passwords using base 64 encoding. Instead, the client has to send a **digest** of the password which is computed using the MD5 hashing algorithm in tandem to a nonce that the server provides during the authentication challenge.

{% collapsible "Definition: nonce" %}
A nonce is a cryptographic "number used only once". It is randomly generated, and is used to help prevent replay attacks.
{% endcollapsible %}

With digest authentication, there are additional values that the server passes in the `WWW-Authenticate` header for use in the cyptographic functions.

```text
HTTP/1.1 401 Unauthorized

WWW-Authenticate: Digest realm="localhost",
            qop="auth,auth-int",
            nonce="dc9ecmaekfac3924ma02m",
            opaque="a93mca4ei4tja2mfa309"
```

Digest authentication is a step up from basic authentication, but is still vulnerable to man in the middle attacks. MD5 hashing is also weak form of encryption.

## Forms Authentication

A popular approach to authentication on the internet. This is not a standard authentication protocol and does not use `WWW-Authenticate` or `Authorization` headers. Many web frameworks provide some support for forms-based authentication.

With forms, an application will respond to a request for a secure resource by an anonymous user by redirecting them to a login page. This redirect is an HTTP 302 temporary redirect.

The login page is an HTML form where the user enters their credentials. On submit, the form values will `POST` to a server where the application takes the credentials and validates them against a database.

{% warning "Forms send credentials in plain text, so this is not secure unless you use HTTPS" %}

If the credentials are valid, the application will redirect the user back to the resource and also set a cookie indicating that the user is now authenticated.

These authentication cookies hold an encrypted, hashed value that prevents tampering. Without secure HTTPS, the cookie is vulnerable, meaning that session hijacking is still a risk.

Forms authentication allows applications to have complete control over the login experience and credential validation.

## OpenID / OAuth

Applications don't always want to have to manage usernames and passwords, and users don't always want to have to manage credentials for every website they sign up to.

OpenID and OAuth are standards that allow for **decentralised authentication**.

OpenID: a user registers with an OpenID identity provider; this provider is the only place that needs to store and validate user credentials. Such providers include Google and Apple.

When applications need to authenticate a user, it communicates with the user's identity provider.

There are plenty of benefits to using OpenID/OAuth, but it does introduce complexity in implementing and debugging a web application because of the need to interface with a third-party system.

## HTTPS

HTTPS uses an `https` scheme in the URL instead of `http`. The default port for HTTP is `443`, instead of `80`.

HTTP works by using an additional security layer in the [network protocol stack](/docs/http/connections/#transport-and-network-layers). This layer exists between the HTTP/TCP layers and uses the **Transport Layer Security** protocol (TLS), or its predecessor, **Secure Sockets Layer** (SSL).
