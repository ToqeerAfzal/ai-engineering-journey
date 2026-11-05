
# AI Text Analyzer

A TypeScript and Node.js application that uses Large Language Models (LLMs) through the Groq API to analyze text and generate meaningful insights.

This project is part of my Applied AI Engineering learning journey, focused on building practical AI-powered applications using modern backend technologies.

## Features

- Text summarization
- Sentiment analysis
- Main topic identification
- Key insights extraction
- LLM response handling
- Model and token usage information
- Environment-based API configuration
- Error handling for API requests

## Tech Stack

- Node.js
- TypeScript
- Groq API
- Groq TypeScript SDK
- dotenv
- tsx

## How It Works

The application accepts text through the command line and sends it to an LLM using the Groq chat completion API.

The model receives two messages:

1. **System message:** Defines the AI's role and analysis instructions.
2. **User message:** Contains the text that needs to be analyzed.

The application processes the model response and displays the analysis along with model and token usage information.

## Project Structure

```text
day-02-llm-text-analyzer/
│
├── src/
│   └── index.ts
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ToqeerAfzal/ai-engineering-journey.git

cd ai-engineering-journey/day-02-llm-text-analyzer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=your_supported_groq_model
```

Replace the placeholder values with your own credentials and a model currently available to your Groq account.

**Never commit your `.env` file or expose your API key.**

### 4. Run the application

```bash
npm run dev -- "AI is transforming software development."
```

## Example Output

The application returns:

- Summary
- Sentiment
- Main topics
- Key insights
- Model information
- Token usage

Actual analysis is generated dynamically by the selected LLM.

## What I Learned

Through this project, I explored:

- Connecting a TypeScript backend to an LLM API.
- Understanding system and user prompts.
- Working with chat completion APIs.
- Processing LLM responses.
- Managing API credentials securely using environment variables.
- Handling asynchronous API requests and errors.
- Understanding model information and token usage.

## Future Improvements

- Structured JSON responses using Zod.
- Input validation.
- Support for multiple LLM providers.
- Streaming responses.
- Automated tests.
- A REST API interface.

## Learning Journey

This project is part of my six-month Applied AI Engineering roadmap.

**Day 02:** First LLM-powered application using TypeScript, Node.js and Groq.

---

Built as part of my practical journey into Applied AI Engineering.


## Day 3: Prompt Engineering

### What I implemented

- Created reusable zero-shot and few-shot prompt templates.
- Added prompt selection to the text analyzer.
- Compared outputs from both prompting approaches.
- Experimented with different temperature values.
- Tested a prompt-injection example.

### Experiments

| Experiment | What I observed |
|---|---|
| Zero-shot prompting | The answers are stright but something lenghty |
| Few-shot prompting | Answer is conscise but requires best exxamples |
| Temperature 0.2 | Not too creative but fills the purpose |
| Temperature 0.8 | A lot of creativity, really nice spreading of words |
| Prompt injection | This is really helpful rather than doing one thing again and again |

### Key Learnings

- System prompts define the model's intended behavior.
- Few-shot examples demonstrate the expected output.
- Temperature affects output variation.
- Prompt injection is a security concern.
- Prompt quality should be evaluated through experiments.