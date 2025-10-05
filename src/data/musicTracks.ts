import { MusicTrack } from '../types';

export const musicTracks: MusicTrack[] = [
  {
    id: '1',
    title: 'Rainy',
    image: process.env.PUBLIC_URL + '/rainy-image.jpg',
    audio: process.env.PUBLIC_URL + '/rainy.mp3',
    category: 'free_bgm',
    content: [
      '//しっとりとした静けさをイメージした雨の日の午後にぴったりな楽曲です。',
      '//作業用BGMとしてもお楽しみいただけます。',
      '#癒し',
      '#自然',
      '#静か',
      '#インスト',
      '#作業用BGM',
    ],
    order: 1,
  },
  {
    id: '2',
    title: '入道雲',
    image: process.env.PUBLIC_URL + '/Image_fx (6).jpg', // 仮の画像
    audio: process.env.PUBLIC_URL + '/入道雲.mp3', // 仮の音声
    category: 'free_bgm',
    content: [
      '//空を見上げてください。立ち込める入道雲が夏を感じさせます。',
      '//空高く湧き上がる入道雲と夏の暑さを想像してください。',
      '#夏',
      '#空',
      '#壮大',
    ],
    order: 2,
  },
  {
    id: '3',
    title: '確率',
    image: process.env.PUBLIC_URL + '/確率2.PNG',
    audio: process.env.PUBLIC_URL + '/確率.mp3',
    category: 'original_song',
    content: [
      '//偶然の出会いが運命を動かす瞬間を描いた歌です。',
      '//日常に小さな奇跡を運んでくれます。',
      '#ポップ',
      '#運命',
      '#出会い',
    ],
    lyrics: `ここに「確率」の歌詞が入ります。
    (1番)
    ダミーの歌詞です。
    ここに歌詞が続きます。
    
    (2番)
    ダミーの歌詞です。
    ここに歌詞が続きます.`,
    order: 3,
  },
  {
    id: '4',
    title: '猫の瞳',
    image: process.env.PUBLIC_URL + '/猫の瞳2.PNG',
    audio: process.env.PUBLIC_URL + '/猫の瞳.mp3',
    category: 'original_song',
    content: [
      '//「深い夜の雨が上がったら、あの人に会いに行く。」',
      '//その小さな体は雨上がりの街を駆け出します。',
      '#夜',
      '#猫',
      '#ストーリー',
    ],
    lyrics: `ここに「猫の瞳」の歌詞が入ります。
    (1番)
    ダミーの歌詞です。
    ここに歌詞が続きます。
    
    (2番)
    ダミーの歌詞です。
    ここに歌詞が続きます.`,
    order: 4,
  },
  {
    id: '5',
    title: '小さな隣人',
    image: process.env.PUBLIC_URL + '/小さな隣人2.PNG',
    audio: process.env.PUBLIC_URL + '/小さな隣人.mp3',
    category: 'original_song',
    content: [
      '//「少し寂しい夜もあの子のことを思い出すと気持ちが和らぐの。」',
      '//優しい言葉とメロディーが心に寄り添います。',
      '#優しい',
      '#アコースティック',
      '#夜',
    ],
    lyrics: `ここに「小さな隣人」の歌詞が入ります。
    (1番)
    ダミーの歌詞です。
    ここに歌詞が続きます。
    
    (2番)
    ダミーの歌詞です。
    ここに歌詞が続きます.`,
    order: 5,
  },
  {
    id: '6',
    title: 'Parade',
    image: process.env.PUBLIC_URL + '/Image_fx15.jpg', // 仮の画像
    audio: process.env.PUBLIC_URL + '/Parade.mp3', // 仮の音声
    category: 'free_bgm',
    content: [
      '//軽やかな曲調は明日への第一歩',
      '//そのステップはパレードを連想させます',
      '#パレード',
      '#明るい',
      '#インスト',
    ],
    order: 6,
  },
  {
    id: '7',
    title: 'twinkle',
    image: process.env.PUBLIC_URL + '/twinkle.jpg',
    audio: process.env.PUBLIC_URL + '/twinkle.mp3',
    category: 'free_bgm',
    content: [
      '//フリーBGM、作業用BGMとしてお使いください。',
      '//穏やかな夜には星々が輝いています。',
      '#自然',
      '#夜',
      '#静か',
      '#インスト',
      '#作業用BGM',
    ],
    order: 7,
  },
];
