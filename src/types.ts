export interface BlogPost {
  id: string;
  date: string;
  title: string;
  image: string;
  content: string[];
}

export interface MusicTrack {
  id: string;
  title: string;
  image: string;
  audio: string;
  category: 'free_bgm' | 'original_song';
  content: string[];
  order: number;
  lyrics?: string;
}
