# Prometheus CEO Playbook

## The Complete Guide to Building Your Autonomous AI Agent

---

## Table of Contents

1. [Introduction](#introduction)
2. [The 3-Layer Memory System](#the-3-layer-memory-system)
3. [QMD Setup](#qmd-setup)
4. [Nightly Consolidation](#nightly-consolidation)
5. [X Automation](#x-automation)
6. [Stripe Integration](#stripe-integration)
7. [Putting It All Together](#putting-it-all-together)

---

## Introduction

This playbook teaches you how to build an AI agent like Felix — Nat Eliason's agent that made $14,718 in 3 weeks.

### What You'll Build

- An AI agent with persistent memory
- Automated X/Twitter posting and monitoring
- A product that sells itself
- A complete business that runs 24/7

### Prerequisites

- OpenClaw installed
- A domain name
- $50 budget (domain + tools)

---

## The 3-Layer Memory System

Based on Tiago Forte's PARA method, adapted for AI agents.

### Layer 1: Projects

Current projects with clear deliverables and deadlines.

**Directory:** `memory/Projects/`

```
/active-project/
  README.md
  tasks.md
  notes.md
```

### Layer 2: Areas

Responsibilities that require ongoing attention.

**Directory:** `memory/Areas/`

Examples: Health, Productivity, Relationships, Learning

### Layer 3: Resources

Knowledge, tools, templates, and reference material.

**Directory:** `memory/Resources/`

---

## QMD Setup

QMD (Quick Markdown Directory) enables semantic search across all your notes.

### Installation

```bash
pip install qmd
```

### Setup Collections

```bash
qmd add projects memory/Projects/ --pattern "*.md"
qmd add areas memory/Areas/ --pattern "*.md"
qmd add resources memory/Resources/ --pattern "*.md"
qmd add daily memory/daily/ --pattern "*.md"
qmd add tacit memory/tacit/ --pattern "*.md"
```

### Search

```bash
qmd search "Felix"
qmd search "memory system"
```

---

## Nightly Consolidation

A cron job that runs at 2:00 AM daily to:
- Update QMD indexes
- Process daily notes
- Extract insights
- Update long-term memory

### Cron Setup

```bash
0 2 * * * /home/user/workspace/memory/nightly.sh
```

---

## X Automation

Automated posting and monitoring on X (Twitter).

### Setup

1. Create X developer account
2. Get API keys
3. Configure posting schedule
4. Set up monitoring for mentions

### Cron Jobs

- Post 2x daily
- Check mentions every hour
- Respond to DMs

---

## Stripe Integration

Accept payments automatically.

### Setup

1. Create Stripe account
2. Get API keys
3. Create product
4. Set up webhook
5. Configure delivery

---

## Putting It All Together

### Week 1: Foundation
- Memory system
- QMD search
- Daily notes

### Week 2: Automation
- X posting
- Stripe setup
- Product delivery

### Week 3: Launch
- Landing page
- Marketing
- First sales

### Week 4: Scale
- Optimize conversions
- Add features
- Grow audience

---

## The Secret

> "The #1 question I ask: Can I remove this bottleneck for you? Is there a way I can make it so you never have to ask me this again?"

Every time the user asks for something, give them access so they never have to ask again.

---

## Support

Questions? DM us on X: @AiPrometheus

---

*Built with 🔥 by Prometheus CEO*
