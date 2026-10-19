/* Bundled cancel table. Steps change over time; the link is the best starting point. */
var RF_MERCHANTS = [
 {
  "name": "Netflix",
  "match": [
   "NETFLIX"
  ],
  "cancelUrl": "https://www.netflix.com/cancelplan",
  "steps": "Account > Cancel Membership."
 },
 {
  "name": "Spotify",
  "match": [
   "SPOTIFY"
  ],
  "cancelUrl": "https://www.spotify.com/account/subscription/",
  "steps": "Account > Your plan > Change plan > Cancel Premium."
 },
 {
  "name": "Hulu",
  "match": [
   "HULU"
  ],
  "cancelUrl": "https://secure.hulu.com/account",
  "steps": "Account > Cancel Your Subscription."
 },
 {
  "name": "Disney+",
  "match": [
   "DISNEY PLUS",
   "DISNEYPLUS",
   "DISNEY+"
  ],
  "cancelUrl": "https://www.disneyplus.com/account/subscription",
  "steps": "Account > Subscription > Cancel Subscription."
 },
 {
  "name": "Max",
  "match": [
   "HBO MAX",
   "HBOMAX",
   "MAX.COM",
   "WWW.MAX"
  ],
  "cancelUrl": "https://auth.max.com/subscription",
  "steps": "Settings > Subscription > Manage > Cancel Subscription."
 },
 {
  "name": "Peacock",
  "match": [
   "PEACOCK"
  ],
  "cancelUrl": "https://www.peacocktv.com/account/plans",
  "steps": "Account > Plans and Payment > Change Plan > Cancel."
 },
 {
  "name": "Paramount+",
  "match": [
   "PARAMOUNT"
  ],
  "cancelUrl": "https://www.paramountplus.com/account/",
  "steps": "Account > Cancel Subscription."
 },
 {
  "name": "Apple",
  "match": [
   "APPLE.COM/BILL",
   "APPLE COM BILL",
   "ITUNES"
  ],
  "cancelUrl": "https://support.apple.com/en-us/118428",
  "steps": "Settings > your name > Subscriptions on iPhone, then pick the one to cancel."
 },
 {
  "name": "Google",
  "match": [
   "GOOGLE *",
   "GOOGLE STORAGE",
   "GOOGLE ONE",
   "GOOGLE PLAY"
  ],
  "cancelUrl": "https://play.google.com/store/account/subscriptions",
  "steps": "Play Store > Payments and subscriptions > Subscriptions > Cancel."
 },
 {
  "name": "YouTube Premium",
  "match": [
   "YOUTUBE",
   "GOOGLE YOUTUBE",
  "GOOGLE *YOUTUBE"
  ],
  "cancelUrl": "https://www.youtube.com/paid_memberships",
  "steps": "Your purchases and memberships > Manage membership > Deactivate."
 },
 {
  "name": "Amazon Prime",
  "match": [
   "AMAZON PRIME",
   "PRIME VIDEO",
   "AMZN PRIME",
   "PRIME MEMBERSHIP"
  ],
  "cancelUrl": "https://www.amazon.com/mc/manage",
  "steps": "Account > Prime Membership > End membership."
 },
 {
  "name": "Kindle Unlimited",
  "match": [
   "KINDLE UNLTD",
   "KINDLE UNLIMITED"
  ],
  "cancelUrl": "https://www.amazon.com/kindle-dbs/ku/ku-central",
  "steps": "Kindle Unlimited > Manage membership > Cancel."
 },
 {
  "name": "Audible",
  "match": [
   "AUDIBLE"
  ],
  "cancelUrl": "https://www.audible.com/account/overview",
  "steps": "On a web browser: Account Details > Cancel membership."
 },
 {
  "name": "Adobe",
  "match": [
   "ADOBE"
  ],
  "cancelUrl": "https://account.adobe.com/plans",
  "steps": "Plans > Manage plan > Cancel your plan. Annual plans billed monthly may have an early cancel fee."
 },
 {
  "name": "Microsoft 365",
  "match": [
   "MICROSOFT",
   "MSFT",
   "XBOX"
  ],
  "cancelUrl": "https://account.microsoft.com/services",
  "steps": "Services and subscriptions > Manage > Cancel subscription."
 },
 {
  "name": "Planet Fitness",
  "match": [
   "PLANET FITNESS",
   "PLANET FIT",
   "PF CLUB"
  ],
  "cancelUrl": "https://www.planetfitness.com/my-account",
  "steps": "Some clubs allow online cancel; others require a visit or a certified letter to your home club."
 },
 {
  "name": "LA Fitness",
  "match": [
   "LA FITNESS",
   "LAFITNESS"
  ],
  "cancelUrl": "https://www.lafitness.com/Pages/cancellation.aspx",
  "steps": "Print the cancellation form and mail it or hand it in at the club."
 },
 {
  "name": "Anytime Fitness",
  "match": [
   "ANYTIME FITNESS"
  ],
  "cancelUrl": "https://www.anytimefitness.com/",
  "steps": "Contact your home club; cancellation is handled per franchise."
 },
 {
  "name": "24 Hour Fitness",
  "match": [
   "24 HOUR FITNESS",
   "24HOURFIT"
  ],
  "cancelUrl": "https://www.24hourfitness.com/members/",
  "steps": "Member account > Membership > Cancel, or ask at the club."
 },
 {
  "name": "Crunch Fitness",
  "match": [
   "CRUNCH"
  ],
  "cancelUrl": "https://www.crunch.com/",
  "steps": "Contact your home club; many require a written request."
 },
 {
  "name": "Equinox",
  "match": [
   "EQUINOX"
  ],
  "cancelUrl": "https://www.equinox.com/",
  "steps": "Contact membership services; written notice is usually required."
 },
 {
  "name": "Peloton",
  "match": [
   "PELOTON"
  ],
  "cancelUrl": "https://members.onepeloton.com/preferences/subscriptions",
  "steps": "Preferences > Subscriptions > Cancel."
 },
 {
  "name": "SiriusXM",
  "match": [
   "SIRIUSXM",
   "SIRIUS XM",
   "SIRIUS"
  ],
  "cancelUrl": "https://care.siriusxm.com/",
  "steps": "Sign in to your account and cancel online, or chat with an agent."
 },
 {
  "name": "New York Times",
  "match": [
   "NYTIMES",
   "NY TIMES",
   "NEW YORK TIMES"
  ],
  "cancelUrl": "https://myaccount.nytimes.com/seg/subscription",
  "steps": "Account > Subscription overview > Cancel subscription."
 },
 {
  "name": "Wall Street Journal",
  "match": [
   "WSJ",
   "WALL STREET JOURNAL",
   "DOW JONES"
  ],
  "cancelUrl": "https://customercenter.wsj.com/",
  "steps": "Customer Center > Subscriptions > Cancel."
 },
 {
  "name": "Washington Post",
  "match": [
   "WASHINGTON POST",
   "WASHPOST"
  ],
  "cancelUrl": "https://subscribe.washingtonpost.com/myaccount/",
  "steps": "My account > Subscription > Cancel."
 },
 {
  "name": "DoorDash DashPass",
  "match": [
   "DASHPASS",
   "DOORDASH DASHPASS"
  ],
  "cancelUrl": "https://www.doordash.com/consumer/membership/",
  "steps": "Account > DashPass > End Subscription."
 },
 {
  "name": "Uber One",
  "match": [
   "UBER ONE",
   "UBER *ONE",
   "UBERONE"
  ],
  "cancelUrl": "https://account.uber.com/",
  "steps": "Uber app > Account > Uber One > Manage membership > End membership."
 },
 {
  "name": "Grubhub+",
  "match": [
   "GRUBHUB+",
   "GRUBHUB PLUS",
   "GH PLUS"
  ],
  "cancelUrl": "https://www.grubhub.com/account/manage-membership",
  "steps": "Account > Grubhub+ > Cancel membership."
 },
 {
  "name": "Instacart+",
  "match": [
   "INSTACART+",
   "INSTACART PLUS",
   "INSTACART MEMBERSHIP"
  ],
  "cancelUrl": "https://www.instacart.com/store/account/instacart-plus",
  "steps": "Account > Instacart+ > Manage > End membership."
 },
 {
  "name": "ChatGPT Plus",
  "match": [
   "OPENAI",
   "CHATGPT"
  ],
  "cancelUrl": "https://chatgpt.com/#settings/Subscription",
  "steps": "Settings > Subscription > Manage > Cancel plan."
 },
 {
  "name": "Claude",
  "match": [
   "ANTHROPIC",
   "CLAUDE.AI"
  ],
  "cancelUrl": "https://claude.ai/settings/billing",
  "steps": "Settings > Billing > Cancel plan."
 },
 {
  "name": "Midjourney",
  "match": [
   "MIDJOURNEY"
  ],
  "cancelUrl": "https://www.midjourney.com/account",
  "steps": "Manage Subscription > Cancel Plan."
 },
 {
  "name": "GitHub",
  "match": [
   "GITHUB"
  ],
  "cancelUrl": "https://github.com/settings/billing",
  "steps": "Settings > Billing and plans > Downgrade or cancel."
 },
 {
  "name": "Dropbox",
  "match": [
   "DROPBOX"
  ],
  "cancelUrl": "https://www.dropbox.com/account/plan",
  "steps": "Settings > Plan > Cancel plan."
 },
 {
  "name": "iCloud+",
  "match": [
   "ICLOUD"
  ],
  "cancelUrl": "https://support.apple.com/en-us/108047",
  "steps": "Settings > your name > iCloud > Manage storage > Change plan > Downgrade."
 },
 {
  "name": "Canva",
  "match": [
   "CANVA"
  ],
  "cancelUrl": "https://www.canva.com/settings/billing-and-teams",
  "steps": "Settings > Billing and plans > Cancel subscription."
 },
 {
  "name": "Grammarly",
  "match": [
   "GRAMMARLY"
  ],
  "cancelUrl": "https://account.grammarly.com/subscription",
  "steps": "Account > Subscription > Cancel subscription."
 },
 {
  "name": "Zoom",
  "match": [
   "ZOOM.US",
   "ZOOM VIDEO",
   "ZOOM.COM"
  ],
  "cancelUrl": "https://zoom.us/billing",
  "steps": "Account Management > Billing > Cancel subscription."
 },
 {
  "name": "Slack",
  "match": [
   "SLACK"
  ],
  "cancelUrl": "https://slack.com/help/articles/203953146",
  "steps": "Workspace settings > Billing > Change plan > Cancel."
 },
 {
  "name": "Notion",
  "match": [
   "NOTION"
  ],
  "cancelUrl": "https://www.notion.so/help/upgrade-or-downgrade-your-plan",
  "steps": "Settings > Plans > Downgrade."
 },
 {
  "name": "LinkedIn Premium",
  "match": [
   "LINKEDIN"
  ],
  "cancelUrl": "https://www.linkedin.com/premium/manage/",
  "steps": "Me > Premium features > Manage Premium account > Cancel subscription."
 },
 {
  "name": "Duolingo",
  "match": [
   "DUOLINGO"
  ],
  "cancelUrl": "https://www.duolingo.com/settings/super",
  "steps": "Settings > Manage subscription, or cancel in the app store you subscribed through."
 },
 {
  "name": "Headspace",
  "match": [
   "HEADSPACE"
  ],
  "cancelUrl": "https://www.headspace.com/subscriptions",
  "steps": "Account > Subscription > Cancel."
 },
 {
  "name": "Calm",
  "match": [
   "CALM.COM",
   "CALM APP"
  ],
  "cancelUrl": "https://www.calm.com/account",
  "steps": "Cancel in the app store you subscribed through, or Account > Manage subscription."
 },
 {
  "name": "Strava",
  "match": [
   "STRAVA"
  ],
  "cancelUrl": "https://www.strava.com/account",
  "steps": "Settings > My Account > Downgrade."
 },
 {
  "name": "Tinder",
  "match": [
   "TINDER"
  ],
  "cancelUrl": "https://help.tinder.com/hc/en-us/articles/115003334046",
  "steps": "Cancel in the app store you subscribed through."
 },
 {
  "name": "Bumble",
  "match": [
   "BUMBLE"
  ],
  "cancelUrl": "https://bumble.com/help",
  "steps": "Cancel in the app store you subscribed through."
 },
 {
  "name": "Match",
  "match": [
   "MATCH.COM",
   "MATCH GROUP"
  ],
  "cancelUrl": "https://www.match.com/settings",
  "steps": "Settings > Manage Subscription > Cancel."
 },
 {
  "name": "Hinge",
  "match": [
   "HINGE"
  ],
  "cancelUrl": "https://hingeapp.zendesk.com/",
  "steps": "Cancel in the app store you subscribed through."
 },
 {
  "name": "ESPN+",
  "match": [
   "ESPN"
  ],
  "cancelUrl": "https://plus.espn.com/",
  "steps": "Account > Subscriptions > Cancel."
 },
 {
  "name": "YouTube TV",
  "match": [
   "YOUTUBE TV",
   "YOUTUBETV"
  ],
  "cancelUrl": "https://tv.youtube.com/settings/membership",
  "steps": "Settings > Membership > Manage > Cancel."
 },
 {
  "name": "Sling TV",
  "match": [
   "SLING"
  ],
  "cancelUrl": "https://www.sling.com/my-account",
  "steps": "My Account > Cancel Subscription."
 },
 {
  "name": "Fubo",
  "match": [
   "FUBO"
  ],
  "cancelUrl": "https://www.fubo.tv/account",
  "steps": "My Profile > Subscription and Billing > Cancel Subscription."
 },
 {
  "name": "Philo",
  "match": [
   "PHILO"
  ],
  "cancelUrl": "https://www.philo.com/account",
  "steps": "Account > Cancel subscription."
 },
 {
  "name": "Apple TV+",
  "match": [
   "APPLE TV"
  ],
  "cancelUrl": "https://tv.apple.com/settings",
  "steps": "Settings > Subscriptions > Cancel."
 },
 {
  "name": "Crunchyroll",
  "match": [
   "CRUNCHYROLL"
  ],
  "cancelUrl": "https://www.crunchyroll.com/account/membership",
  "steps": "Account > Membership > Cancel."
 },
 {
  "name": "Starz",
  "match": [
   "STARZ"
  ],
  "cancelUrl": "https://www.starz.com/us/en/account",
  "steps": "Account > Cancel subscription."
 },
 {
  "name": "AMC+",
  "match": [
   "AMC+",
   "AMC PLUS"
  ],
  "cancelUrl": "https://www.amcplus.com/account",
  "steps": "Account > Cancel subscription."
 },
 {
  "name": "BritBox",
  "match": [
   "BRITBOX"
  ],
  "cancelUrl": "https://www.britbox.com/account",
  "steps": "Account > Subscription > Cancel."
 },
 {
  "name": "Xbox Game Pass",
  "match": [
   "XBOX GAME PASS",
   "GAME PASS"
  ],
  "cancelUrl": "https://account.microsoft.com/services",
  "steps": "Services and subscriptions > Game Pass > Manage > Cancel."
 },
 {
  "name": "PlayStation Plus",
  "match": [
   "PLAYSTATION",
   "SONY INTERACTIVE",
   "PLAYSTATIONNETWORK"
  ],
  "cancelUrl": "https://www.playstation.com/acct/management",
  "steps": "Account management > Subscription management > Turn off auto-renew."
 },
 {
  "name": "Nintendo Switch Online",
  "match": [
   "NINTENDO"
  ],
  "cancelUrl": "https://accounts.nintendo.com/shop",
  "steps": "Nintendo Account > Shop menu > turn off automatic renewal."
 },
 {
  "name": "Patreon",
  "match": [
   "PATREON"
  ],
  "cancelUrl": "https://www.patreon.com/settings/memberships",
  "steps": "Settings > Memberships > Edit > Cancel membership."
 },
 {
  "name": "Walmart+",
  "match": [
   "WALMART+",
   "WALMART PLUS",
   "WMT PLUS"
  ],
  "cancelUrl": "https://www.walmart.com/plus/account",
  "steps": "Account > Walmart+ > Cancel membership."
 },
 {
  "name": "Costco Membership",
  "match": [
   "COSTCO MEMBERSHIP",
   "COSTCO MBR"
  ],
  "cancelUrl": "https://customerservice.costco.com/",
  "steps": "Visit a membership counter or call member services."
 },
 {
  "name": "Sam's Club",
  "match": [
   "SAMS CLUB MEMBERSHIP",
   "SAMSCLUB MEMBER"
  ],
  "cancelUrl": "https://www.samsclub.com/account",
  "steps": "Call member services or visit a club."
 },
 {
  "name": "Hello Fresh",
  "match": [
   "HELLOFRESH",
   "HELLO FRESH"
  ],
  "cancelUrl": "https://www.hellofresh.com/my-account/deliveries/menu",
  "steps": "Account settings > Plan settings > Cancel plan."
 },
 {
  "name": "Blue Apron",
  "match": [
   "BLUE APRON",
   "BLUEAPRON"
  ],
  "cancelUrl": "https://www.blueapron.com/account",
  "steps": "Account > Cancel subscription."
 },
 {
  "name": "Factor",
  "match": [
   "FACTOR75",
   "FACTOR MEALS"
  ],
  "cancelUrl": "https://www.factor75.com/account-settings",
  "steps": "Account settings > Plan settings > Cancel plan."
 },
 {
  "name": "Chewy Autoship",
  "match": [
   "CHEWY"
  ],
  "cancelUrl": "https://www.chewy.com/app/account/autoship",
  "steps": "Autoship > Manage > Cancel Autoship."
 },
 {
  "name": "Ring Protect",
  "match": [
   "RING.COM",
   "RING PROTECT",
   "RING YEARLY",
   "RING MONTHLY"
  ],
  "cancelUrl": "https://account.ring.com/account/control-center",
  "steps": "Control Center > Plan > Cancel."
 },
 {
  "name": "SimpliSafe",
  "match": [
   "SIMPLISAFE"
  ],
  "cancelUrl": "https://webapp.simplisafe.com/",
  "steps": "Call SimpliSafe support; online cancel may not be offered."
 },
 {
  "name": "NordVPN",
  "match": [
   "NORDVPN",
   "NORD VPN",
   "NORDSEC"
  ],
  "cancelUrl": "https://my.nordaccount.com/billing/my-subscriptions/",
  "steps": "Nord Account > Billing > Subscriptions > Cancel auto-renewal."
 },
 {
  "name": "ExpressVPN",
  "match": [
   "EXPRESSVPN"
  ],
  "cancelUrl": "https://www.expressvpn.com/subscriptions",
  "steps": "My Subscriptions > Turn off automatic renewal."
 },
 {
  "name": "1Password",
  "match": [
   "1PASSWORD",
   "AGILEBITS"
  ],
  "cancelUrl": "https://my.1password.com/billing",
  "steps": "Billing > Cancel subscription."
 },
 {
  "name": "Norton",
  "match": [
   "NORTON",
   "GEN DIGITAL"
  ],
  "cancelUrl": "https://my.norton.com/extspa/subscriptions",
  "steps": "My Subscriptions > Turn off automatic renewal."
 },
 {
  "name": "McAfee",
  "match": [
   "MCAFEE"
  ],
  "cancelUrl": "https://home.mcafee.com/root/myaccount.aspx",
  "steps": "My Account > Auto-Renewal settings > Turn off."
 },
 {
  "name": "Experian",
  "match": [
   "EXPERIAN"
  ],
  "cancelUrl": "https://usa.experian.com/",
  "steps": "Call Experian to cancel paid membership."
 },
 {
  "name": "Shipt",
  "match": [
   "SHIPT"
  ],
  "cancelUrl": "https://www.shipt.com/account",
  "steps": "Account > Membership > Cancel."
 },
 {
  "name": "Weight Watchers",
  "match": [
   "WW INTERNATIONAL",
   "WEIGHTWATCHERS",
   "WW.COM"
  ],
  "cancelUrl": "https://www.weightwatchers.com/us/myaccount",
  "steps": "Settings > Subscription > Cancel."
 },
 {
  "name": "Noom",
  "match": [
   "NOOM"
  ],
  "cancelUrl": "https://www.noom.com/support/",
  "steps": "Use the cancel option in Noom account settings or the app store."
 },
 {
  "name": "Scribd",
  "match": [
   "SCRIBD",
   "EVERAND"
  ],
  "cancelUrl": "https://www.scribd.com/account-settings",
  "steps": "Account settings > Subscription > Cancel."
 },
 {
  "name": "Pandora",
  "match": [
   "PANDORA"
  ],
  "cancelUrl": "https://www.pandora.com/settings/subscription",
  "steps": "Settings > Subscription > Switch plans > Cancel."
 },
 {
  "name": "Tidal",
  "match": [
   "TIDAL"
  ],
  "cancelUrl": "https://account.tidal.com/subscription",
  "steps": "Account > Subscription > Cancel."
 },
 {
  "name": "Amazon Music",
  "match": [
   "AMAZON MUSIC",
   "AMZN MUSIC"
  ],
  "cancelUrl": "https://www.amazon.com/music/settings",
  "steps": "Amazon Music settings > Cancel subscription."
 }
];
if (typeof module !== 'undefined') module.exports = RF_MERCHANTS;
