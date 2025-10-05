import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const TermsPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          利用規約と免責事項
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
          利用規約
        </Typography>
        <Typography variant="body1" paragraph>
          umeが提供するフリーBGM/作業用BGMは、以下の利用規約に従ってご利用いただけます。 AIによる自動生成音源であり、著作権は発生せず自由利用できますが当方指定の禁止事項にご注意ください。
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          1. 利用範囲
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>個人利用、商用利用を問わず、無料でご利用いただけます。</li>
            <li>YouTube、Twitchなどの動画配信、ライブ配信、ゲーム、アプリ、ポッドキャスト、店舗BGMなど、様々なコンテンツのBGMとしてご利用いただけます。</li>
            <li>加工（ループ、フェードイン・アウト、音量調整、他の音源とのミックスなど）は自由に行っていただけます。</li>
          </ul>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          2. 禁止事項
        </Typography>
        <Typography variant="body1" paragraph>
          <ul>
            <li>音源の二次配布、販売、自作発言は禁止します。</li>
            <li>公序良俗に反するコンテンツ、違法なコンテンツでの利用は禁止します。</li>
            <li>特定の個人や団体を誹謗中傷する目的での利用は禁止します。</li>
          </ul>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom>
          3. 著作権
        </Typography>
        <Typography variant="body1" paragraph>
          フリーBGM/作業用BGMの著作権については当方が本サービスで提供する楽曲について、著作権は発生しません。利用者は、当方の定めたルールのもと楽曲を自由に利用できます。オリジナル音源（歌詞が含まれる音源）については音源の著作権はumeに帰属します。クレジット表記は任意ですが、記載していただけると大変励みになります。（例: BGM: ume）
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          免責事項
        </Typography>
        <Typography variant="body1" paragraph>
          umeは、本サイトで提供する音源の利用によって生じたいかなる損害についても一切の責任を負いません。
          利用者の責任においてご利用ください。
        </Typography>
        <Typography variant="body1" paragraph>
          本規約は予告なく変更される場合があります。変更後の規約は、本サイトに掲載された時点から効力を生じるものとします。
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsPage;
