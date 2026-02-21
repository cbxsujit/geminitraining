export interface Step {
  title: string;
  instruction: string;
  referenceUrl?: string;
}

export interface PromptCard {
  category: string;
  referenceUrl?: string;
  prompts: {
    text: string;
    helpsWith: string;
    outcome: string;
  }[];
}

export interface Tool {
  name: string;
  tagline: string;
  description: string;
  whenToUse: string;
  example: string;
  samplePrompt: string;
}

export interface MarketingSubsection {
  title: string;
  prompt: string;
  tip: string;
  useCase: string;
  referenceUrl?: string;
}

export interface VisualMarketingPrompt {
  industry: string;
  imagePrompt: string;
  videoPrompt: string;
}

export interface HabitDay {
  day: number;
  focus: string;
  task: string;
}

export interface FAQ {
  question: string;
  answer: string;
  referenceUrl?: string;
}

export interface Exercise {
  id: string;
  title: string;
  goal: string;
  promptStarter: string;
  steps: string[];
  expectedOutcome: string;
  reflectionQuestion: string;
  referenceUrl?: string;
}

export interface IndustryPrompt {
  label: string;
  text: string;
}

export interface IndustryPack {
  id: string;
  category: string;
  icon: string;
  prompts: IndustryPrompt[];
}