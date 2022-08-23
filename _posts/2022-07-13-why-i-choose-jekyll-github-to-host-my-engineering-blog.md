---
layout: post
title:  "Leveraging Pytest Fixture and Multithreading to Test Webhook Service"
date:   2022-07-13 10:38:47 +0800
categories: How To
---

# Leveraging Pytest Fixture and Global State to Test Webhook Feature

When writing tests, testing network communication is a bit troublesome. One, we can use spy and just verify the function is called such as:

```python
mockedClass.method.assert_called_with(expected_parameter)
```

But for a service that will invoke a webhook. It feels far safer if we have an integration test that simulates the network call. Although we can use docker to test the integration. This may be a good solution but testing with docker consumes time.

I will give example to solve this issue using Pytest Fixture and simple multithreading.

# Let There be Problem

background scenario: You are maintaining a news company's content management system backend service.
