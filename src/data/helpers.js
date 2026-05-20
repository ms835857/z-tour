// Mapping of destination IDs to provinces for precision lookup
const PROVINCE_MAP = {
  lahore: 'Punjab',
  islamabad: 'Punjab', // Group Capital Territory with Punjab for proximity
  rawalpindi: 'Punjab',
  multan: 'Punjab',
  faisalabad: 'Punjab',
  gujranwala: 'Punjab',
  sialkot: 'Punjab',
  bahawalpur: 'Punjab',
  sargodha: 'Punjab',
  murree: 'Punjab',
  chiniot: 'Punjab',
  kasur: 'Punjab',
  sahiwal: 'Punjab',
  attock: 'Punjab',
  jhelum: 'Punjab',
  mianwali: 'Punjab',
  bhurban: 'Punjab',
  soon_valley: 'Punjab',
  cholistan_desert: 'Punjab',
  harappa: 'Punjab',
  taxila: 'Punjab',
  rohtas_fort: 'Punjab',
  derawar_fort: 'Punjab',
  uch_sharif: 'Punjab',
  katas_raj_temples: 'Punjab',
  shalimar_gardens: 'Punjab',
  hiran_minar: 'Punjab',
  shekhupura: 'Punjab',
  rajanpur: 'Punjab',

  karachi: 'Sindh',
  mohenjo_daro: 'Sindh',
  hyderabad: 'Sindh',
  sukkur: 'Sindh',
  nawabshah: 'Sindh',
  larkana: 'Sindh',
  khairpur: 'Sindh',
  gorakh_hill: 'Sindh',
  bhanbhore: 'Sindh',
  ranikot_fort: 'Sindh',
  shah_jahan_mosque: 'Sindh',
  shrine_of_lal_shahbaz_qalandar: 'Sindh',
  gambat: 'Sindh',
  dadu: 'Sindh',
  thar_desert: 'Sindh',
  makli_necropolis: 'Sindh',
  chaukhandi_tombs: 'Sindh',

  swat: 'Khyber Pakhtunkhwa',
  peshawar: 'Khyber Pakhtunkhwa',
  abbottabad: 'Khyber Pakhtunkhwa',
  mardan: 'Khyber Pakhtunkhwa',
  chitral: 'Khyber Pakhtunkhwa',
  kalash_valley: 'Khyber Pakhtunkhwa',
  kumrat_valley: 'Khyber Pakhtunkhwa',
  shogran: 'Khyber Pakhtunkhwa',
  siri_paye: 'Khyber Pakhtunkhwa',
  babusar_top: 'Khyber Pakhtunkhwa',
  ayubia: 'Khyber Pakhtunkhwa',
  nathiagali: 'Khyber Pakhtunkhwa',
  thandiani: 'Khyber Pakhtunkhwa',
  takht_i_bahi: 'Khyber Pakhtunkhwa',
  jamrud_fort: 'Khyber Pakhtunkhwa',
  naran_kaghan: 'Khyber Pakhtunkhwa',
  khyber_pass: 'Khyber Pakhtunkhwa',
  dir: 'Khyber Pakhtunkhwa',
  garam_chashma: 'Khyber Pakhtunkhwa',

  quetta: 'Balochistan',
  gwadar: 'Balochistan',
  mastung: 'Balochistan',
  khuzdar: 'Balochistan',
  hingol_national_park: 'Balochistan',
  kund_malir: 'Balochistan',
  ormara: 'Balochistan',
  astola_island: 'Balochistan',
  ziarat: 'Balochistan',
  bolan_pass: 'Balochistan',
  mehergarh: 'Balochistan',
  chagai: 'Balochistan',
  pishin: 'Balochistan',
  kalat: 'Balochistan',

  hunza: 'Gilgit-Baltistan',
  skardu: 'Gilgit-Baltistan',
  fairy_meadows: 'Gilgit-Baltistan',
  deosai_plains: 'Gilgit-Baltistan',
  khunjerab_pass: 'Gilgit-Baltistan',
  naltar_valley: 'Gilgit-Baltistan',
  phander_valley: 'Gilgit-Baltistan',
  rama_meadows: 'Gilgit-Baltistan',
  astore: 'Gilgit-Baltistan',
  khaplu: 'Gilgit-Baltistan',
  shigar: 'Gilgit-Baltistan',
  passu: 'Gilgit-Baltistan',
  gulmit: 'Gilgit-Baltistan',
  gojal: 'Gilgit-Baltistan',
  rakaposhi_basecamp: 'Gilgit-Baltistan',
  baltit_fort: 'Gilgit-Baltistan',
  altit_fort: 'Gilgit-Baltistan',
  ganesh_settlement: 'Gilgit-Baltistan',

  mirpur: 'Azad Kashmir',
  muzaffarabad: 'Azad Kashmir',
  neelum_valley: 'Azad Kashmir'
};

/**
 * Gets the province name for a destination node.
 * Uses high-accuracy map and falls back to description scanning.
 */
export function getProvince(dest) {
  if (!dest || !dest.id) return 'Other';
  const id = dest.id.toLowerCase();
  if (PROVINCE_MAP[id]) return PROVINCE_MAP[id];

  const desc = dest.description ? dest.description.toLowerCase() : '';
  if (desc.includes('punjab')) return 'Punjab';
  if (desc.includes('sindh')) return 'Sindh';
  if (desc.includes('kpk') || desc.includes('khyber') || desc.includes('pakhtunkhwa')) return 'Khyber Pakhtunkhwa';
  if (desc.includes('balochistan')) return 'Balochistan';
  if (desc.includes('gilgit') || desc.includes('baltistan') || desc.includes('gb')) return 'Gilgit-Baltistan';
  if (desc.includes('ajk') || desc.includes('kashmir')) return 'Azad Kashmir';

  return 'Other';
}

/**
 * Classifies the travel connectivity between two destinations.
 */
export function getLinkageType(sourceId, targetId) {
  const sId = sourceId.toLowerCase();
  const tId = targetId.toLowerCase();
  const sourceProv = PROVINCE_MAP[sId] || 'Other';
  const targetProv = PROVINCE_MAP[tId] || 'Other';

  // 1. Flight Paths (Connecting distant areas, e.g. North to South or distant hubs)
  const isFlight =
    (sId === 'lahore' && tId === 'karachi') || (tId === 'lahore' && sId === 'karachi') ||
    (sId === 'islamabad' && tId === 'karachi') || (tId === 'islamabad' && sId === 'karachi') ||
    (sId === 'islamabad' && tId === 'skardu') || (tId === 'islamabad' && sId === 'skardu') ||
    (sId === 'karachi' && tId === 'skardu') || (tId === 'karachi' && sId === 'skardu') ||
    (sId === 'peshawar' && tId === 'skardu') || (tId === 'peshawar' && sId === 'skardu') ||
    (sId === 'karachi' && tId === 'quetta') || (tId === 'karachi' && sId === 'quetta') ||
    (sId === 'karachi' && tId === 'gwadar') || (tId === 'karachi' && sId === 'gwadar') ||
    (sId === 'lahore' && tId === 'skardu') || (tId === 'lahore' && sId === 'skardu');

  if (isFlight) return 'Flight Path';

  // 2. Scenic Mountain Drives (Located in Gilgit-Baltistan, Azad Kashmir, or KPK mountains)
  const isMountainProvince = (prov) => prov === 'Gilgit-Baltistan' || prov === 'Azad Kashmir';
  const isMountainDestination = (id) => [
    'swat', 'naran_kaghan', 'shogran', 'siri_paye', 'babusar_top', 'ayubia', 'nathiagali', 'thandiani',
    'kumrat_valley', 'kalash_valley', 'chitral', 'neelum_valley', 'muzaffarabad'
  ].includes(id);

  if (
    isMountainProvince(sourceProv) ||
    isMountainProvince(targetProv) ||
    isMountainDestination(sId) ||
    isMountainDestination(tId)
  ) {
    return 'Scenic Road';
  }

  // 3. Expressways & Motorways (All other domestic connectivity)
  return 'Expressway';
}
