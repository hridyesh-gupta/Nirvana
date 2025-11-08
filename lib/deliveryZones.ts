/**
 * Delivery zones configuration and utilities.
 *
 * All zipcodes are stored as strings to preserve leading zeros.
 */

// Types
export type DeliveryZone = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface ZoneInfo {
  readonly zone: DeliveryZone;
  readonly zipcodes: readonly string[];
  readonly minimumOrder: number; // CHF
  readonly deliveryFee: number; // CHF
}

type MutableZoneInfo = {
  zone: DeliveryZone;
  zipcodes: string[];
  minimumOrder: number;
  deliveryFee: number;
};

// Configuration
const ZONE_DATA: MutableZoneInfo[] = [
  {
    zone: 1,
    zipcodes: ["1211", "1217"],
    minimumOrder: 40,
    deliveryFee: 5.9,
  },
  {
    zone: 2,
    zipcodes: ["1214", "1215", "1216", "1218", "1220", "1242"],
    minimumOrder: 60,
    deliveryFee: 10,
  },
  {
    zone: 3,
    zipcodes: [
      "1201",
      "1202",
      "1203",
      "1209",
      "1219",
      "1239",
      "1292",
      "1293",
      "1294",
    ],
    minimumOrder: 80,
    deliveryFee: 12.5,
  },
  {
    zone: 4,
    zipcodes: [
      "1213",
      "1232",
      "1233",
      "1236",
      "1237",
      "1281",
      "1283",
      "1288",
      "1290",
      "1291",
      "1295",
      "1296",
    ],
    minimumOrder: 100,
    deliveryFee: 15,
  },
  {
    zone: 5,
    zipcodes: [
      "1204",
      "1205",
      "1206",
      "1207",
      "1208",
      "1212",
      "1227",
      "1228",
      "1258",
      "1285",
      "1286",
      "1287",
    ],
    minimumOrder: 120,
    deliveryFee: 17.5,
  },
  {
    zone: 6,
    zipcodes: [
      "1223",
      "1224",
      "1225",
      "1231",
      "1234",
      "1244",
      "1253",
      "1255",
      "1256",
      "1257",
      "1279",
      "1284",
      "1297",
      "1298",
    ],
    minimumOrder: 150,
    deliveryFee: 20,
  },
  {
    zone: 7,
    zipcodes: [
      "1222",
      "1226",
      "1241",
      "1243",
      "1245",
      "1246",
      "1247",
      "1248",
      "1251",
      "1252",
      "1254",
      "1260",
      "1263",
      "1277",
      "1299",
    ],
    minimumOrder: 200,
    deliveryFee: 25,
  },
];

export const DELIVERY_ZONES: readonly ZoneInfo[] = Object.freeze(
  ZONE_DATA.map((zone) =>
    Object.freeze({
      ...zone,
      zipcodes: Object.freeze([...zone.zipcodes]),
    })
  )
);

const zipToZone: Map<string, ZoneInfo> = (() => {
  const mapping = new Map<string, ZoneInfo>();
  for (const zoneInfo of DELIVERY_ZONES) {
    for (const zipcode of zoneInfo.zipcodes) {
      mapping.set(zipcode, zoneInfo);
    }
  }
  return mapping;
})();

/**
 * Find zone information by zipcode.
 * @param zipcode - The customer's zipcode (string, preserves leading zeros)
 * @returns ZoneInfo if found, otherwise null
 */
export function getZoneByZipcode(zipcode: string): ZoneInfo | null {
  const normalized = normalizeZipcode(zipcode);
  if (!normalized) {
    return null;
  }
  return zipToZone.get(normalized) ?? null;
}

/**
 * Get the delivery fee for a given zone.
 * @param zone - The delivery zone number
 * @returns Delivery fee in CHF, or 0 if zone is not found
 */
export function getDeliveryFeeByZone(zone: DeliveryZone): number {
  const found = DELIVERY_ZONES.find((z) => z.zone === zone);
  return found ? found.deliveryFee : 0;
}

/**
 * Get the minimum order amount for a given zone.
 * @param zone - The delivery zone number
 * @returns Minimum order in CHF, or 0 if zone is not found
 */
export function getMinimumOrderByZone(zone: DeliveryZone): number {
  const found = DELIVERY_ZONES.find((z) => z.zone === zone);
  return found ? found.minimumOrder : 0;
}

/**
 * Validate whether an order subtotal meets the zone's minimum order requirement.
 * @param zone - The delivery zone number
 * @param orderSubtotal - The order subtotal in CHF (before delivery fee)
 * @returns An object with validity flag and the minimum required amount
 */
export function validateMinimumOrder(zone: DeliveryZone, orderSubtotal: number): {
  isValid: boolean;
  minimumRequired: number;
} {
  const minimumRequired = getMinimumOrderByZone(zone);
  const orderSubtotalInCents = Math.round(orderSubtotal * 100);
  const minimumRequiredInCents = Math.round(minimumRequired * 100);

  return {
    isValid: orderSubtotalInCents >= minimumRequiredInCents,
    minimumRequired,
  };
}

const ZIP_LENGTH = 4;

const ZIPCODE_DIGIT_PATTERN = /^\d{1,4}$/;

function normalizeZipcode(zipcode: string): string | null {
  const normalized = String(zipcode).trim();

  if (!ZIPCODE_DIGIT_PATTERN.test(normalized)) {
    return null;
  }

  if (normalized.length > ZIP_LENGTH) {
    return null;
  }

  return normalized.padStart(ZIP_LENGTH, "0");
}


