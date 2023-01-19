export type CurrencyCode = 'USD' | 'EUR' | 'JPY' | 'GBP' | 'MXN' | 'ARS';

export type LocaleCode =
  | 'en-US'
  | 'de-DE'
  | 'ja-JP'
  | 'en-GB'
  | 'es-AR'
  | 'es-MX';

export function formatCurrencyWrapper(
  amount: number | undefined,
  currency: CurrencyCode = 'USD',
  locale: LocaleCode = 'en-US'
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount || 0);
}
