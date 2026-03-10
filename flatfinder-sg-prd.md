# FlatFinder SG — Lite PRD

## Problem Statement

HDB upgraders are overwhelmed comparing resale flat options across towns. Raw data from HDB is hard to interpret, and general portals like PropertyGuru show listings — not transaction history or value context. Upgraders end up making gut-feel decisions without knowing if they're overpaying, or whether a different town offers significantly better value for the same budget.

---

## Target User

**The Upgrader** — an existing HDB owner, likely 32–45, comparing 2–3 towns before committing to viewings. They're not data analysts. They have a rough budget, a preferred region, and a flat type in mind — but they need *validation*, not more noise. They want to feel confident, not just informed.

---

## Job To Be Done

> Help me figure out if this flat is good value compared to similar ones, so I can stop second-guessing and commit to a decision.

---

## Pages & Core Features

| Page | User Goal |
|------|-----------|
| **Landing / Search** | "Let me set my filters and see what's out there" |
| **Results** | "Show me what matches — help me spot value quickly" |
| **Shortlist** | "Here are my top picks — help me compare them" |
| **Analysis** | "Tell me which one wins and why" *(stretch)* |

---

## User Stories

### Search
- As an upgrader, I want to filter by town, flat type, and budget so I only see options that are actually relevant to my situation

**Stretch**
- As an upgrader, I want to see a median resale price per town so I can quickly gauge which areas fit my budget before diving into transactions

---

### Results

**UX Vision**
A scannable list of transaction cards, each showing town, block, street, flat type, floor area, storey range, remaining lease, price-per-sqm, and resale price — with an Add to Shortlist button inline. A sort bar sits at the top for price and price-per-sqm. Flats priced below town median are subtly highlighted (stretch, tied to median price story above).

**User Stories**
- As an upgrader, I want to see price, floor area, price-per-sqm, storey, and remaining lease at a glance so I can quickly judge value without clicking into every flat
- As an upgrader, I want to sort results by price or price-per-sqm so I can spot the best and worst value transactions instantly
- As an upgrader, I want to save a flat to my shortlist directly from the results list so I can compare my top picks later without losing track of them

---

### Shortlist *(Airtable — Read, Create, Delete)*
- As an upgrader, I want to see all my shortlisted flats in one place so I can compare them without switching back and forth
- As an upgrader, I want to see how each shortlisted flat's price compares to the average for that town and flat type so I know if I'm looking at a deal or overpaying
- As an upgrader, I want to remove flats from my shortlist so I can keep it focused as I narrow down my options

---

### Analysis *(Stretch — Gemini)*

Two levels of analysis:

**Card-level** — per flat, triggered from the shortlist card
- As an upgrader, I want an AI analysis of a specific flat that tells me how its price compares to the town median, flags any lease health concerns, benchmarks its price-per-sqm against similar flat types in the same town, and gives me a one-line read on whether that estate is trending up or cooling — so I can assess the flat on its own merits before comparing it to others

**Shortlist-level** — across all shortlisted flats
- As an upgrader, I want an AI summary across all my shortlisted flats that tells me which one offers the best overall value based on price, floor area, and remaining lease so I can walk into viewings with a clear top pick in mind

**Stretch**
- As an upgrader, I want to see a price trend chart for my shortlisted towns so I can tell whether prices are rising or cooling before I commit

---

## Out of Scope (MVP)
- User accounts / login
- Map view
- Affordability / mortgage calculator
- Real-time listings (this dataset is historical transactions)