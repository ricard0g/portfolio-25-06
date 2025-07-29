---
layout: "../../layouts/PostLayout.astro"
slug: "gemini-cli-setup-with-workspace-account"
title: "Gemini CLI Setup using a Google Workspace Account"
pubDateString: "2025, June 26th"
pubDate: 2025-06-26
tags: ["Gemini", "CLI", "Google Cloud", "AI"]
author: "Ricardo Guzman"
image: "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg"
description: "The new Gemini CLI tool was just released and I found some trouble setting up my own Gemini CLI. Here I lay down the steps on how to setup the CLI using a Google Workspace Account."
---


Gemini CLI was just released, I haven't really tried any other CLI agent like "Claude Code" or "Codex", but when Gemini CLI dropped I went and installed it.

I'm a paying user of Google Workspaces so I said _"Sure I can take advantage from what I'm already paying for to get some good limits with this tool"_, that's why I wanted to use my Google Workspaces Account.

But during the installation I didn't know that you had to go through different steps when using the CLI through a Workspaces Account.

## Setup Google Cloud Account

First of all make sure you're logged in with your workspace account, the one with your business domain -> `@yourdomain.com`

Now, you'll have to create a Google Cloud account in case you don't have one with the current email already.

Google gives you $300 worth of credits for cloud projects that you can use for the next 90 days until they expire in case you didn't use them.

You'll have to setup a payment method to get an account but don't worry, you won't get charged anything unless you create some cloud projects.

Cloud works pay-as-you-go for projects, that's why they require you a payment method.

## Create Gemini CLI Project

Now on the top-left of the home page, right next to the "Google Cloud" logo, there's the project you're in right now.

It will probably show as **"My First Project"**.

Click there to create a new project, or you can open the same panel by typing `Cmd + o`on Mac or `Ctrl + o`on Windows.

Now you're in a panel that says **"Select a resource"**, here you must make sure you select your business domain organization to create a new project under that organization.

> NOTE: If you don't select your organization, later you won't be able to create the project

Now, that you selected your organization, on the top-right click on **"New Project"**.

Here you just have to give a _name_ to your project, choose any you like, don't overthink it, use  **Gemini CLI** or something related.

Then hit _Create_.

## Turning On Gemini Service

Great, you have your project create.

Select your new project at the top of your Google Cloud Console 🌐.

Go to the API Library by using the search bar, type -> ***Gemini for Google Cloud***.

Click on the *Gemini for Google Cloud* from the list and now you'll be on its page.

Click `Enable`

Now the Gemini service is turned on in your project, you can use it.

## Getting the project ID

Click on  ***Hamburger Button*** > ***Cloud Overview*** > ***Dashboard***.

Get to the Dashboard.

Select your _Gemini CLI_ project.

Now you'll see below `Project Info`your `Project ID`.

Copy that in your clipboard and save it, we'll use it later.

## Installing Gemini CLI

Go to [Gemini CLI GitHub](https://github.com/google-gemini/gemini-cli)

Follow the installation process.

> If you want to be able to use the `gemini`command on a regular basis you must follow the `npm install -g`approach.

## Configuring Gemini CLI

Open your terminal and run:

`export GOOGLE_CLOUD_PROJECT="your-project-id-goes-here"`

We're setting up an environment variable that Gemini CLI will use later for Authentication.

> You can make this environment variable permanent by adding it directly to your shell's startup file. If you don't permanently add the environment variable, you'll have to run the `export`command every time you want to use the Gemini CLI.

Now, run the `gemini`command in case you followed the `npm install -g` installation process, or run `npx https://github.com/google-gemini/gemini-cli`to get to the login part.

Now you only have to select `Login with Google`.

It'll take you to the usual login page from google.

Select your _workspace account_, and that's it.

Gemini CLI identifies your environment variable and you're already in.

Enjoy Gemini CLI 💥.