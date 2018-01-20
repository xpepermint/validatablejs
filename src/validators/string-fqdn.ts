import { isString } from 'typeable';

export interface StringFQDNOptions {
  requireTld?: boolean;
  allowUnderscores?: boolean;
  allowTrailingDot?: boolean;
}

export function stringFQDN (value: any, options: StringFQDNOptions = {}): boolean {
  let { requireTld = true, allowUnderscores = false, allowTrailingDot = false } = options;

  if (!isString(value)) return false;

	if (allowTrailingDot && value[value.length - 1] === '.') {
		value = value.substring(0, value.length - 1);
	}

  let parts = value.split('.');

	if (requireTld) {
		let tld = parts.pop();

		if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
			return false;
		}
	}

	for (let part, i = 0; i < parts.length; i++) {
		part = parts[i];

		if (allowUnderscores) {
			if (part.indexOf('__') >= 0) {
				return false;
			}
      else {
  			part = part.replace(/_/g, '');
      }
		}

		if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
			return false;
		}
		else if (/[\uff01-\uff5e]/.test(part)) {
			return false; // disallow full-width chars
		}
		else if (part[0] === '-' || part[part.length - 1] === '-') {
			return false;
		}
	}
	return true;
}
