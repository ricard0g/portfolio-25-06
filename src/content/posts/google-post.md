---
layout: "../../layouts/PostLayout.astro"
slug: "google-post"
title: "Will Google Win the AI Race?"
pubDateString: "2025, September 4th"
pubDate: 2025-09-04
tags: ["Google", "Google Deepmind", "AI", "LLMs"] 
author: "Ricardo Guzman"
image: "https://images.pexels.com/photos/425160/pexels-photo-425160.jpeg"
description: "I here talk about why Google will probably win the 'AI Race'."
---

Something is clear. We're in the AI Race.

A normal day on X for devs is:

1. Post 1 --> **_"🚨Breaking: Anthropic just reached AGI!"_**. Spoiler: they didn't.
2. Post 2 --> **_"Cluely Ad"_**. Yeah, I don't have X Premium.
3. Post 3 --> **_"Google just killed photoshop"_**. Note: Nano Banana is actually really good.
4. Post 4 --> **_"Morning camping rant: tabs vs. spaces"_**. Uncle bob in a robe will always surprise you.

And that's on the first 60 seconds. We've become numb to these types of exaggerated posts.

But I have to be honest, there's one company that I've been impressed on their AI proposals, obviously I'm talking about Google.

The first time I heard "1.000.000 Token Context Window" I said "What?".

I mean, all other companies are averaging 200K token context windows, how is it possible that Google achieves to delivery 5 times that?

Not only that, **they give you Google AI Studio FOR FREE for you to play with**. I mean, is Sundar taking decisions while smoking a joint or something? How is that possible?

I'm not even mentioning the fact the the 2.5 Gemini models are top-tier. Good for complex tasks, good for reasoning and coding.

As you would say in spanish, it has the three Bs. "Bueno, Bonito y Barato".

But how is this possible in an industry that almost every company is losing money while trying really hard to get a breakthrough?

Well, we'll analyze all that in this post.

I'll be presenting 3 points on why Google might be the AI leader long-term.

## 1. Vertical Integration from Silicon to Software

Google has end-to-end control over the entire AI technology stack.

They have their own custom-designed silicon, highly optimized software frameworks and global cloud infrastructure.

The combination of all and the control over how Google iterates with each tool is something that directly contributes to the prices and performance of models we get.

### 1.1 The Silicon Advantage: Tensor Processing Units (TPUs)

Since 2015 Google has been investing in their own custom-designed silicon.

They already knew that this AI era would be limited by the power of the Hardware you use for training and running these models.

The development of these _Tensor Processing Units_ represents a fundamental, structural advantage that provides benefits in:

- Cost
- Performance
- Strategic Independence

**Strategic Independence?**

The fact that Google developed their own TPUs optimized for machine learning means that they don't depend on external vendors.

Not only that, we're not talking about a General-purpose Processor like GPUs, we're talking about _Application-Specific Integrated Circuits (ASICs)_.

This means that not only from a cash perspective Google isn't attached to any vendor, but also tech-wise Google is on the front of the development of custom AI accelerators.

So Google from this point of view is in a good spot indeed.

#### Let's talk about these TPUs

As I said before, these are not General-purpose processors, these are ASICs designed for one single purpose:

> Accelerating neural network machine learning workloads

The core design of a TPU prioritizes a massive volume of low-precision matrix multiplication operations (the mathematical foundation of deep learning) over the graphical rendering and high-precision capabilities that are vestigial in GPUs.

But wait, what the f\*ck are these _"Low-precision matrix operations"_ and why is _"low-precision"_ something good?

##### Optimized for Matrix Math (High-level overview)

At the heart of AI we have massive matrix multiplication operations.

TPUs are built around a component called **Matrix Multiply Unit (MXU)**, which is a [Systolic Array](https://en.wikipedia.org/wiki/Systolic_array) of thousands of simple multiply-accumulators.

This Systolic array allows data to flow through the chip in waves.

Each processing element performs a small computation and passes the result directly to its neighbor.

Team work basically.

This design drastically reduces the need for memory access during calculations, which in turn increases throughput and power efficiency.

By each processing element having to compute small amounts everything as a team flows better.

##### Low-precision, High-volume Computation

Neural Networks often don't require the high-precision 32-bit or 64-bit floating-point calculations that GPUs excel at.

A part of training a neural network is about minimizing the so called _[Loss Function](https://en.wikipedia.org/wiki/Loss_function)_.

This is a mathematical equation that measures how wrong the model's predictions are compared to the correct answers.

> High value in this equation means the model is very wrong.
> A value of zero means it's perfect.

Training is the process of adjusting all the weights and biases (the variables) to find the combination that results in the lowest possible loss.

_"Cool, but, when it starts, how does the training algorithm know how wrong is it?"_

Well, for that it uses an algorithm called _[Gradient Descent](https://en.wikipedia.org/wiki/Gradient_descent)_.

This is a very simplistic explanation of the process:

1. **Calculate the Gradient** --> This _Gradient_ is basically a vector (an arrow) that points directly to the **_steepest uphill slope_**.

   At any given point, through iterations, the training algorithm calculates the _gradient_ of the loss function.

   It calculates the _steepest increase_ in the loss.

   So, if the _gradient_ points towards the steepest uphill slope... that's the opposite of what we want, if we go up in the loss equation our training algorithm is even _more_ wrong.

   That's where the _"Descent"_ comes.

2. **Update the Weights** --> Since the training algorithm knows the gradient, it now is going to go completely in the opposite direction, this way starting the _"descent"_.

This process is repeated millions of times.

###### Why low-precision is important

The core function of the gradient is to provide **_direction for improvement_**.

A _High Precision_ calculation (like 32-bit floating point) might determine that the exact gradient is something like:

> [0.94582, -0.91749, 1.42756]

While a _Low Precision_ calculation (16-bit floating point) might calculate the same gradient as:

> [0.95, -0.92, 1.43]

The point is that the **overall direction they point is virtually identical**.

Since the gradient's purpose is to provide a direction to follow, the small amount of extra accuracy is just computational cost.

The algorithm will still update the weights in the correct general direction to reduce the model's error.

> Low Precision is dramatically **faster**, requires **less memory** and consumes **less energy**.

###### If it's low precision, can I trust it?

That's a question you might have.

These tiny errors that low-precision numbers bring are acting as **"Computational Noise"** during training.

This is actually something good because it prevents the model from being too reliant on any single weight or activation rule.

This noise is something that forces the network to learn robust and generalizable patterns.

This process is known as **_regularization_**.

This helps it to perform better on new and unseen data.

Just like us humans, we identify noise because we've learned the patterns.

By learning the patterns in a pool of noise, that pattern becomes stronger.

#### The generational Leap to Trillium

This is another crazy point, the cadence of innovation and improvement in capabilities of these TPUs.

The sixth-generation TPU named **"Trillium"**, delivers a staggering 4.7-fold increase in peak compute performance compared to the fifth-generation TPU (TPU v5e).

This is accompanied by:

- 2x High Bandwith Memory (HBM) capacity and bandwidth
- 2x of the Inter-chip Interconnect (ICI) bandwidth for massive clustering
- 67% improvement in energy efficiency

Here's a visual representation of the improvements:

| Feature                      | TPU v5e    | Trillium (TPU v6e)  | Generational Uplift |
| ---------------------------- | ---------- | ------------------- | ------------------- |
| Peak Compute per Chip (BF16) | 197 TFLOPs | 918 TFLOPs          | 4.7x                |
| Peak Compute per Chip (int8) | 393 TOPs   | 1.836 TOPs          | 4.7x                |
| HBM Capacity per Chip        | 16 GB      | 32 GB               | 2x                  |
| HBM Bandwidth per Chip       | 800 GBps   | 1.600G GBps         | 2x                  |
| ICI Bandwidth per Chip       | 1.600 GBps | 3.200 GBps          | 2x                  |
| Energy Efficiency            | Baseline   | 1.67 x vs. v5e      | 67% improvement     |
| Training Performance/dollar  | Baseline   | Up to 2.5 x vs. v5e | 150% improvement    |

_"Baseline" means we're using the TPU v5e as reference for comparison_

##### Generational Comparison: NVIDIA vs. Google

Now something you might want, a comparison table between the most known company on the processor market (NVIDIA) and Google.

**Trillium** and **NVIDIA Blackwell B200** are the newest chips to date (available on the market) from NVIDIA and Google.

But there's a problem, is naive and inaccurate to compare the Trillium TPU with the NVIDIA B200 GPU.

The architecture and strategy behind each processor is just completely different, we'd be comparing apples to oranges.

What we can do though is to compare the generational improvement between the latest Google TPU against its predecessor, same with NVIDIA latest GPU against its predecessor.

This way we can compare which company is having a bigger generational leap.

Since the comparison table for Google is above, here's the one for NVIDIA.

| Feature                    | NVIDIA Hopper H100 (SXM5) | NVIDIA Blackwell B200 (SXM6) | Generational Uplift |
| -------------------------- | ------------------------- | ---------------------------- | ------------------- |
| Architecture               | Hopper                    | Blackwell (Dual-Die)         | Architectural Shift |
| Transistor Count           | 80 billion                | 208 billion                  | 2.6x                |
| Peak Compute (FP4, Dense)  | Not Available             | 9 PFLOPS                     | New Capability      |
| Peak Compute (FP8, Dense)  | 990 TFLOPS                | 4.5 PFLOPS                   | 4.5x                |
| Peak Compute (BF16, Dense) | 495 TFLOPS                | 2.25 PFLOPS                  | 4.5x                |
| Peak Compute (INT8, Dense) | 990 TOPS                  | 4.5 POPS                     | 4.5x                |
| HBM Capacity per Chip      | 80 GB HBM3                | 192 GB HBM3e                 | 2.4x                |
| HBM Bandwidth per Chip     | 3.35 TB/s                 | 8 TB/s                       | 2.4x                |
| Interconnect Bandwidth     | 900 GB/s (NVLink 4.0)     | 1.8 TB/s (NVLink 5.0)        | 2x                  |
| Thermal Design Power (TDP) | 700 W                     | 1.000 W                      | 1.43x               |

Now with both tables we can see the improvement between generations.

Take into consideration that both processors are just not comparable.

Trillium is a custom made silicon for a specific function, which is to train these neural networks.

The NVIDIA B200 is a general-purpose GPU that comes with many other capabilities that can be used for other purposes.

A strong feature from NVIDIA B200 is the new **_FP4 support_**, this is a strong paradigm shift for inference workloads.

This new capability is the primary technical driver behind NVIDIA's claims of "up to 30x faster inference" at the system level.

I won't delve into NVIDIA B200 GPU but it's a strong competitor that has its own features and strategy.

##### Trillium Advantage

If you take a look at NVIDIA B200 when compared to Google's Trillium it might look like NVIDIA is winning by a lot.

But the strategy behind Trillium is completely different.

Google focuses on **system-level design**, **scalability** and **Total Cost of Ownership (TCO)**.

###### 1. Massive Scale

Competition focuses on building 8-GPU servers connected by actually great tech like NVLink, Google has a different style.

Their architecture is built around much larger building blocks called **pods**.

- **TPU Pods and Interconnects**