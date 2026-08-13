import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Syncs document title and meta description with the active locale. */
export default function I18nHead() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t('meta.title');
    const description = t('meta.description');
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [i18n.language, t]);

  return null;
}
