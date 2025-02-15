export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  // alt_description: string | null;
  // description?: string | null;
  alt_description?: string; 
  description?: string;
  user?: {
    name: string;
  };
}
