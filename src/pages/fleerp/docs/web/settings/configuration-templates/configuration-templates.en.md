---
date: "2019-07-20"
title: Configuration templates
root: "/fleerp"
parents: ["Web application", "Settings"]
priority: 66
---

# Configuration templates

The system Fleerp provides an easy and convenient way to automatically configure new tracking objects.
A tracking object may only enter into service after it has passed the configuration stage.
Then it is ready for work and can send the necessary data for processing by the systems.
The configuration of a tracking object itself is performed using configuration templates, defined by the user and meeting some specific needs for the tracking object.

Once it is created, a template can be applied multiple times to different tracking objects from the specified type and model.
The type, manufacturer and model information is provided by the user during the activation process.
If a template is created for a given model, then the tracking object will be configured according template.
Otherwise, the user must perform the activation manually by sending the necessary commands.

To preview all existing templates as well as create new ones, a "Configuration templates" section is available in the settings bar.

![ConfigurationTemplates](./images/config-templates-en.png)

# List with configuration templates

When selecting the "Configuration templates" section in the settings bar, a visualization of all existing templates, created by the user is available.

![ConfigTemplatesList](./images/config-templates-list-en.png)

# Create new configuration template

To create a new configuration template, the user must click the "New template" button.

![NewConfigTemplateBtn](./images/new-config-template-btn-en.png)

The configuration template consists of three sections:

- general;

![General](./images/general-en.png)

- port configuration;

![PortConfig](./images/port-config-en.png)

Filling information in this section is similar to the "Ports" section in the tracking object settings - *[link](../../settings/tobjects/details/ports)*.

- tracking object setup commands - can be sent as GPRS commands or text/binary SMS commands;

![Commands](./images/commands-en.png)

# Edit a configuration template

There is an option to edit an existing configuration template.
After clicking on a given template name from the list, the user will be redirected to the edit screen.

![TemplateLink](./images/template-link-en.png)

![EditTemplate](./images/edit-template-en.png)

# Delete a configuration template

There is an option to delete a configuration template by using the button provided in the edit menu.

![DeleteTemplate](./images/delete-template-en.png)

