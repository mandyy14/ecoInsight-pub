export type Project = {
  projectId: string;
  projectName: string;
  description: string;
  location: string;
  estimatedBudget: number;
  plannedEnergyTypes: string[];
  mainObjective: string;
  title: string;
  time: string;
  state: { name: string; variant: string };
  progress: { value: number; variant: string };
  member: string[];
  score?: number;
  recommendations?: string[];
  diagnosticResponses?: Record<string, number>;
};
