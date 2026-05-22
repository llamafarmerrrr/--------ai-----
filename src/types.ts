export interface PainPoint {
  id: string;
  category: string;
  title: string;
  description: string;
  impact: string;
}

export interface CoreCapability {
  id: string;
  title: string;
  description: string;
  features: string[];
  metrics?: string;
  highlightText?: string;
}

export interface ScenarioSolution {
  id: string;
  name: string;
  role: string;
  challenge: string;
  strategy: string;
  results: {
    label: string;
    value: string;
    desc: string;
  }[];
}

export interface TechnicalFeature {
  id: string;
  title: string;
  badge: string;
  description: string;
  details: string[];
}

export interface LegalComplianceItem {
  id: string;
  regulation: string;
  clause: string;
  mappingDesc: string;
  ratingLabel: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
