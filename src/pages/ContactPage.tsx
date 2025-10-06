import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const ContactPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          お問い合わせ
        </Typography>
        <Typography variant="body1" paragraph>
          ご質問やご意見がございましたら、以下のメールアドレスまでお気軽にお問い合わせください。
        </Typography>
        <Typography variant="body1" paragraph>
          メールアドレス: ume.necocha2510w@gmail.com
        </Typography>
        <Typography variant="body1" paragraph>
          （このページは現在開発中です。後ほどフォームなどを追加する予定です。）
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
          プライバシーポリシー
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          掲載日: 2025年10月6日<br />
          最終改定日: 2025年10月6日
        </Typography>

        

        

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          個人情報の利用目的
        </Typography>
        <Typography variant="body1" paragraph>
          当サイトでは、お問い合わせフォームを通じて利用者の個人情報（お名前、メールアドレスなど）を取得いたします。
          取得した個人情報は、お問い合わせに対する回答にのみ利用し、それ以外の目的には使用いたしません。
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          個人情報の第三者への開示・提供の禁止
        </Typography>
        <Typography variant="body1" paragraph>
          当サイトは、利用者よりお預かりした個人情報を適切に管理し、ご本人の同意がある場合、または次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
          <ul>
            <li>法令等への協力のため開示が必要となる場合</li>
          </ul>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          ご本人の照会
        </Typography>
        <Typography variant="body1" paragraph>
          利用者がご本人の個人情報の開示、訂正、削除などをご希望される場合には、ご本人であることを確認の上、速やかに対応させていただきます。
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          法令、規範の遵守と見直し
        </Typography>
        <Typography variant="body1" paragraph>
          当サイトは、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          リンクについて
        </Typography>
        <Typography variant="body1" paragraph>
          当サイトはリンクフリーです。リンクを貼る際の許可は不要です。
          ただし、当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        </Typography>
      </Paper>
    </Container>
  );
};

export default ContactPage;