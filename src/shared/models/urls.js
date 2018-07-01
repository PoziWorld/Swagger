import { Map } from 'immutable';

import * as utils from 'Shared/utils';

const URLS = Map( {
  // Channel-specific
  ACCOUNT_HOMEPAGE: '/account/settings',
  ANSWER_HOMEPAGE: '/surveys',
  DISCOVER_HOMEPAGE: '/discover',
  HOMEPAGE_HOMEPAGE: '/', // Will there be categories, pages for this channel?
  PLAY_HOMEPAGE: '/games',
  REWARDS_HOMEPAGE: '/rewards-store',
  REWARDS_SEARCH: '/p/category/-3?srt=5&src=%s',
  SEARCH_HOMEPAGE: 'https://search.swagbucks.com/',
  SEARCH_WEB: '/?q=%s',
  SHOP_HOMEPAGE: '/shop',
  SHOP_CATEGORY_SHOES: '/shop/stores/1/shoes',
  SHOP_SEARCH: '/shop/search/?shq=%s',
  SWAGSTAKES_HOMEPAGE: '/swagstakes',
  SWAGSTAKES_SEARCH: '/s/category/-3?srt=5&src=%s',
  WATCH_HOMEPAGE: '/watch',

  // Standalone pages
  ABOUT: '/g/about',
  INBOX: '/g/inbox',
  INVITE: '/invite',
  MOBILE: '/mobile',
  PRIVACY: 'https://www.prodege.com/privacy/',
  TERMS: 'https://www.prodege.com/terms/',
  SWAGBUTTON: '/swagbutton',

  // External
  EXTENSION_OPTIONS_CHROMIUM: 'chrome://extensions/?options=EXTENSION_ID',
  EXTENSION_HELP: 'https://github.com/PoziWorld/Swaggy',
  EXTENSION_COMMANDS: 'https://github.com/PoziWorld/Swaggy#supported-commands',
  EXTENSION_COMMANDS_EXAMPLES: 'https://github.com/PoziWorld/Swaggy#examples-of-what-you-can-say',
} );

/**
 * Find a URL by the link name.
 *
 * @param {string} linkName
 * @return {(string|boolean)}
 */

export default function getUrl( linkName ) {
  if ( utils.isNonEmptyString( linkName ) ) {
    return URLS.get( linkName.toUpperCase() );
  }

  return false;
}
