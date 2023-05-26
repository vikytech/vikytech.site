---
layout: post
title: "QR based authentication"
date: 2023-04-12 11:06:36 +0530
tags: ["authentication"]
author: Vikhyath Choradia
published: true
comments: false
permalink: QR-auth
script: [post.js]
---
# What is QR based authentication ?
QR codes have become ubiquitous in today's digital world, used for everything from advertising campaigns to event check-ins. They are also being increasingly used for secure authentication and access control. In this blog post, we will explore how QR-based authentication works and its benefits.

QR-based authentication systems work by generating a unique QR code that can be scanned by a mobile device. The QR code contains a unique identifier that is linked to the user's account information, such as a password or other authentication credentials. When the user scans the QR code with their mobile device, the system verifies their identity and grants them access to the desired resource.

One of the primary benefits of QR-based authentication is that it is highly secure. Since each QR code is unique, it is extremely difficult for unauthorized users to gain access to a system or resource. Additionally, QR-based authentication can be used as a second factor of authentication, providing an extra layer of security.

---

## Three main components

### Authentication Server: 
This is the main server that handles authentication requests from users. It stores user credentials and generates unique QR codes that are linked to each user's account.

### QR Code Generator: 
This component generates a unique QR code for each authentication request. The QR code contains a unique identifier that is linked to the user's account information.

### Mobile Application:
This is the user-facing component of the system. Users scan the QR code using a mobile device that has the authentication application installed. The application sends the scanned QR code to the authentication server for verification.

When a user wants to access a resource or service that requires authentication, they open the client website. The client application generates a request for a auth code from the authentication server. The server generates a unique auth code and the client application uses it to generate the QR code. The user then scans the QR code with their mobile device. The authentication application sends the scanned QR code to the authentication server for verification. If the code is valid, the server grants access to the requested resource or service by performing [OIDC](/oidc) dance.

---

## Few downside(s)

While QR-based authentication has several advantages, there are also some potential drawbacks and limitations to consider. Here are some cons of QR-based authentication:

Dependence on Mobile Device: QR-based authentication relies heavily on mobile devices and their associated technology, such as cameras and QR code scanners. If a user's device does not have these features or they are not functioning correctly, the authentication process may not be possible.

### Security Concerns: 
While QR codes are unique and difficult to replicate, they can still be vulnerable to hacking and spoofing attacks. 
For example, an attacker could create a fake QR code that looks legitimate and trick a user into scanning it, thereby compromising their security.

### Single Factor Authentication:
While QR-based authentication can be used as a second factor of authentication, it is primarily a single factor authentication method. This means that it may not be sufficient for securing highly sensitive or critical resources and systems.

---
# User journey

<img src="/assets/images/posts/QR-auth-userflow.png" alt="User Journey" width="800px" height="100%">

---
> In conclusion, QR-based authentication systems provide a secure, convenient solution for authentication and access control. With the widespread use of smartphones and the increasing need for secure authentication, QR-based authentication is becoming an increasingly popular choice for businesses and organizations of all sizes.
