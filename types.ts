export enum AppStage {
  PROPOSAL = 'PROPOSAL',
  GALLERY = 'GALLERY'
}

export interface LoveBit {
  id: number;
  placeholder: string;
  correctCode: string;
  hint: string;
}