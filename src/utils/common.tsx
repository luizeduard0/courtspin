import { MODALITY } from "./constants";

export function getUsersByModality(modality: MODALITY) {
  if (modality === 'SINGLES') {
    return 2
  } else if (modality === 'DOUBLES') {
    return 4
  } else {
    return 0
  }
}