---
date: "2019-07-20"
title: Auto vs Manual
root: "/fleerp"
parents: ["Get started", "Tracker activation"]
priority: 4
---

# Auto vs Manual

This section describes the two main methods for activation of tracking device (auto/manual),
as well as their advantages and disadvantages.

### Auto setup

Auto device activation is a feature that eliminates the need for
presets via USB cables or complex SMS. In this way, the activation process is
significantly simplified, and the cost of the installation is reduced.

![AvsM](tracker-activation.png)

The basic parameters to be configured for an initial GPRS connection are automatically sent
via SMS from the server to the device.

- APN settings for the chosen GSM network provider
- Server address and port

When activating a new device, the user is required to enter the number of the SIM card, which is placed within it.
Up on finish, several configuration SMS will be sent to the device.
An important clarification that needs to be done is that the tracker should be switched on to receive these messages.

### Manual setup

For any reason the auto activation commands sent as SMS messages are not received by the device,
it must be manually activated. The reasons are numerous, the most common one being
antispam protection that restricts the name of the user or the length of the message.
Technical problems may also occur due to the use of symbols like $, #, %.
 
The basic parameters, which should be set up manually:

- APN settings for the chosen GSM network provider
- Server address and port

![AvsM](footer-icon.png)
