export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  // alt_description: string | null;
  // description?: string | null;
  alt_description?: string; // ✅ Тепер тип `string | undefined`, що не викличе конфлікту
  description?: string;
  user?: {
    name: string;
  };
}
