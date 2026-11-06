# AI Text Analyzer

A TypeScript and Node.js application that uses Large Language Models (LLMs) through the Groq API to analyze text and generate meaningful insights.

This project is part of my **Applied AI Engineering learning journey**, where I build practical AI-powered applications and explore the engineering concepts behind reliable LLM integrations.

The application demonstrates prompt engineering, LLM API integration, structured outputs, and runtime validation of AI-generated responses.

## Features

- Text summarization
- Sentiment analysis
- Main topic identification
- Key insights extraction
- Zero-shot and few-shot prompt engineering
- Configurable prompt strategies
- LLM structured JSON responses
- JSON parsing and validation using Zod
- Groq API integration
- Environment-based API configuration
- Error handling for API requests and invalid responses

## Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **LLM Provider:** Groq API
- **LLM SDK:** Groq TypeScript SDK
- **Validation:** Zod
- **Environment Configuration:** dotenv
- **Development Runner:** tsx

## How It Works

The application accepts text through the command line and sends it to an LLM using the Groq Chat Completions API.

It uses three analysis approaches:

### 1. Zero-Shot Prompting

The model receives instructions without any examples. It uses those instructions to analyze the supplied text.

### 2. Few-Shot Prompting

The model receives instructions along with examples demonstrating the expected analysis format.

This helps evaluate how examples influence the consistency and structure of model responses.

### 3. Structured Output

The application requests a machine-readable JSON response using Groq's JSON mode.

The returned response is:

1. Received from the LLM.
2. Parsed using `JSON.parse()`.
3. Validated against a Zod schema.
4. Returned to the application only if it passes validation.

This approach helps make AI-generated data more predictable and safer to consume in backend applications.

## Project Structure

```text
day-02-llm-text-analyzer/
│
├── src/
│   ├── index.ts
│   ├── prompts.ts
│   └── schema.ts
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ToqeerAfzal/ai-engineering-journey.git

cd ai-engineering-journey/day-02-llm-text-analyzer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=your_supported_groq_model
```

You can obtain your API key from the [Groq Console](https://console.groq.com/).

Replace the placeholder values with your API key and a model currently supported by your Groq account.

**Security note:** Never commit your `.env` file or expose your API key. The repository includes an `.env.example` file for configuration reference.

### 4. Run the Application

```bash
npm run dev -- "AI is transforming software development."
```

You can also provide different text:

```bash
npm run dev -- "Customer satisfaction has improved because our application is faster and easier to use."
```

## Example Structured Output

The structured analysis returns a JSON object similar to this:

```json
{
  "summary": "The text discusses how AI is transforming software development.",
  "sentiment": "positive",
  "topics": [
    "Artificial Intelligence",
    "Software Development"
  ],
  "insights": [
    "AI is becoming increasingly important in software engineering."
  ]
}
```

*Note: This is an illustrative example. Actual responses are generated dynamically by the selected LLM.*

## Structured Output Validation

The application uses Zod to validate the structure of AI-generated JSON responses.

The `AnalysisSchema` defines the expected response:

| Field | Validation |
|---|---|
| `summary` | Non-empty string |
| `sentiment` | `positive`, `negative`, or `neutral` |
| `topics` | Array of non-empty strings, maximum 3 |
| `insights` | Array of non-empty strings, between 1 and 3 |

The schema also rejects unexpected properties using strict object validation.

This ensures that downstream application logic receives data matching the expected structure rather than blindly trusting an LLM response.

## Learning Progress

### Day 02: First LLM-Powered Application

**What I implemented**

- Connected a TypeScript and Node.js application to the Groq API.
- Created an LLM-powered text analyzer.
- Implemented text summarization and sentiment analysis.
- Extracted topics and key insights from text.
- Configured API credentials using environment variables.
- Added asynchronous API request handling and error handling.

**Key learnings**

- Understanding LLM APIs and chat completions.
- Working with system and user messages.
- Integrating external AI services into a backend application.
- Managing API credentials securely.
- Handling asynchronous API responses.

### Day 03: Prompt Engineering

**What I implemented**

- Created reusable zero-shot and few-shot prompt templates.
- Added prompt selection to the text analyzer.
- Compared outputs from both prompting approaches.
- Explored the impact of different temperature settings.
- Tested a prompt-injection example.

**Experiments**

| Experiment | Observation |
|---|---|
| Zero-shot prompting | Produced direct responses without examples. |
| Few-shot prompting | Helped the model follow the demonstrated response format more consistently. |
| Temperature 0.2 | Produced more consistent and less varied responses. |
| Temperature 0.8 | Produced more variation in wording and creativity. |
| Prompt injection | Explored how malicious instructions embedded in user input can influence model behavior. |

*Note: Temperature observations are experimental findings, not a guarantee of identical behavior across models or inputs. The current standard analysis implementation uses a temperature of 0.8.*

**Key learnings**

- System prompts define the model's intended behavior.
- Few-shot examples demonstrate the expected output format.
- Temperature influences response variation.
- Prompt injection is an important LLM security concern.
- Prompt quality should be evaluated through practical experiments.

### Day 04: Structured Outputs and Validation

**What I implemented**

- Added structured JSON output to the LLM application.
- Used Groq JSON mode for machine-readable responses.
- Created a Zod schema to define the expected response structure.
- Parsed LLM-generated JSON using `JSON.parse()`.
- Validated generated data using Zod's `safeParse()`.
- Added error handling for empty and invalid responses.
- Used strict schema validation to reject unexpected properties.

**Key learnings**

- LLM responses should not always be treated as plain text.
- JSON mode helps generate machine-readable responses.
- JSON parsing converts response strings into JavaScript objects.
- Zod validates the structure and types of AI-generated data.
- Runtime validation is important when integrating LLMs into backend systems.
- Structured outputs make AI integrations more predictable and reliable.

## Future Improvements

- Streaming LLM responses.
- Configurable model parameters.
- Automated unit and integration tests.
- Stronger input validation and prompt-injection defenses.
- Support for multiple LLM providers.
- REST API interface.
- Token usage and model performance tracking.
- Logging and monitoring.

## Learning Journey

This project is part of my six-month **Applied AI Engineering roadmap**, focused on developing practical skills for building production-ready AI-powered applications.

The objective is to combine my existing full-stack software engineering experience with deeper knowledge of LLM integration, AI application architecture, and reliable backend systems.

**Repository:** [AI Engineering Journey](https://github.com/ToqeerAfzal/ai-engineering-journey)

---

Built as part of my practical journey into Applied AI Engineering.