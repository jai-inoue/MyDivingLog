import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './en';
import ja from './ja';

i18n.fallbacks = true;
i18n.translations = { ja, en };
i18n.locale = Localization.locale;

export default i18n;
