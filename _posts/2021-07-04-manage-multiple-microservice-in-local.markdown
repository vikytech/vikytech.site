---
title: Micro services in Local
layout: post
date: '2021-06-04 16:00:00'
author: Vikhyath Choradia
categories:
- tech
- utility
tags:
- microservices
- mac
- osx
permalink: MIL
---

We have all been there when we wanted to start multiple dependent micro service(s) at once in our local to develop / test an application.

Well as a developer I have always believed that writing automation take time but eventually saves time!!


Now that you have read until here you are curious enough to know the solution I have in mind right!!
Let quickly jump to that section below.

## Setup

The setup is quite simple and easy to setup for mac

- ### Install
`brew install foreman`


- ### Define 

    Go ahead and define a simple `procfile` as below in `root` folder of all your services

{% include codeCopy.html %}
```yml
<BACKEND_SERVICE_NAME_ON_PORT_1>: cd PATH_TO_SERVICE && <COMMAND_TO_START_THE_SERVICE:PORT1>
<BACKEND_SERVICE_NAME_ON_PORT_2>: cd PATH_TO_SERVICE && <COMMAND_TO_START_THE_SERVICE:PORT2>
<YET_ANOTHER_BACKEND_SERVICE_NAME_ON_PORT_3>: cd PATH_TO_SERVICE &&  <COMMAND_TO_START_THE_SERVICE:PORT3>
<FRONTEND_SERVICE_NAME>: cd PATH_TO_SERVICE && <COMMAND_TO_START_THE_SERVICE_2:PORT4>
```
- ### Run 
`foreman start`

The setup is that simple and easy to use

For more options and official documentation on the same find it [here](https://ddollar.github.io/foreman)
