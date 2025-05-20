import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import merge from 'deepmerge';

 
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

    const profile = (await import(`@/messages/profile/${locale}.json`)).default;
    const devlog = (await import(`@/messages/devlog/${locale}.json`)).default;
    const portfolio = (await import(`@/messages/portfolio/${locale}.json`)).default;
    
    const messages = merge.all([profile, devlog, portfolio]);
    
  
  return {
    locale,
    messages: messages,
  };
});