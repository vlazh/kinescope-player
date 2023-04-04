/* global google,Cookies */

const cookies = Cookies.withAttributes({
  path: '/',
  domain: `.${window.location.hostname}`,
  sameSite: 'Strict',
});

const config = {
  lang: 'ru',
  test: 'слово',
  event: 'translate-completed',
};

function translateClearCookie() {
  cookies.remove('googtrans');
  // Remove with defaults.
  Cookies.remove('googtrans');
  // Because of there are multiple cookies.
  const parts = window.location.hostname.split('.');
  if (parts.length > 2) {
    let lastParts = parts;
    while (lastParts.length > 2) {
      // eslint-disable-next-line no-undef
      [_, ...lastParts] = lastParts;
      cookies.remove('googtrans', { domain: `.${lastParts.join('.')}` });
    }
  }
}

function translateSetCookie(lang) {
  cookies.set('googtrans', `/${config.lang}/${lang}`, { expires: 365 });
}

function updateLang(lang) {
  if (lang === config.lang) {
    translateClearCookie();
  } else {
    translateSetCookie(lang);
  }
}

const urlLang = new URLSearchParams(window.location.search).get('lang');
if (urlLang) {
  updateLang(urlLang);
}

function translateGetLang() {
  return cookies.get('googtrans') || undefined;
}

const storedLang = translateGetLang();
const isTranslateActive = storedLang && storedLang !== config.lang;
// console.log('storedLang', storedLang, isTranslateActive);

function setLang({ target }) {
  const lang = target.getAttribute('data-glang');
  updateLang(lang);
  window.location.reload();
}

function hidePageMaybe() {
  if (!isTranslateActive) return;
  document.body.classList.add('hidden');
}

function showPage() {
  document.body.classList.remove('hidden');
}

function dispatchTranslateCompleted() {
  document.dispatchEvent(new CustomEvent(config.event));
}

function listenTranslateCompleted(word, isOrigin) {
  if (isOrigin) {
    dispatchTranslateCompleted();
    return;
  }

  const div = document.getElementById('translateTest');
  div.innerHTML = word;

  if (div.innerHTML !== word) {
    dispatchTranslateCompleted();
    return;
  }

  const changeHandler = () => {
    dispatchTranslateCompleted();
    // eslint-disable-next-line no-use-before-define
    observer.disconnect();
    // eslint-disable-next-line no-use-before-define
    clearTimeout(timer);
  };
  const observer = new MutationObserver(changeHandler);
  observer.observe(div, {
    childList: false,
    subtree: true,
    characterDataOldValue: true,
  });
  const timer = setTimeout(changeHandler, 5000);
}

// eslint-disable-next-line no-unused-vars
function googleTranslateInit() {
  document.addEventListener(config.event, showPage, { once: true });
  window.addEventListener('beforeunload', hidePageMaybe, { once: true });

  listenTranslateCompleted(config.test, !isTranslateActive);

  // eslint-disable-next-line no-new
  new google.translate.TranslateElement({
    pageLanguage: config.lang,
    includedLanguages: 'en',
    // multilanguagePage: true,
    // disableAutoTranslation: true,
    // autoDisplay: false,
    // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
  });
}

function init() {
  if (isTranslateActive && !window.google?.translate?.TranslateElement) {
    const script = document.createElement('script');
    script.src = `//translate.google.com/translate_a/element.js?cb=googleTranslateInit`;
    document.head.appendChild(script);
  } else {
    showPage();
  }

  Array.prototype.forEach.call(document.getElementsByClassName('lang'), (el) => {
    el.addEventListener('click', setLang);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
