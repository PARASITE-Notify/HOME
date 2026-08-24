// ============================================================
// Parasite Notify i18n
// ============================================================

const LANGUAGES = {
  ja: { label: '日本語', short: 'JP' },
  en: { label: 'English', short: 'EN' },
  ko: { label: '한국어', short: 'KO' },
  zh: { label: '中文', short: 'ZH' }
};

const DEFAULT_LANG = 'ja';

// ----------------------------------------------
// 翻訳適用
// ----------------------------------------------
async function switchLanguage(lang) {
  try {
    console.log(`[i18n] Switching to: ${lang}`);

    const res = await fetch(`/locales/${lang}.json`);
    if (!res.ok) {
      console.error(`[i18n] Failed to load ${lang}.json: ${res.status} ${res.statusText}`);
      throw new Error(`Language file not found: ${lang}`);
    }

    const trans = await res.json();
    console.log(`[i18n] Loaded translations for ${lang}`, trans);

    const getValue = (obj, path) =>
      path.split('.').reduce((o, k) => (o || {})[k], obj);

    // data-i18n を持つ要素
    const elements = document.querySelectorAll('[data-i18n]');
    console.log(`[i18n] Found ${elements.length} elements with data-i18n`);

    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = getValue(trans, key);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
        console.log(`[i18n] Updated: ${key} → ${text.substring(0, 30)}...`);
      } else {
        console.warn(`[i18n] Missing translation for key: ${key}`);
      }
    });

    // data-i18n-html を持つ要素（HTMLを含む翻訳用）
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const text = getValue(trans, key);
      if (text) {
        el.innerHTML = text;
        console.log(`[i18n] Updated (HTML): ${key}`);
      }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('user_lang', lang);

    updateLanguageSelector(lang);

  } catch (err) {
    console.error('[i18n] Language switch error:', err);
  }
}

// ----------------------------------------------
// セレクター更新
// ----------------------------------------------
function updateLanguageSelector(lang) {
  const current = document.getElementById('currentLanguage');
  if (current) {
    const info = LANGUAGES[lang] || LANGUAGES[DEFAULT_LANG];
    current.textContent = info.short + ' / ' + info.label;
  }

  document.querySelectorAll('.language-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

// ----------------------------------------------
// メニュー開閉
// ----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  console.log('[i18n] DOM ready, initializing language switcher...');

  const select = document.getElementById('languageSelect');
  const menu = document.getElementById('languageMenu');

  console.log('[i18n] languageSelect:', select);
  console.log('[i18n] languageMenu:', menu);

  if (select && menu) {
    select.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle('open');
      select.setAttribute('aria-expanded', String(isOpen));
      console.log('[i18n] Menu toggled:', isOpen);
    });

    document.querySelectorAll('.language-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const lang = opt.dataset.lang;
        if (lang) {
          console.log('[i18n] Language selected:', lang);
          switchLanguage(lang);
          menu.classList.remove('open');
          select.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', () => {
      menu.classList.remove('open');
      select.setAttribute('aria-expanded', 'false');
    });
  } else {
    console.error('[i18n] languageSelect or languageMenu not found!');
  }

  // 初期言語
  const saved = localStorage.getItem('user_lang');
  const browserLang = navigator.language.slice(0, 2);
  const defaultLang = Object.keys(LANGUAGES).includes(browserLang)
    ? browserLang
    : DEFAULT_LANG;

  const initialLang = saved || defaultLang;
  console.log('[i18n] Initial language:', initialLang);
  switchLanguage(initialLang);
});