export interface SelectorProps {
  tags: string[];
  isLoadingTags: boolean;
}

export interface ActionProps {
  getTags: () => any;
}
