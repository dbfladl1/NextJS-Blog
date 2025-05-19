import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import merge from 'deepmerge';

 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

    const profile = (await import(`@/messages/profile/${locale}.json`)).default;
  
    const messages = merge.all([profile]);
  
  return {
    locale,
    messages: messages,
  };
});