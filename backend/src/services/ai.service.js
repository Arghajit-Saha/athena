const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const resumeReportSchema = z.object({
    matchScore: z.number().description("A score between 0 and 100 indication how well the candidate's profile matches the job description"),
    technicalQuestions: z.array(z.object({
        questions: z.string().description("Technical questions which can be asked in an interview"),
        intention: z.string().description("The intention behind asking this question"),
        answer: z.string().description("How to tackle this question, what points to cover, what should be the approach")
    })).description("Technical questions which can be asked in an interview along with their intentions and how to approach such questions"),
    behavorialQuestions: z.array(z.object({
        questions: z.string().description("Behavorial questions which can be asked in an interview"),
        intention: z.string().description("The intention behind asking this question"),
        answer: z.string().description("How to tackle this question, what points to cover, what should be the approach")
    })).description("Behavorial questions which can be asked in an interview along with their intentions and how to approach such questions"),
    skillGap: z.array(z.object({
        skill: z.string().description("The skill which the candidate is lacking according to his resume/description"),
        severity: z.enum(["low", "moderate", "high"]).description('The severity of this skill gap according to the job description demand')
    })).description("List of all skill gaps in the candidate's profile along with tehir severity"),
    preparationPlan: z.array(z.object({
        day: z.number().description("The day number in the preparation plan strting from 1"),
        focus: z.string().description("The main focus of this day to follow the preparation plan"),
        tasks: z.array(z.string()).description("List of the tasks to be done on this day to follow the preparation plan")
    })).description("A day-wise plan for the candidate to follow in order to improve the match with the job description")
});

async function generateResumeReport({resume, selfDescription, jobDescription}) {
    const prompt = `Generate a resume report for a candidate with teh following details: 
        Resume: ${resume}
        Self Descripton: ${selfDescription}
        Job Description: ${jobDescription}
    `;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: zodToJsonSchema(resumeReportSchema)
        }
    });

    console.log(response.text);
}

async function invokeGemini() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello Gemini",
  });

  console.log(response.text);
}

module.exports = invokeGemini;