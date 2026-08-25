/* Parasite Notify — i18n engine
   Supported languages: ja, en, ko, zh
   Detects navigator.language on first visit, remembers manual choice in localStorage. */

const PN_TRANSLATIONS = {
en: {
  nav:{products:"Products",company:"Company",technology:"Technology",news:"News",contact:"Contact",viewProducts:"View Products"},
  footer:{tagline:"An independent technology company building HACO, KALINA, and FARO.",productsHeading:"Products",companyHeading:"Company",legalHeading:"Legal",about:"About",technology:"Technology",news:"News",privacy:"Privacy Policy",terms:"Terms",contact:"Contact",newsComingSoon:"News — coming soon"},
  home:{
    eyebrow:"Independent Technology Company",
    heroTitle1:"We build products for the way the world moves.",
    heroTitle2:"Not one product. A company that makes them.",
    heroDesc:"Parasite Notify designs, builds, and operates independent products across commerce, automotive intelligence, and software creation.",
    exploreProducts:"Explore Products",aboutCompany:"About the company",
    productsTitle:"Three products. One company.",
    productsDesc:"Each product is built for a different problem, with its own team, design language, and roadmap — unified by how Parasite Notify approaches building things.",
    hacoCat:"Cross-border Commerce",hacoTileDesc:"Buy from Chinese marketplaces and get it shipped home, without the language and logistics friction.",hacoExplore:"Explore HACO →",
    kalinaCat:"Automotive Intelligence",kalinaTileDesc:"Data and analysis for people deciding whether a used car is actually worth buying.",kalinaExplore:"Explore KALINA →",
    faroCat:"AI Software Creation",faroTileDesc:"Turn an idea into working software, with AI handling the build so you can focus on the idea.",faroExplore:"Explore FARO →",
    hacoShowcaseLabel:"HACO — Cross-border Commerce",hacoShowcaseTitle:"China shopping, simplified.",hacoShowcaseDesc:"Send HACO a product link from any Chinese marketplace. It handles the order, the customs paperwork, and the shipping — and keeps you updated the whole way.",
    kalinaShowcaseLabel:"KALINA — Automotive Intelligence",kalinaShowcaseTitle:"Intelligence for better car decisions.",kalinaShowcaseDesc:"KALINA reads market data, condition history, and pricing trends to tell you not just what a car is worth, but whether it's the right one to buy.",
    faroShowcaseLabel:"FARO — AI Software Creation",faroShowcaseTitle:"From idea to software.",faroShowcaseDesc:"Describe what you want to build. FARO plans it, builds it, and lets you review and iterate — a real development process, not a chat window.",
    philosophyEyebrow:"Philosophy",philosophyTitle:"We build.",
    philosophyDesc:"We don't build products to fit an existing category. We build the ones we think should exist, and we ship them ourselves — from the first line of code to the customer who uses it. Every product carries its own identity. What they share is how we make decisions: slowly on the things that matter, fast on everything else.",
    techEyebrow:"Technology",techTitle:"Technology behind the products.",techDesc:"Not a stack we're proud of for its own sake — the parts that make it possible to ship products like these.",
    tech1Title:"AI & Machine Learning",tech1Desc:"Powers KALINA's scoring and FARO's build process.",
    tech2Title:"Data",tech2Desc:"Market and pricing data pipelines that stay current.",
    tech3Title:"Cloud Infrastructure",tech3Desc:"Scales each product independently, on its own load.",
    tech4Title:"Automation",tech4Desc:"Removes manual steps from order and build workflows.",
    tech5Title:"Software Engineering",tech5Desc:"Small teams, direct ownership, fast iteration.",
    tech6Title:"Security",tech6Desc:"Customer and payment data handled with care by design.",
    ecosystemEyebrow:"Ecosystem",ecosystemTitle:"One company. Multiple products.",ecosystemCaption:"PARASITE NOTIFY — parent to every product above",
    companyEyebrow:"Company",companyTitle:"About Parasite Notify",
    companyP1:"Parasite Notify is a technology company that designs and operates its own products, rather than building for other companies. We start with a problem we think is worth solving properly, and we stay with it — from the first prototype through years of iteration.",
    companyP2:"We're early. Our products are still growing, and we'd rather say that plainly than pretend otherwise.",
    companyP3:"We work in small, focused teams that own their product end to end. Decisions about direction move slowly and carefully; decisions about implementation move fast. We'd rather ship something small and real than something large and imaginary.",
    contactEyebrow:"Contact",contactTitle:"Have an idea?<br>Let's build something.",contactDesc:"Reach out about a product, a partnership, or working with us."
  },
  haco:{
    cat:"Cross-border Commerce",title:"China shopping, simplified.",
    desc:"Send HACO a product link from any Chinese marketplace. We place the order, inspect it, clear customs, and ship it to your door.",
    ctaStart:"Start an order",ctaHow:"How it works",
    whatEyebrow:"What is HACO?",whatTitle:"A buying agent that speaks the language you don't.",
    whatDesc:"Chinese marketplaces have the products, not the access. HACO is the layer in between: it buys, inspects, consolidates, and ships — so you deal with one order, not five different systems.",
    howEyebrow:"How it works",howTitle:"Four steps, start to finish.",
    step1Title:"Send the link",step1Desc:"Paste any product URL from a supported marketplace.",
    step2Title:"We buy it",step2Desc:"HACO places the order and pays the seller directly.",
    step3Title:"Inspection",step3Desc:"Your item is checked before it leaves the warehouse.",
    step4Title:"Delivered",step4Desc:"Consolidated shipping to your address, with tracking.",
    featEyebrow:"Features",featTitle:"Built around the parts that usually go wrong.",
    feat1Title:"Photo inspection",feat1Desc:"Every item is photographed before shipping so you know what you're getting.",
    feat2Title:"Order consolidation",feat2Desc:"Combine multiple purchases into a single shipment to cut cost.",
    feat3Title:"Status updates",feat3Desc:"Every order stage is reported directly, no need to check in.",
    feat4Title:"No personal transfers",feat4Desc:"Pay through the platform — never to a personal account.",
    pricingEyebrow:"Pricing",pricingTitle:"Simple, per-order pricing.",
    price1Title:"Service fee",price1Desc:"Per item purchased on your behalf",price1Value:"from ¥300",
    price2Title:"Inspection",price2Desc:"Photo check before shipment",price2Value:"included",
    price3Title:"Shipping",price3Desc:"Calculated by weight and destination",price3Value:"at checkout",
    faqEyebrow:"FAQ",faqTitle:"Common questions.",
    faq1Q:"What marketplaces does HACO support?",faq1A:"The major Chinese marketplaces — full list shown at checkout.",
    faq2Q:"How long does shipping take?",faq2A:"Typically 7–14 days depending on destination and consolidation.",
    faq3Q:"What if an item arrives damaged?",faq3A:"Inspection photos are kept on file to support any claim.",
    ctaEyebrow:"Get started",ctaTitle:"Send your first link.",ctaDesc:"Create an account and place your first order in a few minutes.",ctaBtn:"Start an order"
  },
  kalina:{
    cat:"Automotive Intelligence",title:"Intelligence for better car decisions.",
    desc:"KALINA reads pricing, condition, and market data to tell you whether a used car is actually worth buying — not just what it costs.",
    ctaCheck:"Check a listing",ctaHow:"How KALINA works",
    problemEyebrow:"The problem",problemTitle:"Used car listings all look the same.",
    col1Title:"What you see",col1Desc:"A price, a photo set, and a mileage number — no sense of whether that price is fair or that car is reliable.",
    col2Title:"What you need",col2Desc:"Comparable market pricing, condition signals, and a straight answer on whether this specific car is worth the ask.",
    howEyebrow:"How KALINA works",howTitle:"Data in, a decision out.",howDesc:"KALINA combines three signals into one score, so the analysis is visible, not a black box.",
    factor1Label:"Market data",factor1Title:"Comparable pricing",factor1Desc:"Thousands of similar listings, tracked over time, set the fair-price range.",
    factor2Label:"AI analysis",factor2Title:"Condition & history",factor2Desc:"Photos, listing text, and history reports are read for risk signals.",
    factor3Label:"Kalina Score",factor3Title:"One number",factor3Desc:"Price, condition, and market position combined into a single 0–10 score.",
    prefEyebrow:"User preferences",prefTitle:"Weighted to what matters to you.",
    prefDesc:"Prioritizing reliability over price, or willing to trade condition for a deal — KALINA's decision support adjusts to the trade-offs you actually care about, not a generic average.",
    ctaEyebrow:"Get started",ctaTitle:"Paste a listing, get a score.",ctaDesc:"See the fair price range and Kalina Score before you commit to a viewing.",ctaBtn:"Check a listing"
  },
  faro:{
    cat:"AI Software Creation",title:"From idea to software.",
    desc:"Describe what you want to build. FARO plans it, writes it, and lets you review and iterate — a real development process, not a chat window.",
    ctaStart:"Start building",ctaHow:"See the process",
    whatEyebrow:"What is FARO?",whatTitle:"An AI product engineer, not an assistant.",
    whatDesc:"FARO doesn't just answer questions about code — it plans the work, builds the software, and hands it back for you to review, change, and ship.",
    howEyebrow:"How it works",howTitle:"A process, not a prompt.",
    step1Title:"Describe",step1Desc:"Explain the idea in plain language.",
    step2Title:"AI builds",step2Desc:"FARO plans and writes the software.",
    step3Title:"Review",step3Desc:"See exactly what changed and why.",
    step4Title:"Iterate",step4Desc:"Ask for changes in the same language.",
    step5Title:"Export",step5Desc:"Take the code with you, no lock-in.",
    step6Title:"Deploy",step6Desc:"Ship it directly from FARO when ready.",
    ctaEyebrow:"Get started",ctaTitle:"Describe your first idea.",ctaDesc:"FARO turns it into a working build you can review in minutes.",ctaBtn:"Start building"
  }
},
ja: {
  nav:{products:"プロダクト",company:"会社情報",technology:"テクノロジー",news:"ニュース",contact:"お問い合わせ",viewProducts:"プロダクトを見る"},
  footer:{tagline:"HACO、KALINA、FAROを手がける独立系テクノロジーカンパニー。",productsHeading:"プロダクト",companyHeading:"会社情報",legalHeading:"法的情報",about:"会社概要",technology:"テクノロジー",news:"ニュース",privacy:"プライバシーポリシー",terms:"利用規約",contact:"お問い合わせ",newsComingSoon:"ニュース — 近日公開"},
  home:{
    eyebrow:"独立系テクノロジーカンパニー",
    heroTitle1:"世界の動き方に合わせて、プロダクトをつくる。",
    heroTitle2:"ひとつのプロダクトの会社ではない。プロダクトを生み出し続ける会社だ。",
    heroDesc:"Parasite Notifyは、コマース、自動車インテリジェンス、ソフトウェア開発という異なる領域で、独立したプロダクトを設計・開発・運営しています。",
    exploreProducts:"プロダクトを見る",aboutCompany:"会社について知る",
    productsTitle:"3つのプロダクト、ひとつの会社。",
    productsDesc:"それぞれのプロダクトは異なる課題のために生まれ、専属チーム・デザイン言語・ロードマップを持っています。共通しているのは、Parasite Notifyとしてのものづくりへの向き合い方です。",
    hacoCat:"越境コマース",hacoTileDesc:"言語や物流の壁を気にせず、中国のECサイトで買い物をして自宅まで届けられます。",hacoExplore:"HACOを見る →",
    kalinaCat:"自動車インテリジェンス",kalinaTileDesc:"その中古車が本当に買う価値があるのか、データと分析で判断をサポートします。",kalinaExplore:"KALINAを見る →",
    faroCat:"AIソフトウェア開発",faroTileDesc:"アイデアを、動くソフトウェアに。開発はAIが担うから、あなたはアイデアに集中できます。",faroExplore:"FAROを見る →",
    hacoShowcaseLabel:"HACO — 越境コマース",hacoShowcaseTitle:"中国ショッピングを、もっとシンプルに。",hacoShowcaseDesc:"中国のECサイトの商品リンクをHACOに送るだけ。注文から通関手続き、配送までをすべて代行し、進捗も逐一お知らせします。",
    kalinaShowcaseLabel:"KALINA — 自動車インテリジェンス",kalinaShowcaseTitle:"より良い車選びのための、インテリジェンス。",kalinaShowcaseDesc:"KALINAは市場データ、車両状態の履歴、価格トレンドを読み取り、その車の価値だけでなく「買うべきかどうか」まで教えてくれます。",
    faroShowcaseLabel:"FARO — AIソフトウェア開発",faroShowcaseTitle:"アイデアから、ソフトウェアへ。",faroShowcaseDesc:"作りたいものを言葉で伝えるだけ。FAROが計画を立て、実装し、あなたはレビューと改善を重ねられます。単なるチャット画面ではなく、本物の開発プロセスです。",
    philosophyEyebrow:"フィロソフィー",philosophyTitle:"つくる、ということ。",
    philosophyDesc:"私たちは、既存のカテゴリに合わせてプロダクトをつくるのではありません。自分たちが「あるべきだ」と思うものをかたちにし、最初の一行のコードから実際に使ってくれるお客様まで、自分たちの手で届けます。プロダクトはそれぞれ異なる個性を持っていますが、意思決定の仕方は共通しています——大切なことはじっくりと、それ以外は素早く。",
    techEyebrow:"テクノロジー",techTitle:"プロダクトを支えるテクノロジー。",techDesc:"技術そのものを誇るためではなく、これらのプロダクトを実現するために必要な要素です。",
    tech1Title:"AI・機械学習",tech1Desc:"KALINAのスコアリングとFAROのビルドプロセスを支えています。",
    tech2Title:"データ",tech2Desc:"常に最新の状態を保つ、市場・価格データのパイプライン。",
    tech3Title:"クラウドインフラ",tech3Desc:"各プロダクトの負荷に応じて、それぞれ独立してスケールします。",
    tech4Title:"自動化",tech4Desc:"注文や開発フローから、手作業のステップを取り除きます。",
    tech5Title:"ソフトウェアエンジニアリング",tech5Desc:"少人数のチームが当事者意識を持ち、素早く改善を重ねます。",
    tech6Title:"セキュリティ",tech6Desc:"お客様の情報や決済データは、設計段階から慎重に取り扱っています。",
    ecosystemEyebrow:"エコシステム",ecosystemTitle:"ひとつの会社に、複数のプロダクト。",ecosystemCaption:"PARASITE NOTIFY — 上記すべてのプロダクトの母体",
    companyEyebrow:"会社情報",companyTitle:"Parasite Notifyについて",
    companyP1:"Parasite Notifyは、他社のためではなく、自社のプロダクトを設計・運営するテクノロジーカンパニーです。私たちは「本気で解く価値がある」と思える課題から始め、最初の試作から何年にもわたる改善まで、その課題に向き合い続けます。",
    companyP2:"私たちはまだ発展途上です。プロダクトも成長の途中にあり、それを取り繕うのではなく、正直にお伝えしたいと思っています。",
    companyP3:"少人数の専属チームが、プロダクトの企画から運営までを一貫して担っています。方向性の意思決定はじっくりと慎重に、実装の意思決定は素早く進めます。大きくても架空のものより、小さくても本物のものを届けたいと考えています。",
    contactEyebrow:"お問い合わせ",contactTitle:"アイデアがありますか?<br>一緒に、何かをつくりましょう。",contactDesc:"プロダクトについて、協業について、あるいは一緒に働くことについて、お気軽にご連絡ください。"
  },
  haco:{
    cat:"越境コマース",title:"中国ショッピングを、もっとシンプルに。",
    desc:"中国のECサイトの商品リンクをHACOに送るだけ。注文、検品、通関手続き、そしてご自宅までの配送を私たちが代行します。",
    ctaStart:"注文をはじめる",ctaHow:"利用の流れ",
    whatEyebrow:"HACOとは",whatTitle:"あなたの代わりに、言葉の壁を越える購入代行。",
    whatDesc:"中国のECサイトには豊富な商品がありますが、そこへのアクセスが壁になります。HACOはその間をつなぐ存在です。購入・検品・まとめ発送を代行するので、あなたが向き合うのは複数のシステムではなく、ひとつの注文だけです。",
    howEyebrow:"利用の流れ",howTitle:"はじめから終わりまで、4つのステップで。",
    step1Title:"リンクを送る",step1Desc:"対応ECサイトの商品URLを貼り付けるだけ。",
    step2Title:"私たちが購入",step2Desc:"HACOが注文し、販売者への支払いも代行します。",
    step3Title:"検品",step3Desc:"倉庫を出る前に、商品の状態をしっかり確認します。",
    step4Title:"お届け",step4Desc:"追跡可能な状態で、まとめてご自宅までお届けします。",
    featEyebrow:"特長",featTitle:"つまずきやすいポイントを、あらかじめ解消。",
    feat1Title:"写真での検品",feat1Desc:"発送前にすべての商品を撮影し、届く前に状態を確認いただけます。",
    feat2Title:"まとめ発送",feat2Desc:"複数の注文をひとつにまとめることで、配送コストを抑えられます。",
    feat3Title:"進捗のお知らせ",feat3Desc:"注文の各段階を随時お知らせするので、こちらから確認する必要はありません。",
    feat4Title:"個人口座への振込不要",feat4Desc:"お支払いはすべてプラットフォーム経由。個人口座への振込は一切必要ありません。",
    pricingEyebrow:"料金",pricingTitle:"注文ごとの、わかりやすい料金体系。",
    price1Title:"サービス手数料",price1Desc:"代理購入する商品1点ごとに発生",price1Value:"¥300〜",
    price2Title:"検品",price2Desc:"発送前の写真確認",price2Value:"無料",
    price3Title:"配送料",price3Desc:"重量と配送先によって計算",price3Value:"注文時に確定",
    faqEyebrow:"よくある質問",faqTitle:"よくいただくご質問。",
    faq1Q:"HACOはどのECサイトに対応していますか?",faq1A:"主要な中国のECサイトに対応しています。詳しい一覧は注文時にご確認いただけます。",
    faq2Q:"配送にはどのくらい時間がかかりますか?",faq2A:"配送先やまとめ発送の状況によりますが、通常7〜14日程度です。",
    faq3Q:"商品が破損して届いた場合はどうなりますか?",faq3A:"検品時の写真を保管しておりますので、補償のご相談に活用いただけます。",
    ctaEyebrow:"はじめる",ctaTitle:"最初のリンクを送ってみましょう。",ctaDesc:"アカウントを作成すれば、数分で最初の注文を完了できます。",ctaBtn:"注文をはじめる"
  },
  kalina:{
    cat:"自動車インテリジェンス",title:"より良い車選びのための、インテリジェンス。",
    desc:"KALINAは価格、状態、市場データを分析し、その中古車が「いくらか」だけでなく「買う価値があるか」までお伝えします。",
    ctaCheck:"車両情報をチェック",ctaHow:"KALINAの仕組み",
    problemEyebrow:"課題",problemTitle:"中古車の掲載情報は、どれも似たり寄ったりに見える。",
    col1Title:"見えているもの",col1Desc:"価格と写真、走行距離だけ。その価格が妥当か、その車が信頼できるかは分かりません。",
    col2Title:"本当に必要なもの",col2Desc:"類似車両の市場価格、状態を示すシグナル、そして「この価格で買う価値があるか」という明確な答え。",
    howEyebrow:"KALINAの仕組み",howTitle:"データを入れれば、答えが出る。",howDesc:"KALINAは3つのシグナルをひとつのスコアにまとめます。分析はブラックボックスではなく、目に見える形で示されます。",
    factor1Label:"市場データ",factor1Title:"類似車両との価格比較",factor1Desc:"類似車両何千件もの掲載データを継続的に追跡し、適正価格の範囲を算出します。",
    factor2Label:"AI分析",factor2Title:"状態と履歴",factor2Desc:"写真や掲載文、車両履歴レポートを読み取り、リスクとなるサインを検出します。",
    factor3Label:"Kalina Score",factor3Title:"ひとつのスコアに",factor3Desc:"価格、状態、市場でのポジションを、0〜10のひとつのスコアに統合します。",
    prefEyebrow:"ユーザーの優先条件",prefTitle:"あなたが大切にする基準に合わせて。",
    prefDesc:"価格よりも信頼性を重視する方も、多少の状態と引き換えにお得さを取りたい方も。KALINAの判断サポートは、画一的な平均値ではなく、あなたが実際に大切にするトレードオフに合わせて調整されます。",
    ctaEyebrow:"はじめる",ctaTitle:"掲載情報を貼り付けて、スコアを見る。",ctaDesc:"実際に見に行く前に、適正価格の範囲とKalina Scoreを確認できます。",ctaBtn:"車両情報をチェック"
  },
  faro:{
    cat:"AIソフトウェア開発",title:"アイデアから、ソフトウェアへ。",
    desc:"作りたいものを言葉で伝えるだけ。FAROが計画を立て、コードを書き、あなたはレビューと改善を重ねられます。単なるチャット画面ではなく、本物の開発プロセスです。",
    ctaStart:"開発をはじめる",ctaHow:"開発の流れを見る",
    whatEyebrow:"FAROとは",whatTitle:"アシスタントではなく、AIプロダクトエンジニア。",
    whatDesc:"FAROはコードについての質問に答えるだけではありません。作業を計画し、ソフトウェアを構築し、あなたがレビュー・変更・リリースできる形で手渡します。",
    howEyebrow:"開発の流れ",howTitle:"プロンプトではなく、プロセス。",
    step1Title:"説明する",step1Desc:"アイデアを、自然な言葉で伝えるだけ。",
    step2Title:"AIが構築",step2Desc:"FAROが計画を立て、ソフトウェアを書き上げます。",
    step3Title:"レビュー",step3Desc:"何がどう変わったのか、正確に確認できます。",
    step4Title:"改善する",step4Desc:"同じように言葉で伝えるだけで、変更を依頼できます。",
    step5Title:"エクスポート",step5Desc:"コードはそのまま持ち出せます。ロックインはありません。",
    step6Title:"デプロイ",step6Desc:"準備ができたら、FAROから直接リリースできます。",
    ctaEyebrow:"はじめる",ctaTitle:"最初のアイデアを伝えてみましょう。",ctaDesc:"FAROが数分で動くビルドに仕上げ、すぐにレビューいただけます。",ctaBtn:"開発をはじめる"
  }
},
ko: {
  nav:{products:"제품",company:"회사 소개",technology:"기술",news:"뉴스",contact:"문의하기",viewProducts:"제품 보기"},
  footer:{tagline:"HACO, KALINA, FARO를 만드는 독립 기술 기업입니다.",productsHeading:"제품",companyHeading:"회사 소개",legalHeading:"법적 정보",about:"회사 소개",technology:"기술",news:"뉴스",privacy:"개인정보처리방침",terms:"이용약관",contact:"문의하기",newsComingSoon:"뉴스 — 준비 중"},
  home:{
    eyebrow:"독립 기술 기업",
    heroTitle1:"세상이 움직이는 방식에 맞춰 제품을 만듭니다.",
    heroTitle2:"하나의 제품이 아닙니다. 제품을 만들어내는 회사입니다.",
    heroDesc:"Parasite Notify는 커머스, 자동차 인텔리전스, 소프트웨어 개발 등 서로 다른 영역에서 독립적인 제품을 설계하고 개발하며 운영합니다.",
    exploreProducts:"제품 살펴보기",aboutCompany:"회사 소개 보기",
    productsTitle:"세 개의 제품, 하나의 회사.",
    productsDesc:"각 제품은 서로 다른 문제를 해결하기 위해 만들어졌으며, 고유한 팀과 디자인 언어, 로드맵을 가지고 있습니다. 이들을 하나로 묶는 것은 Parasite Notify가 제품을 만드는 방식입니다.",
    hacoCat:"크로스보더 커머스",hacoTileDesc:"언어와 물류의 장벽 없이 중국 쇼핑몰에서 구매하고 집까지 배송받으세요.",hacoExplore:"HACO 살펴보기 →",
    kalinaCat:"자동차 인텔리전스",kalinaTileDesc:"그 중고차가 정말 살 만한 가치가 있는지, 데이터와 분석으로 판단을 돕습니다.",kalinaExplore:"KALINA 살펴보기 →",
    faroCat:"AI 소프트웨어 개발",faroTileDesc:"아이디어를 실제로 동작하는 소프트웨어로. 개발은 AI가 맡으니, 당신은 아이디어에만 집중하면 됩니다.",faroExplore:"FARO 살펴보기 →",
    hacoShowcaseLabel:"HACO — 크로스보더 커머스",hacoShowcaseTitle:"중국 쇼핑을 더 간단하게.",hacoShowcaseDesc:"중국 쇼핑몰의 상품 링크를 HACO에 보내기만 하면 됩니다. 주문부터 통관, 배송까지 모두 대신 처리하고, 전 과정을 계속 알려드립니다.",
    kalinaShowcaseLabel:"KALINA — 자동차 인텔리전스",kalinaShowcaseTitle:"더 나은 자동차 선택을 위한 인텔리전스.",kalinaShowcaseDesc:"KALINA는 시장 데이터, 상태 이력, 가격 동향을 분석해 그 차의 가치는 물론 '사도 되는 차인지'까지 알려줍니다.",
    faroShowcaseLabel:"FARO — AI 소프트웨어 개발",faroShowcaseTitle:"아이디어에서 소프트웨어로.",faroShowcaseDesc:"만들고 싶은 것을 말로 설명하기만 하면 됩니다. FARO가 계획하고 구현하며, 당신은 검토하고 다듬어 나갈 수 있습니다. 단순한 채팅창이 아닌, 진짜 개발 프로세스입니다.",
    philosophyEyebrow:"철학",philosophyTitle:"우리는 만듭니다.",
    philosophyDesc:"우리는 기존 카테고리에 맞춰 제품을 만들지 않습니다. 존재해야 한다고 믿는 것을 직접 만들고, 첫 줄의 코드부터 이를 사용하는 고객에게 닿기까지 스스로 책임집니다. 제품마다 고유한 개성을 가지고 있지만, 의사결정 방식만큼은 같습니다 — 중요한 일은 신중하게, 그 외의 일은 빠르게.",
    techEyebrow:"기술",techTitle:"제품을 지탱하는 기술.",techDesc:"기술 스택 자체를 자랑하기 위함이 아니라, 이런 제품들을 실제로 만들어내기 위한 요소들입니다.",
    tech1Title:"AI 및 머신러닝",tech1Desc:"KALINA의 점수 산출과 FARO의 빌드 프로세스를 뒷받침합니다.",
    tech2Title:"데이터",tech2Desc:"항상 최신 상태를 유지하는 시장 및 가격 데이터 파이프라인.",
    tech3Title:"클라우드 인프라",tech3Desc:"각 제품의 부하에 맞춰 독립적으로 확장됩니다.",
    tech4Title:"자동화",tech4Desc:"주문 및 빌드 워크플로우에서 수작업 단계를 제거합니다.",
    tech5Title:"소프트웨어 엔지니어링",tech5Desc:"소수 정예 팀이 직접 책임지고, 빠르게 반복 개선합니다.",
    tech6Title:"보안",tech6Desc:"고객 정보와 결제 데이터는 설계 단계부터 신중하게 다룹니다.",
    ecosystemEyebrow:"생태계",ecosystemTitle:"하나의 회사, 여러 개의 제품.",ecosystemCaption:"PARASITE NOTIFY — 위 모든 제품의 모기업",
    companyEyebrow:"회사 소개",companyTitle:"Parasite Notify 소개",
    companyP1:"Parasite Notify는 다른 회사를 위해서가 아니라, 스스로의 제품을 설계하고 운영하는 기술 기업입니다. 우리는 진지하게 풀 만한 가치가 있다고 믿는 문제에서 출발해, 첫 프로토타입부터 수년에 걸친 개선까지 그 문제와 함께합니다.",
    companyP2:"우리는 아직 초기 단계에 있습니다. 제품들은 여전히 성장하는 중이며, 이를 포장하기보다는 있는 그대로 말씀드리고자 합니다.",
    companyP3:"소규모의 전담 팀이 제품의 기획부터 운영까지 전 과정을 책임집니다. 방향에 대한 의사결정은 신중하게, 구현에 대한 의사결정은 빠르게 진행합니다. 크지만 가상의 것보다, 작더라도 진짜인 것을 만들고 싶습니다.",
    contactEyebrow:"문의하기",contactTitle:"아이디어가 있으신가요?<br>함께 무언가를 만들어봐요.",contactDesc:"제품이나 협업, 또는 함께 일하는 것에 대해 언제든 연락해 주세요."
  },
  haco:{
    cat:"크로스보더 커머스",title:"중국 쇼핑을 더 간단하게.",
    desc:"중국 쇼핑몰의 상품 링크를 HACO에 보내기만 하면 됩니다. 주문, 검수, 통관, 그리고 문 앞까지의 배송을 저희가 대신 처리합니다.",
    ctaStart:"주문 시작하기",ctaHow:"이용 방법",
    whatEyebrow:"HACO란?",whatTitle:"언어의 장벽을 대신 넘어주는 구매 대행 서비스.",
    whatDesc:"중국 쇼핑몰에는 상품은 많지만, 접근이 쉽지 않습니다. HACO는 그 사이를 이어주는 존재입니다. 구매, 검수, 합배송까지 대신 처리해 드리니, 여러 시스템이 아닌 하나의 주문만 신경 쓰시면 됩니다.",
    howEyebrow:"이용 방법",howTitle:"처음부터 끝까지, 네 단계로.",
    step1Title:"링크 보내기",step1Desc:"지원되는 쇼핑몰의 상품 URL을 붙여넣기만 하면 됩니다.",
    step2Title:"저희가 구매",step2Desc:"HACO가 주문하고, 판매자에게 직접 결제합니다.",
    step3Title:"검수",step3Desc:"창고를 떠나기 전, 상품 상태를 꼼꼼히 확인합니다.",
    step4Title:"배송 완료",step4Desc:"추적 가능한 상태로 합배송하여 자택까지 보내드립니다.",
    featEyebrow:"특징",featTitle:"흔히 문제가 생기는 부분을 중심으로 설계했습니다.",
    feat1Title:"사진 검수",feat1Desc:"발송 전 모든 상품을 촬영해, 무엇이 도착하는지 미리 확인할 수 있습니다.",
    feat2Title:"합배송",feat2Desc:"여러 건의 구매를 하나의 배송으로 묶어 비용을 절감합니다.",
    feat3Title:"진행 상황 안내",feat3Desc:"주문의 각 단계를 바로바로 안내해 드리니, 따로 확인하실 필요가 없습니다.",
    feat4Title:"개인 계좌 송금 불필요",feat4Desc:"결제는 모두 플랫폼을 통해 이루어지며, 개인 계좌로 송금할 필요가 전혀 없습니다.",
    pricingEyebrow:"요금 안내",pricingTitle:"주문 건별, 이해하기 쉬운 요금.",
    price1Title:"서비스 수수료",price1Desc:"대신 구매하는 상품 1건당",price1Value:"¥300부터",
    price2Title:"검수",price2Desc:"발송 전 사진 확인",price2Value:"무료 포함",
    price3Title:"배송비",price3Desc:"무게와 배송지에 따라 산정",price3Value:"결제 시 확인",
    faqEyebrow:"자주 묻는 질문",faqTitle:"자주 받는 질문들.",
    faq1Q:"HACO는 어떤 쇼핑몰을 지원하나요?",faq1A:"주요 중국 쇼핑몰을 지원합니다. 전체 목록은 결제 시 확인하실 수 있습니다.",
    faq2Q:"배송은 얼마나 걸리나요?",faq2A:"배송지와 합배송 여부에 따라 다르지만, 보통 7~14일 정도 소요됩니다.",
    faq3Q:"상품이 파손된 채로 도착하면 어떻게 되나요?",faq3A:"검수 사진을 보관하고 있어, 보상 요청 시 근거 자료로 활용됩니다.",
    ctaEyebrow:"시작하기",ctaTitle:"첫 링크를 보내보세요.",ctaDesc:"계정을 만들고 몇 분 안에 첫 주문을 완료해 보세요.",ctaBtn:"주문 시작하기"
  },
  kalina:{
    cat:"자동차 인텔리전스",title:"더 나은 자동차 선택을 위한 인텔리전스.",
    desc:"KALINA는 가격, 상태, 시장 데이터를 분석해 그 중고차가 단순히 얼마인지가 아니라, 정말 살 가치가 있는지를 알려드립니다.",
    ctaCheck:"매물 확인하기",ctaHow:"KALINA 작동 방식",
    problemEyebrow:"문제점",problemTitle:"중고차 매물은 다 비슷해 보입니다.",
    col1Title:"보이는 것",col1Desc:"가격, 사진, 주행거리뿐입니다. 그 가격이 적절한지, 그 차가 믿을 만한지는 알 수 없습니다.",
    col2Title:"필요한 것",col2Desc:"비교 가능한 시세 정보, 상태를 나타내는 신호, 그리고 이 가격에 살 가치가 있는지에 대한 명확한 답.",
    howEyebrow:"KALINA 작동 방식",howTitle:"데이터를 넣으면, 판단이 나옵니다.",howDesc:"KALINA는 세 가지 신호를 하나의 점수로 결합합니다. 분석 과정이 블랙박스가 아닌, 눈에 보이는 형태로 제공됩니다.",
    factor1Label:"시장 데이터",factor1Title:"비교 시세",factor1Desc:"수천 건의 유사 매물을 지속적으로 추적해 적정 가격 범위를 산출합니다.",
    factor2Label:"AI 분석",factor2Title:"상태 및 이력",factor2Desc:"사진, 매물 설명, 이력 리포트를 분석해 위험 신호를 파악합니다.",
    factor3Label:"Kalina 점수",factor3Title:"하나의 숫자로",factor3Desc:"가격, 상태, 시장 내 위치를 하나의 0~10점 점수로 통합합니다.",
    prefEyebrow:"사용자 선호도",prefTitle:"당신에게 중요한 기준에 맞춰서.",
    prefDesc:"가격보다 신뢰성을 우선하든, 상태를 다소 양보하더라도 가격을 중시하든 — KALINA의 판단 지원은 일반적인 평균이 아닌, 당신이 실제로 중요하게 여기는 기준에 맞춰 조정됩니다.",
    ctaEyebrow:"시작하기",ctaTitle:"매물을 붙여넣고, 점수를 확인하세요.",ctaDesc:"직접 보러 가기 전에 적정 가격 범위와 Kalina 점수를 먼저 확인하세요.",ctaBtn:"매물 확인하기"
  },
  faro:{
    cat:"AI 소프트웨어 개발",title:"아이디어에서 소프트웨어로.",
    desc:"만들고 싶은 것을 말로 설명하기만 하면 됩니다. FARO가 계획을 세우고 코드를 작성하며, 당신은 검토하고 다듬어 나갈 수 있습니다. 단순한 채팅창이 아닌, 진짜 개발 프로세스입니다.",
    ctaStart:"빌드 시작하기",ctaHow:"프로세스 살펴보기",
    whatEyebrow:"FARO란?",whatTitle:"어시스턴트가 아닌, AI 프로덕트 엔지니어.",
    whatDesc:"FARO는 코드에 대한 질문에 답하는 데 그치지 않습니다. 작업을 계획하고 소프트웨어를 구축한 뒤, 검토하고 수정하고 배포할 수 있도록 결과물을 넘겨드립니다.",
    howEyebrow:"작동 방식",howTitle:"프롬프트가 아닌, 프로세스.",
    step1Title:"설명하기",step1Desc:"아이디어를 자연스러운 말로 설명하세요.",
    step2Title:"AI가 빌드",step2Desc:"FARO가 계획을 세우고 소프트웨어를 작성합니다.",
    step3Title:"검토",step3Desc:"무엇이 어떻게 바뀌었는지 정확히 확인하세요.",
    step4Title:"반복 개선",step4Desc:"같은 방식으로 말하기만 하면 변경을 요청할 수 있습니다.",
    step5Title:"내보내기",step5Desc:"코드를 그대로 가져갈 수 있습니다. 잠금 없이.",
    step6Title:"배포",step6Desc:"준비가 되면 FARO에서 바로 배포하세요.",
    ctaEyebrow:"시작하기",ctaTitle:"첫 아이디어를 설명해 보세요.",ctaDesc:"FARO가 몇 분 안에 실제로 동작하는 빌드로 만들어, 바로 검토하실 수 있습니다.",ctaBtn:"빌드 시작하기"
  }
},
zh: {
  nav:{products:"产品",company:"公司",technology:"技术",news:"新闻",contact:"联系我们",viewProducts:"查看产品"},
  footer:{tagline:"一家独立的科技公司,打造 HACO、KALINA 和 FARO。",productsHeading:"产品",companyHeading:"公司",legalHeading:"法律信息",about:"关于我们",technology:"技术",news:"新闻",privacy:"隐私政策",terms:"服务条款",contact:"联系我们",newsComingSoon:"新闻 — 敬请期待"},
  home:{
    eyebrow:"独立科技公司",
    heroTitle1:"我们打造契合世界运转方式的产品。",
    heroTitle2:"不止一款产品,而是一家不断创造产品的公司。",
    heroDesc:"Parasite Notify 在商业、汽车智能与软件开发等多个领域,设计、开发并运营独立的产品。",
    exploreProducts:"探索产品",aboutCompany:"了解公司",
    productsTitle:"三款产品,一家公司。",
    productsDesc:"每款产品都为解决不同的问题而生,拥有各自的团队、设计语言与路线图 —— 将它们统一起来的,是 Parasite Notify 打造产品的方式。",
    hacoCat:"跨境电商",hacoTileDesc:"无需担心语言和物流障碍,即可在中国电商平台购物并送货到家。",hacoExplore:"探索 HACO →",
    kalinaCat:"汽车智能",kalinaTileDesc:"用数据与分析,帮你判断一辆二手车是否真的值得购买。",kalinaExplore:"探索 KALINA →",
    faroCat:"AI 软件开发",faroTileDesc:"让创意变成可运行的软件 —— 开发交给 AI,你只需专注于想法本身。",faroExplore:"探索 FARO →",
    hacoShowcaseLabel:"HACO — 跨境电商",hacoShowcaseTitle:"让中国购物变得简单。",hacoShowcaseDesc:"只需把中国电商平台的商品链接发给 HACO。从下单、报关到配送,全程代办,并实时同步进度。",
    kalinaShowcaseLabel:"KALINA — 汽车智能",kalinaShowcaseTitle:"为更明智的购车决策提供智能支持。",kalinaShowcaseDesc:"KALINA 通过市场数据、车况历史与价格趋势进行分析,不仅告诉你这辆车值多少钱,更告诉你是否值得购买。",
    faroShowcaseLabel:"FARO — AI 软件开发",faroShowcaseTitle:"从创意到软件。",faroShowcaseDesc:"只需描述你想构建的内容。FARO 会规划并实现它,你可以随时审阅与迭代 —— 这是真正的开发流程,而不只是一个聊天窗口。",
    philosophyEyebrow:"理念",philosophyTitle:"我们,创造。",
    philosophyDesc:"我们不会为了迎合某个既有品类而做产品,而是打造我们认为理应存在的东西,并亲自将其交付 —— 从第一行代码,到真正使用它的用户手中。每款产品都有自己的个性,但决策方式始终如一:重要的事情从容推进,其余的事情快速推进。",
    techEyebrow:"技术",techTitle:"支撑产品的技术。",techDesc:"这并非我们引以为傲的技术堆栈本身,而是让这些产品得以实现的关键要素。",
    tech1Title:"AI 与机器学习",tech1Desc:"支撑着 KALINA 的评分系统与 FARO 的构建流程。",
    tech2Title:"数据",tech2Desc:"始终保持最新的市场与价格数据管道。",
    tech3Title:"云基础设施",tech3Desc:"根据各产品自身的负载独立扩展。",
    tech4Title:"自动化",tech4Desc:"从订单与构建流程中消除人工操作环节。",
    tech5Title:"软件工程",tech5Desc:"小团队直接负责,快速迭代。",
    tech6Title:"安全",tech6Desc:"客户与支付数据的处理,从设计之初就格外谨慎。",
    ecosystemEyebrow:"生态系统",ecosystemTitle:"一家公司,多款产品。",ecosystemCaption:"PARASITE NOTIFY — 上述所有产品的母公司",
    companyEyebrow:"公司",companyTitle:"关于 Parasite Notify",
    companyP1:"Parasite Notify 是一家设计并运营自有产品的科技公司,而非为他人代工。我们从认为真正值得解决的问题出发,并长期投入其中 —— 从第一个原型,到历经多年的持续迭代。",
    companyP2:"我们仍处于早期阶段。产品还在成长之中,与其粉饰,我们更愿意坦诚相告。",
    companyP3:"我们以小而专注的团队,端到端地负责各自的产品。关于方向的决策审慎而缓慢,关于实现的决策则果断而迅速。比起宏大却虚幻的东西,我们更愿意交付虽小却真实的成果。",
    contactEyebrow:"联系我们",contactTitle:"有想法吗?<br>一起来创造点什么吧。",contactDesc:"无论是关于产品、合作,还是加入我们,都欢迎随时联系。"
  },
  haco:{
    cat:"跨境电商",title:"让中国购物变得简单。",
    desc:"只需把中国电商平台的商品链接发给 HACO。我们负责下单、验货、报关,并配送到你家门口。",
    ctaStart:"立即下单",ctaHow:"使用流程",
    whatEyebrow:"什么是 HACO?",whatTitle:"替你跨越语言障碍的代购服务。",
    whatDesc:"中国电商平台商品丰富,却难以直接触及。HACO 正是连接两者的桥梁:代购、验货、合并发货,让你只需面对一个订单,而非五套不同的系统。",
    howEyebrow:"使用流程",howTitle:"从头到尾,只需四步。",
    step1Title:"发送链接",step1Desc:"粘贴任意支持平台的商品链接即可。",
    step2Title:"由我们下单",step2Desc:"HACO 代为下单,并直接向卖家付款。",
    step3Title:"验货",step3Desc:"商品在出库前会经过仔细检查。",
    step4Title:"送达",step4Desc:"合并包裹配送到你的地址,并提供物流追踪。",
    featEyebrow:"功能特色",featTitle:"围绕最容易出问题的环节而设计。",
    feat1Title:"拍照验货",feat1Desc:"发货前为每件商品拍照,让你提前了解商品状态。",
    feat2Title:"合并发货",feat2Desc:"将多笔订单合并为一次配送,节省运费。",
    feat3Title:"状态实时更新",feat3Desc:"订单每个阶段都会主动通知,无需你反复查询。",
    feat4Title:"无需私人转账",feat4Desc:"所有付款均通过平台进行,绝不会要求转账至个人账户。",
    pricingEyebrow:"价格",pricingTitle:"按订单计费,清晰简单。",
    price1Title:"服务费",price1Desc:"按代购商品件数收取",price1Value:"¥300 起",
    price2Title:"验货",price2Desc:"发货前拍照检查",price2Value:"包含在内",
    price3Title:"运费",price3Desc:"根据重量和目的地计算",price3Value:"结算时显示",
    faqEyebrow:"常见问题",faqTitle:"常见问题解答。",
    faq1Q:"HACO 支持哪些电商平台?",faq1A:"支持主要的中国电商平台,完整列表可在下单时查看。",
    faq2Q:"配送需要多长时间?",faq2A:"通常需要 7 至 14 天,具体取决于目的地及是否合并发货。",
    faq3Q:"如果商品在运输中损坏怎么办?",faq3A:"我们保留验货照片存档,可作为理赔申请的依据。",
    ctaEyebrow:"开始使用",ctaTitle:"发送你的第一个链接。",ctaDesc:"创建账户,几分钟即可完成你的第一笔订单。",ctaBtn:"立即下单"
  },
  kalina:{
    cat:"汽车智能",title:"为更明智的购车决策提供智能支持。",
    desc:"KALINA 通过分析价格、车况与市场数据,不仅告诉你这辆二手车值多少钱,更告诉你它是否真的值得购买。",
    ctaCheck:"查询车辆信息",ctaHow:"KALINA 如何运作",
    problemEyebrow:"痛点",problemTitle:"二手车信息看起来大同小异。",
    col1Title:"你看到的",col1Desc:"只有价格、照片和里程数 —— 无从判断价格是否合理,车辆是否可靠。",
    col2Title:"你需要的",col2Desc:"可比较的市场行情、车况信号,以及这辆车是否值这个价的明确答案。",
    howEyebrow:"KALINA 如何运作",howTitle:"输入数据,得出决策。",howDesc:"KALINA 将三种信号整合为一个分数,让分析过程清晰可见,而非黑箱操作。",
    factor1Label:"市场数据",factor1Title:"同类车价格对比",factor1Desc:"持续追踪数千条同类车源数据,得出合理的价格区间。",
    factor2Label:"AI 分析",factor2Title:"车况与历史",factor2Desc:"解析照片、车源描述与历史报告,识别潜在风险信号。",
    factor3Label:"Kalina 评分",factor3Title:"一个数字说明一切",factor3Desc:"将价格、车况与市场地位综合为一个 0 至 10 分的评分。",
    prefEyebrow:"用户偏好",prefTitle:"根据你的重视程度加权计算。",
    prefDesc:"无论你更看重可靠性而非价格,还是愿意为了优惠而妥协车况 —— KALINA 的决策支持会根据你真正在意的取舍来调整,而非千篇一律的平均值。",
    ctaEyebrow:"开始使用",ctaTitle:"粘贴车源信息,获取评分。",ctaDesc:"在实地看车之前,先了解合理价格区间与 Kalina 评分。",ctaBtn:"查询车辆信息"
  },
  faro:{
    cat:"AI 软件开发",title:"从创意到软件。",
    desc:"只需描述你想构建的内容。FARO 会规划并编写代码,你可以随时审阅与迭代 —— 这是真正的开发流程,而不只是一个聊天窗口。",
    ctaStart:"开始构建",ctaHow:"查看流程",
    whatEyebrow:"什么是 FARO?",whatTitle:"不是助手,而是 AI 产品工程师。",
    whatDesc:"FARO 不仅仅回答关于代码的问题 —— 它会规划工作、构建软件,并将成果交还给你审阅、修改与发布。",
    howEyebrow:"工作原理",howTitle:"这是流程,而非单次提示。",
    step1Title:"描述需求",step1Desc:"用自然语言说明你的想法。",
    step2Title:"AI 构建",step2Desc:"FARO 负责规划并编写软件。",
    step3Title:"审阅",step3Desc:"清楚了解每一处改动及其原因。",
    step4Title:"迭代优化",step4Desc:"用同样的自然语言提出修改需求。",
    step5Title:"导出",step5Desc:"代码可自由带走,无任何锁定。",
    step6Title:"部署",step6Desc:"准备就绪后,可直接从 FARO 发布上线。",
    ctaEyebrow:"开始使用",ctaTitle:"描述你的第一个创意。",ctaDesc:"FARO 会在几分钟内将其变为可运行的构建,供你随时审阅。",ctaBtn:"开始构建"
  }
}
};

(function(){
  const SUPPORTED = ["ja","en","ko","zh"];
  const STORAGE_KEY = "pn-lang";

  function detectLanguage(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const browserLangs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en"];
    for (const raw of browserLangs) {
      const code = raw.toLowerCase();
      if (code.startsWith("ja")) return "ja";
      if (code.startsWith("ko")) return "ko";
      if (code.startsWith("zh")) return "zh";
      if (code.startsWith("en")) return "en";
    }
    return "en";
  }

  function getValue(dict, path){
    return path.split(".").reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : undefined, dict);
  }

  function applyTranslations(lang){
    const dict = PN_TRANSLATIONS[lang] || PN_TRANSLATIONS.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const val = getValue(dict, el.getAttribute("data-i18n"));
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const val = getValue(dict, el.getAttribute("data-i18n-html"));
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll(".lang-switch button").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  function setLanguage(lang){
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
  }

  window.pnSetLanguage = setLanguage;

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(detectLanguage());
    document.querySelectorAll(".lang-switch button").forEach(btn => {
      btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
    });
  });
})();
