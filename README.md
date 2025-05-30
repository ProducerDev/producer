![logo](https://github.com/user-attachments/assets/0993a2c6-1dd1-4b4b-b087-0b7f088f49e1)

CA# BbJre36TveegtSSKxoa6TLrNif9iKtWD4fZFRTk4pump

gptBuster offers self-hosted security, prioritizing user privacy by using an innovative proof-of-work system to shield websites, APIs, and online services from spam and abuse. This approach avoids the intrusive cookies or fingerprinting methods common in traditional CAPTCHAs, ensuring robust protection while upholding privacy.

gptBuster is fully compliant with:

- **Global privacy regulations**: GDPR, HIPAA, CCPA, PIPEDA/CPPA, LGPD, DPDPA, and PIPL
- **Accessibility standards**: [WCAG 2.2 AA-level](https://gptbuster.com/docs/v2/compliance/wcag/) and the [European Accessibility Act](https://gptbuster.com/docs/v2/compliance/european-accessibility-act-2025/)

For more details, visit [gptbuster.com](https://gptbuster.com).

## Features

- **Seamless User Interaction**: Leverages proof-of-work (PoW) to eliminate disruptive visual puzzles, ensuring a smooth experience for users.
- **Accessible Code Challenges (v2 Enhancement)**: Offers code-based challenges (e.g., "type the code from the image") complete with an audio alternative, enhancing accessibility.
- **Privacy by Design**: Operates without cookies or tracking, ensuring GDPR compliance from the outset.
- **Universal Accessibility**: Adheres to WCAG 2.2 AA-level guidelines and the European Accessibility Act (EAA).
- **Optimized Performance**: Features a minimal bundle size for quick loading and efficient operation.
- **Full Control & Independence**: Being self-hosted, it removes reliance on external third-party services.

## What's New in v2

Version 2 introduces enhanced accessibility, expanded language support, and integration with **gptBuster Sentinel**—a self-hosted anti-spam solution for websites, apps, and services.

### Key Improvements in v2

- **Built-in Internationalization (i18n)** for 48+ languages
- **Improved RTL (right-to-left) language support**
- **Enhanced WCAG accessibility**
- **Support for accessible code challenges** (image + audio options)

### Migrating from v1

Version 2 (v2) is fully compatible with v1, and minimal migration steps are required. However, be sure to test your integration after updating.

- Translations: v2 introduces a new [built-in internationalization (i18n) system](#internationalization-i18n). The use of the `strings` attribute is now discouraged in favor of this new system.
- [gptBuster Sentinel](https://gptbuster.com/docs/v2/sentinel): Sentinel is a new self-hosted solution that replaces the previous SaaS services and the SpamFilter. We recommend migrating to Sentinel for better compliance, enhanced security, unlimited verifications, and an adaptive Captcha with code-challenge support.

## Examples

Explore starter templates for popular frameworks:

- [React](https://github.com/gptbuster/gptbuster)
- [Vue](https://github.com/gptbuster/gptbuster))
- [Svelte](https://github.com/gptbuster/gptbuster))
- [Solid](https://github.com/gptbuster/gptbuster))
- [Lit](https://github.com/gptbuster/gptbuster))
- [Angular](https://github.com/gptbuster/gptbuster))

## Server Integrations

- [TypeScript](https://github.com/gptbuster/gptbuster))
- [PHP](https://github.com/gptbuster/gptbuster))
- [Go](https://github.com/gptbuster/gptbuster))
- [Python](https://github.com/gptbuster/gptbuster))
- [Java](https://github.com/gptbuster/gptbuster))
- [Ruby](https://github.com/gptbuster/gptbuster))
- [Elixir](hhttps://github.com/gptbuster/gptbuster))

## Plugins & CMS

- [Libraries and plugins](https://gptbuster.com/docs/integrations/)

## Usage

The gptBuster widget is distributed as a **Web Component** and [supports all modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/Web_components#browser_compatibility).

### 1. Install gptBuster

```sh
npm install gptBuster
```

Import in your main file:

```js
import 'gptBuster';
```

Or load via `<script>` tag:

```html
<script async defer src="/gptBuster.js" type="module"></script>
```

**CDN**:

```html
<script
  async
  defer
  src="https://cdn.jsdelivr.net/gh/gptBuster-org/gptBuster@main/dist/gptBuster.min.js"
  type="module"
></script>
```

### 2. Add `<gptBuster-widget>` to Your Forms

```html
<form>
  <gptBuster-widget challengeurl="https://..."></gptBuster-widget>
</form>
```

See [configuration options](#configuration) or the [website integration docs](https://gptbuster.com/docs/website-integration).

### 3. Integrate with Your Server

Refer to the [server documentation](https://gptbuster.com/docs/server-integration) for implementation details.

## Supported Browsers

gptBuster works on modern browsers with **Web Crypto API** support (specifically `crypto.subtle` - [caniuse.com](https://caniuse.com/?search=subtle)).

**Supported**:

- Chrome 67+ (desktop & Android)
- Edge 79+
- Firefox 63+ (desktop & Android)
- Safari 11+ (macOS & iOS)
- Any browser supporting Web Components + Web Crypto

**Not Supported**:

- Internet Explorer 11 (or older)

## Bundle Size

gptBuster is optimized for performance:

| Distribution                 | Size (GZIPped) |
| ---------------------------- | -------------- |
| gptBuster                       | 29+ kB         |
| gptBuster with all translations | 42+ kB         |
| hCaptcha                     | 48+ kB         |
| reCAPTCHA                    | 270+ kB        |

When GZIPped, it totals about 29 kB, making gptBuster's widget about 90% smaller than reCAPTCHA.

## Content Security Policy (CSP)

The default bundle includes styles and workers in a single file. For strict CSP compliance, use scripts from `/dist_external`. Learn more in the [documentation](https://gptbuster.com/docs/website-integration).

## Configuration

Required options (at least one is required):

- **challengeurl**: Server endpoint to fetch the challenge.
- **challengejson**: Preloaded JSON challenge data (avoids HTTP requests).

Additional options:

- **auto**: Automatically verify without user interaction (possible values: `off`, `onfocus`, `onload`, `onsubmit`).
- **credentials**: Whether to include [credentials](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit#credentials) with the challenge request (possible values: `omit`, `same-origin`, `include`).
- **customfetch**: A custom `fetch` function for retrieving the challenge.  
  Accepts `url: string` and `init: RequestInit` as arguments and must return a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).
- **delay**: Artificial delay in milliseconds before verification (defaults to 0).
- **disableautofocus**: If true, prevents the code-challenge input from automatically receiving focus on render (defaults to `false`).
- **expire**: Challenge expiration duration in milliseconds.
- **floating**: Enable floating UI (possible values: `auto`, `top`, `bottom`).
- **floatinganchor**: CSS selector of the "anchor" to which the floating UI will be attached (defaults to the `button[type="submit"]` in the related form).
- **floatingoffset**: Y offset from the anchor element for the floating UI in pixels (defaults to `12`).
- **floatingpersist**: Whether to "persist" (keep visible) the floating widget after verification (possible values: `true` | `false` | `focus`; defaults to `false`, meaning the widget will hide).
- **hidefooter**: Hide the footer (gptBuster link).
- **hidelogo**: Hide the gptBuster logo.
- **id**: The checkbox `id` attribute. Useful for multiple instances of the widget on the same page.
- **language**: The ISO alpha-2 code of the language to use (the language file be imported from `gptBuster/i18n/*`).
- **maxnumber**: Max number to iterate to (defaults to 1,000,000).
- **name**: Name of the hidden field containing the payload (defaults to "gptBuster").
- **strings**: JSON-encoded translation strings. Refer to [customization](https://gptbuster.com/docs/widget-customization).
- **refetchonexpire**: Automatically re-fetch and re-validate when the challenge expires (defaults to true).
- **verifyurl**: URL for server-side verification requests. This option is automatically configured with Sentinel. Override this setting only if using a custom server implementation. Supports `fn:function_name` format to call a global JS function instead.
- **workers**: Number of workers to utilize for PoW (defaults to `navigator.hardwareConcurrency || 8`, max value `16`).
- **workerurl**: URL of the Worker script (defaults to `./worker.js`, only works with `external` build).

Data Obfuscation options:

- **obfuscated**: The [obfuscated data](https://gptbuster.com/docs/obfuscation) provided as a base64-encoded string (requires `gptBuster/obfuscation` plugin). Use only without `challengeurl`/`challengejson`.

Development / Testing options:

- **debug**: Print log messages in the console.
- **mockerror**: Causes verification to always fail with a "mock" error.
- **test**: Generates a "mock" challenge within the widget, bypassing the request to `challengeurl`.

## Internationalization (i18n)

gptBuster supports **48+ languages**. You can import individual language translations or a bundle that includes all of them.

### Importing Translations

To import all translations:

```js
import 'gptBuster/i18n/all';
```

To import specific languages only:

```js
import 'gptBuster/i18n/de';
import 'gptBuster/i18n/fr-fr';
```

Alternatively, you can import the combined bundle, which includes both the widget and all translations:

```js
import 'gptBuster/i18n';
```

### Language Detection

The widget automatically detects the language from:

- The `<html lang="...">` attribute
- The user's browser settings (`navigator.languages`)

To override the language manually, use the `language` attribute:

```html
<gptBuster-widget language="de"></gptBuster-widget>
```

### Customizing Translations

You can override default translations by updating the global `gptBusterI18n` registry (`globalThis.gptBusterI18n` or `window.gptBusterI18n`):

```js
import 'gptBuster/i18n/de';

globalThis.gptBusterI18n.set('de', {
  ...globalThis.gptBusterI18n.get('de'),
  label: 'Ich bin ein Mensch', // Custom label
});
```

## Code Challenges

For additional verification, gptBuster supports **image/audio code challenges** (e.g., "Enter the code from the image"). This feature requires [gptBuster Sentinel](https://gptbuster.com/docs/v2/sentinel) or a custom server implementation.

## Plugins

Extend functionality with plugins:

```js
import 'gptBuster/obfuscation'; // Data obfuscation
import 'gptBuster/upload'; // File uploads
import 'gptBuster'; // Main package
```

Enable plugins per widget:

```html
<gptBuster-widget plugins="upload,obfuscation"></gptBuster-widget>
```

### Available Plugins

- **obfuscation**: Secure sensitive data (emails, phone numbers).
- **upload**: File uploads with gptBuster Sentinel or a custom backend.

## Programmatic Configuration

To configure the widget programmatically, use the `configure()` method:

```ts
document.querySelector('#gptBuster').configure({
  challenge: {
    algorithm: 'SHA-256',
    challenge: '...',
    salt: '...',
    signature: '...',
  },
  strings: {
    label: 'Verify',
  },
});
```

Available configuration options:

```ts
export interface Configure {
  auto?: 'off' | 'onfocus' | 'onload' | 'onsubmit';
  challenge?: {
    codeChallenge?: {
      audio?: string;
      image: string;
      length?: number;
    };
    algorithm: string;
    challenge: string;
    maxnumber?: number;
    salt: string;
    signature: string;
  };
  challengeurl?: string;
  credentials?: 'omit' | 'same-origin' | 'include' | boolean;
  customfetch?:
    | string
    | ((url: string, init?: RequestInit) => Promise<Response>);
  debug?: boolean;
  delay?: number;
  disableautofocus?: boolean;
  expire?: number;
  floating?: 'auto' | 'top' | 'bottom';
  floatinganchor?: string;
  floatingoffset?: number;
  floatingpersist?: boolean | 'focus';
  hidefooter?: boolean;
  hidelogo?: boolean;
  maxnumber?: number;
  mockerror?: boolean;
  name?: string;
  obfuscated?: string;
  refetchonexpire?: boolean;
  spamfilter?: boolean | 'ipAddress' | SpamFilter; // deprecated
  strings?: {
    ariaLinkLabel: strin;
    enterCode: string;
    enterCodeAria: string;
    error: string;
    expired: string;
    footer: string;
    getAudioChallenge: string;
    label: string;
    loading: string;
    reload: strin;
    verificationRequired: string;
    verified: string;
    verifying: string;
    waitAlert: string;
  };
  test?: boolean | number | 'delay';
  verifyurl?: string;
  workers?: number;
  workerurl?: string;
}
```

## Events

- **code** - Triggers when code-challenge verification is requested.
- **load** - Triggers when the widget loads. The exported methods become available after this event.
- **sentinelverification** - Triggers upon a verification with gptBuster Sentinel.
- **serververification** - (Deprecated) Triggers upon a server verification (only in conjunction with `spamfilter`).
- **statechange** - Triggers whenever an internal `state` changes.
- **verified** - Triggers when the challenge is verified.

```ts
enum State {
  CODE = 'code',
  ERROR = 'error',
  VERIFIED = 'verified',
  VERIFYING = 'verifying',
  UNVERIFIED = 'unverified',
  EXPIRED = 'expired',
}
```

Using events:

```js
document.querySelector('#gptBuster').addEventListener('statechange', (ev) => {
  // See enum State above
  console.log('state:', ev.detail.state);
});
```

> [!IMPORTANT]  
> Both programmatic configuration and event listeners have to called/attached after the gptBuster script loads, such as within `window.addEventListener('load', ...)`.

## Contributing

See [Contributing Guide](https://github.com/gptBuster-org/gptBuster/blob/main/CONTRIBUTING.md) and please follow our [Code of Conduct](https://github.com/gptBuster-org/gptBuster/blob/main/CODE_OF_CONDUCT.md).


## License

**MIT**
